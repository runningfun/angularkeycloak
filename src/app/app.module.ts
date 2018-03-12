import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { UserDetailComponent } from './user/userdetail.component';
import {OAuthModule, UrlHelperService} from 'angular-oauth2-oidc';
import {UsersComponent} from './users/users.component';
import {UserService} from './user/user.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { MessagesComponent } from './messages/messages.component';
import {MessageService} from './message.service';
import { AccountSearchComponent } from './account-search/account-search.component';
import {HomeComponent} from './HomeComponent';
import { SensorComponent } from './sensor/sensor.component';
@NgModule({
            declarations: [
              AppComponent,
              UsersComponent,
              UserDetailComponent,
              DashboardComponent,
              MessagesComponent,
              AccountSearchComponent,
              HomeComponent,
              SensorComponent
            ],
            imports: [
              BrowserModule,
              FormsModule,
              // HttpModule is still required, bug in Angular version 5.0.0, later it should work without
              HttpModule,
              HttpClientModule,
              // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
              // and returns simulated server responses.
              // Remove it when a real server is ready to receive requests.
              HttpClientInMemoryWebApiModule.forRoot(
                InMemoryDataService, { dataEncapsulation: false }
              ),
              AppRoutingModule,
              OAuthModule.forRoot()
            ],
            providers: [UrlHelperService, UserService, MessageService],
            bootstrap: [AppComponent]
          })
export class AppModule { }
