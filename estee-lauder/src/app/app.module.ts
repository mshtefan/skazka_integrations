import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule, RequestOptions } from '@angular/http';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { UsersCardComponent } from './users-card/users-card.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersByNamePipe } from './users-by-name.pipe';
import { UsersByTypePipe } from './users-by-type.pipe';
import { UserTypePipe } from './user-type.pipe';
import { ApiService } from './api.service';
import { SafeUrlPipe } from './safe-url.pipe';
import { PhonePipe } from './phone.pipe';
import { CustomRequestOptions } from './custom-request-options';
import { CookieService } from 'ngx-cookie-service';
import { PrettyDatePipe } from './pretty-date.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    UsersCardComponent,
    UsersListComponent,
    UsersByNamePipe,
    UsersByTypePipe,
    UserTypePipe,
    SafeUrlPipe,
    PhonePipe,
    PrettyDatePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    InfiniteScrollModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [
    CookieService,
    ApiService,
    { provide: RequestOptions, useClass: CustomRequestOptions }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
