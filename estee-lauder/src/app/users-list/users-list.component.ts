import {
  Component,
  OnInit,
  Input,
  Output,
  ViewChild,
  EventEmitter,
  Pipe,
  PipeTransform
}
  from '@angular/core';

@Component({
  selector: 'app-users-list',
  template: `
    <div class="user-types" [ngClass]="{'type_open': userTypeOpen, 'type_fixed': userListOpen}">

    <div class="user-types_value" (click)="userTypeClick()"
        title="{{userTypeModel?.name}}"
        [style.color]="userTypeModel?.color">{{userTypeModel?.name}}</div>

      <div class="user-types-list">
        <div class="user-types-list__layout" (click)="userTypeOpen=false"></div>
        <ng-template ngFor let-type [ngForOf]="userTypes"; let-i=index>
          <div class="user-types-list__item" 
          (click)="userTypeClick(type)" 
          *ngIf="userTypeModel?.name != type.name"
          [style.color]="type?.color">{{type.name}}</div>
        </ng-template>
      </div>

    </div>

    <div class="user-search" [ngClass]="{'type_focus': userSearchFocus || userSearchString, 'type_fixed': userListOpen}">
      <input type="text" placeholder="Поиск" class="user-search_input"
      (click)="$event.preventDefault();$event.stopPropagation();" 
      [(ngModel)]="userSearchString"
      (ngModelChange)="onSearch.emit($event)"
      (focus)="userListOpen=true" #searchInput>
      <i class="user-search_icon" *ngIf="userSearchFocus" (click)="$event.preventDefault();userSearchString='';userSearchFocus=false;userTypeModel=userTypes[0];userTypeModelChange.emit(userTypes[0]);onSearch.emit('')"></i>
      <i class="user-search_icon" *ngIf="!userSearchFocus" (click)="userSearchClick()"></i>
    </div>

    <div class="user-list" [ngClass]="{'type_open': userListOpen}">

      <div *ngIf="userFocused" class="user-list-item type_single type_active"
       [style.backgroundColor]="(userFocused | userType:userTypes)?.background" 
       (click)="userListOpen=true;">
        <div class="user-list-item__id" *ngIf="userFocused?.user_id">№ {{userFocused?.user_id}}</div>
        <div class="user-list-item__name" [style.color]="(userFocused | userType:userTypes)?.color">{{userFocused?.name}}</div>
        <div class="user-list-item__date">{{userFocused?.getStatus()?.tagInfo?.create_date | prettyDate:'short'}}</div>
        <div class="user-list-item__occupation" [style.color]="(userFocused | userType:userTypes)?.color">{{userFocused?.occupation}}</div>
      </div>

      <div class="user-list-container"
        infinite-scroll [scrollWindow]="false"
        [infiniteScrollDistance]="1"
        (scrolled)="onScroll.emit($event)">

        <div class="user-list-refresh" *ngIf="!userList.length && userTypeModel && userTypeModel.default">
          <i></i>
          <p>
            Список кандидатов пуст.<br>
            Загрузите новых.
          </p>
          <a href="#" class="button button_white" (click)="$event.preventDefault();onRefresh.emit()">Обновить</a>
        </div>

        <ng-template ngFor let-user [ngForOf]="userList"; let-i=index>
          <div class="user-list-item"
          [ngClass]="{'type_active': userFocused?.user_id == user.user_id}"
          [style.backgroundColor]="userFocused?.user_id == user.user_id ? (userFocused | userType:userTypes)?.background : ''" 
          (click)="userFocused=user;onSelect.emit(user);userListOpen=false">
            <div class="user-list-item__id" *ngIf="user.user_id" [attr.title]="user.user_id">№ {{user.user_id}}</div>
            <div class="user-list-item__name" [style.color]="(user | userType:userTypes)?.color" [attr.title]="user.name">{{user.name}}</div>
            <div class="user-list-item__date">{{user.getStatus()?.tagInfo?.create_date | prettyDate:'short'}}</div>
            <div class="user-list-item__occupation" [style.color]="(user | userType:userTypes)?.color" [attr.title]="user.occupation">{{user.occupation}}</div>
          </div>
        </ng-template>

      </div>
    </div>
  `,
  styles: []
})

export class UsersListComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

  // TYPES
  @Input() userTypes: any[] = [];
  @Input() userTypeModel: any = null;
  @Output() userTypeModelChange = new EventEmitter();
  userTypeOpen: boolean = false;
  userTypeClick(type?: any) {
    this.userTypeOpen = !this.userTypeOpen;
    if (type) {
      this.userListOpen = true;
      this.userTypeModel = type;
      this.userTypeModelChange.emit(type);
      this.onRefresh.emit();
    }
  }

  // SEARCH 
  @ViewChild('searchInput') searchInput;
  @Input() userSearchString: string = '';
  userSearchFocus: boolean = false;
  userSearchClick() {
    if (!this.userSearchFocus) {
      this.userSearchFocus = true
      setTimeout(() => {
        this.searchInput.nativeElement.focus();
        this.userListOpen = true;
      }, 0)
    } else {
      this.userSearchString = '';
      this.userListOpen = false;
      // this.userSearchFocus = false;
    }
  }

  // LIST
  @Input() occupationList: object[] = [];
  @Input() userList: object[] = [];
  @Input() userFocused: object = null;
  @Output() onScroll = new EventEmitter();
  @Output() onSelect = new EventEmitter();
  @Output() onRefresh = new EventEmitter();
  @Output() onSearch = new EventEmitter();
  userListOpen: boolean = false;

}
