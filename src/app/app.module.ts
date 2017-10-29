import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {UrlHelperService} from 'angular-oauth2-oidc';
import {UsersComponent} from './users/users.component';
import {UserService} from './user/user.service';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
            declarations: [
              AppComponent,
              UsersComponent,
              UserComponent,
              DashboardComponent,
            ],
            imports: [
              BrowserModule,
              FormsModule,
              HttpModule,
              RouterModule.forRoot([
                                     { path: '',
                                       redirectTo: '/dashboard',
                                       pathMatch: 'full'
                                     },
                                     {
                                       path: 'users',
                                       component: UsersComponent
                                     },
                                     {
                                       path: 'detail/:id',
                                       component: UsersComponent
                                     },
                                     {
                                       path: 'dashboard',
                                       component: DashboardComponent
                                     }
                                   ])
            ],
            providers: [UrlHelperService, UserService],
            bootstrap: [AppComponent]
          })
export class AppModule { }
