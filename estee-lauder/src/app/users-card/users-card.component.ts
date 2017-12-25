import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { UserCard } from '../user-card';

@Component({
    selector: 'app-users-card',
    template: `
    <div class="user-card" *ngIf="user">

        <div class="user-card-header">
            <div class="user-card-header__left">
                <div class="user-card__name" *ngIf="user.name">{{user.name}}</div>
                <div class="user-card__occupation" *ngIf="user.occupation">{{user.occupation}}</div>
            </div>
            <div class="user-card-header__right">
                <div class="user-card__age" *ngIf="user.age">{{user.getAgePlural(['год', 'года', 'лет'])}}</div>
                <div class="user-card__date" *ngIf="user.birth_date">{{user.birth_date | prettyDate}}</div>
            </div>
        </div>

        <div class="user-card-contacts">
            <div class="user-card-contacts__left">
                <div class="user-card-field">
                    <div class="user-card-field__label">Контакты</div>
                    <div class="user-card-field__value user-card-contacts_email">{{user.email}}</div>
                    <div class="user-card-field__value user-card-contacts_phone">{{user.phone | phone}}</div>
                </div>
                <div class="user-card-field" *ngIf="user.address">
                    <div class="user-card-field__label">Адрес</div>
                    <div class="user-card-field__value user-card-contacts_address">{{user.address}}</div>
                </div>
            </div>
            <div class="user-card-contacts__right">
                <a href="#" class="button user-card-contacts__button" (click)="$event.preventDefault();showCommentDialog=true;lockPage(true)">написать</a>
            </div>
        </div>

        <div class="user-card-comment" *ngIf="user.comment">
            <div class="user-card-field__label">Комментарий кандитата</div>
            <div class="user-card-field__value" [innerHTML]="user.comment"></div>
        </div>

        <div class="user-card-files" *ngIf="user.files">
            <a *ngFor="let file of user.files;trackBy: index" [href]="file.link | safeUrl" target="_blank" class="user-card-files-item">
                <span *ngIf="file.name" class="user-card-files-item__name">{{file.name}}</span>
                <span *ngIf="file.size" class="user-card-files-item__size">{{file.size}}</span>
            </a>
        </div>

        <div class="user-card-controls" [ngSwitch]="user?.getStatus()?.type">
            <ng-container *ngSwitchCase="'approved'">
                <a href="#" class="button" (click)="$event.preventDefault();showRejectDialog=true">Отклонить</a>
                <span class="button button_disabled">Кандидат принят</span>
            </ng-container>
            <ng-container *ngSwitchCase="'rejected'">
                <span class="button button_disabled">Кандидат отклонен</span>
                <a href="#" class="button button_black" (click)="$event.preventDefault();showApproveDialog=true">Принять</a>
            </ng-container>
            <ng-container *ngSwitchDefault>
                <a href="#" class="button" (click)="$event.preventDefault();showRejectDialog=true">Отклонить</a>
                <a href="#" class="button button_black" (click)="$event.preventDefault();showApproveDialog=true">Принять</a>
            </ng-container>
        </div>

        <div class="popup" *ngIf="showApproveDialog">
            <div class="popup-layout" (click)="showApproveDialog=false;lockPage(false)"></div>
            <div class="popup-content">
                <a href="#" class="popup-close" (click)="showApproveDialog=false;lockPage(false)"></a>
                <div class="popup-title">Подтверждение</div>

                <div class="form-field">
                    <div class="form-field__label">Выберите профессию и скидку</div>
                    <div class="select" [ngClass]="{'type_open': showOccupationOptions}">
                        <div class="select-layout" (click)="showOccupationOptions=false"></div>
                        <div class="select-option selected-value" (click)="showOccupationOptions=!showOccupationOptions">
                            <span class="select-option-discount" *ngIf="occupationModel?.discount" [style.backgroundColor]="occupationModel?.color">{{occupationModel?.discount}}</span>
                            <span class="select-option-text">{{occupationModel?.name || 'Выбрать'}}</span>
                        </div>
                        <div class="select-options">
                            <ng-template ngFor let-occupation [ngForOf]="occupationList"; let-i=index>
                                <div class="select-option" *ngIf="occupation.tag!=occupationModel?.tag" (click)="occupationModel=occupation;showOccupationOptions=false">
                                    <span class="select-option-discount" *ngIf="occupation.discount" [style.backgroundColor]="occupation.color">{{occupation.discount}}</span>
                                    <span class="select-option-text">{{occupation.name}}</span>
                                </div>
                            </ng-template>
                        </div>
                    </div>
                </div>

                <div class="popup-controls">
                    <a href="#" class="button" (click)="$event.preventDefault();showApproveDialog=false;lockPage(false)">Отмена</a>
                    <a href="#" class="button button_black" [ngClass]="{button_disabled: !occupationModel}" (click)="$event.preventDefault();onApprove.emit({user: user, occupation: occupationModel});showApproveDialog=false;lockPage(false)">Принять</a>
                </div>

            </div>
        </div>

        <div class="popup" *ngIf="showRejectDialog">
            <div class="popup-layout" (click)="showRejectDialog=false;lockPage(false)"></div>
            <div class="popup-content">
                <a href="#" class="popup-close" (click)="showRejectDialog=false;lockPage(false)"></a>
                <div class="popup-title">Причина отклонения</div>

                <div class="form-field">
                    <div class="form-field__label">Укажите причину отклонения заявки</div>
                    <textarea [(ngModel)]="rejectModel"></textarea>
                </div>

                <div class="popup-controls">
                    <a href="#" class="button" (click)="$event.preventDefault();showRejectDialog=false;lockPage(false);rejectModel=''">Отмена</a>
                    <a href="#" class="button button_black" (click)="$event.preventDefault();onReject.emit({user: user, message: rejectModel});showRejectDialog=false;lockPage(false);rejectModel=''">Отправить</a>
                </div>

            </div>
        </div>

        <div class="popup" *ngIf="showCommentDialog">
            <div class="popup-layout" (click)="showCommentDialog=false;lockPage(false)"></div>
            <div class="popup-content">
                <a href="#" class="popup-close" (click)="showCommentDialog=false;lockPage(false)"></a>
                <div class="popup-title">Письмо кандидату</div>

                <div class="form-field">
                    <div class="form-field__label">Напишите сообщение тут</div>
                    <textarea [(ngModel)]="messageModel"></textarea>
                </div>

                <div class="popup-controls">
                    <a href="#" class="button" (click)="$event.preventDefault();showCommentDialog=false;lockPage(false);messageModel=''">Отмена</a>
                    <a href="#" class="button button_black" (click)="$event.preventDefault();onComment.emit({user: user, message: messageModel});showCommentDialog=false;lockPage(false);messageModel=''">Отправить</a>
                </div>

            </div>
        </div>

    </div>
  `,
    styles: []
})
export class UsersCardComponent implements OnInit, OnChanges {

    constructor() { }

    ngOnInit() {
    }

    ngOnChanges(res) {
        if (this.user) this.occupationModel = this.user.getOccupation()
    }

    // CARD
    @Input() user: UserCard = null;
    @Input() occupationList: object[] = [];
    @Output() onApprove: EventEmitter<object> = new EventEmitter();
    @Output() onReject: EventEmitter<object> = new EventEmitter();
    @Output() onComment: EventEmitter<object> = new EventEmitter();
    @Output() onLocked: EventEmitter<boolean> = new EventEmitter();
    showCommentDialog: boolean = false;
    showApproveDialog: boolean = false;
    showOccupationOptions: boolean = false;
    showRejectDialog: boolean = false;
    messageModel: string = '';
    rejectModel: string = '';
    occupationModel: object = null;

    lockPage(state) {
        this.onLocked.emit(state);
    }

}
