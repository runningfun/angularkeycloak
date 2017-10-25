import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserComponent } from './user/user.component';
import {UrlHelperService} from 'angular-oauth2-oidc';

@NgModule({
            declarations: [
              AppComponent,
              UserlistComponent,
              UserComponent
            ],
            imports: [
              BrowserModule,
              FormsModule,
              HttpModule
            ],
            providers: [UrlHelperService],
            bootstrap: [AppComponent]
          })
export class AppModule { }
