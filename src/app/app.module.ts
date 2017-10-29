import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserDetailComponent } from './user/userdetail.component';
import {UrlHelperService} from 'angular-oauth2-oidc';
import {UsersComponent} from './users/users.component';
import {UserService} from './user/user.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
            declarations: [
              AppComponent,
              UsersComponent,
              UserDetailComponent,
              DashboardComponent,
            ],
            imports: [
              BrowserModule,
              FormsModule,
              HttpModule,
              AppRoutingModule,
            ],
            providers: [UrlHelperService, UserService],
            bootstrap: [AppComponent]
          })
export class AppModule { }
