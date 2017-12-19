import { Component, OnInit, ViewChild } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
import { UsersCardComponent } from '../users-card/users-card.component';
import { UsersListComponent } from '../users-list/users-list.component';
import { ApiService } from './../api.service';
import { UserCard } from './../user-card';

const SEARCH_DEBOUNCE_TIMEOUT = 500;
const SCROLL_DEBOUNCE_TIMEOUT = 1000;
const RACE_CONDITION_TIMEOUT = 3000;

@Component({
  selector: 'app-layout',
  template: `
    <div class="layout" [ngClass]="{'type_locked': locked, 'type_loading': loading}">

      <app-users-list 
      [userTypes]="types" 
      [occupationList]="occupations"
      [(userTypeModel)]="type" 
      [userSearchString]="search" 
      [userFocused]="user"
      [userList]="users | usersByType:type" 
      (onSelect)="selectUser($event)" (onScroll)="scrollUsers($event)"
      (onRefresh)="refreshList()" (onSearch)="searchUsers($event)"
      class="layout-left"></app-users-list>

      <app-users-card 
      [user]="user"
      [occupationList]="occupations"
      (onLocked)="lockLayout($event)"
      (onApprove)="approveUser($event)"
      (onReject)="rejectUser($event)"
      (onComment)="commentUser($event)"
      class="layout-right"></app-users-card>

      <div class="layout-loader"></div>

    </div>
  `,
  styles: []
})
export class LayoutComponent implements OnInit {

  types: object[] = [];
  user: UserCard = null;
  type: any = null;
  search: string = '';
  users: UserCard[] = [];
  occupations: object[] = [];
  loading: boolean = true;

  constructor(private API: ApiService) {
    // to future
    // this.route.params.subscribe(res => {
    //   this.user = this.users.find((user: UserCard) => user.user_id == res.id) || null
    // });
  }

  ngOnInit() {
    // Для использования методов апи, прокидываю сервис в экземпляры.
    // THINK ABOUT IT: возможно это все надо в app перенести
    this.users = this.API.users.users.map(user => { return new UserCard(user, this.API) });
    this.occupations = this.API.data.user_occupations;
    this.types = this.API.data.user_types;
    if (this.types.length) this.type = this.types.find((type: any) => type.default);
    if (this.users.length && this.users[0].getStatus() && this.users[0].getStatus().default) this.user = this.users[0];
    this.loading = false;
  }

  selectUser(user: UserCard) {
    this.user = user;
  }

  scrollDebounce: any = null;
  scrollUsers(event: object) {
    if (this.scrollDebounce) clearTimeout(this.scrollDebounce);
    if (this.API.users.pagination.total_pages > this.API.users.pagination.page) {
      this.searchDebounce = setTimeout(() => {
        this.API.getUsers({ q: this.search, page: ++this.API.users.pagination.page }, this.type && this.type.type)
          .subscribe(res => {
            this.API.users.users = [...this.API.users.users, ...res.json().users];
            this.API.users.pagination = res.json().pagination
            this.users = this.API.users.users.map(user => { return new UserCard(user, this.API) });
          })
      }, SCROLL_DEBOUNCE_TIMEOUT);
    }
  }

  rejectUser(data: any) {
    this.loading = true;
    let types = this.API.data.user_types;
    let user: UserCard = data.user;
    let params = {};
    params[this.API.data.user_variables.reject] = data.message;

    // Добавляю переменную с причиной отклонения
    this.API
      .vars('add', user.user_id, params)
      .subscribe(res => {

        // Удаляем ненужыне теги
        this.API
          .tags('delete', user.user_id, [types.find(item => item.type == 'unsorted').tag, types.find(item => item.type == 'approved').tag])
          .subscribe(res => {

            // Добавляем тег 
            this.API
              .tags('add', user.user_id, [types.find(item => item.type == 'rejected').tag])
              .subscribe(res => {
                let index = this.users.indexOf(user);

                // Обновляем список
                setTimeout(() => {
                  this.refreshList(() => {
                    this.nextUser(index);
                    this.loading = false;
                  });


                }, RACE_CONDITION_TIMEOUT);

              })

          })
      })
  }

  // Переключаем на следующего юзера
  nextUser(index: number) {
    if (!isNaN(index)) {
      if(this.user && this.users[index] && this.user.user_id == this.users[index].user_id) {
        this.user = this.users[index + 1]
      } else {
        this.user = this.users[index]
      }
    } else {
      this.user = null
    }
  }

  approveUser(data: any) {
    this.loading = true;
    let user: UserCard = data.user;
    let occupation: any = data.occupation;
    let types = this.API.data.user_types;
    // Удаляем ненужные теги
    this.API
      .tags('delete', user.user_id, [types.find(item => item.type == 'unsorted').tag, types.find(item => item.type == 'rejected').tag, ...this.API.data.user_occupations.filter(item => item.tag != occupation.tag).map(item => item.tag)])
      .subscribe(res => {

        // Добавляем нужные
        this.API
          .tags('add', user.user_id, [types.find(item => item.type == 'approved').tag, occupation.tag])
          .subscribe(res => {
            let index = this.users.indexOf(user);

            // Обновляем список
            setTimeout(() => {
              this.refreshList(() => {
                this.nextUser(index);
                this.loading = false;
              });
            }, RACE_CONDITION_TIMEOUT);
          })

      })
  }

  commentUser(data: any) {
    this.loading = true;
    let params = {};
    params[this.API.data.user_variables.message] = data.message;

    // Записываем текст комментария в переменную
    this.API
      .vars('add', data.user.user_id, params)
      .subscribe(res => {

        // Добавляем тег
        this.API
          .tags('add', data.user.user_id, [this.API.data.user_tags.message])
          .subscribe(res => {
            this.loading = false;
          })
      })
  }

  searchDebounce: any = null;
  searchUsers(search) {
    this.loading = false;
    if (this.searchDebounce) clearTimeout(this.searchDebounce);
    if (this.search == search) return;
    this.searchDebounce = setTimeout(() => {
      this.loading = true;
      this.search = search;
      setTimeout(() => {
        this.refreshList(() => {
          this.loading = false;
        });
      }, RACE_CONDITION_TIMEOUT);
    }, SEARCH_DEBOUNCE_TIMEOUT);
  }

  refreshList(callback?: any) {
    this.loading = true;
    return this.API.getUsers({ q: this.search }, this.search ? false : (this.type && this.type.type))
      .subscribe(res => {
        if (this.search) {
          this.type = null;
        } else if (!this.type) {
          this.type = this.API.data.user_types.find(type => type.default);
        }
        this.API.users = res.json();
        this.users = res.json().users.map(user => { return new UserCard(user, this.API) });
        // буее, колбек(
        this.loading = false;
        if (typeof callback == 'function') callback()
      })
  }

  locked: boolean = false;
  lockLayout(state: boolean) {
    this.locked = state;
  }



}
