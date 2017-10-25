import {Component, OnInit} from '@angular/core';
import { UserComponent } from './user/user.component';
import {UserService} from './user/user.service';
import {OAuthModule, OAuthService} from 'angular-oauth2-oidc';

@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: ['./app.component.css'],
             providers: [UserService]
           })
export class AppComponent implements OnInit {


  title = 'Coffee list app works!';
  users: UserComponent[];
  selectedUser: UserComponent;
  constructor(private userService: UserService) { }

  // constructor(private oauthService: OAuthService) {
  //
  //   // URL of the SPA to redirect the user to after login
  //   this.oauthService.redirectUri = window.location.origin + "/index.html";
  //
  //   // set the scope for the permissions the client should request
  //   this.oauthService.scope = "openid profile email flightapi_user";
  //
  //   // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
  //   // OAuth2-based access_token
  //   this.oauthService.oidc = true;
  //
  //   // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
  //   // instead of localStorage
  //   this.oauthService.setStorage(sessionStorage);
  //
  //   this.oauthService.clientId = "coffeelist";
  //   //this.oauthService.dummyClientSecret = "geheim";
  //   const url = 'https://test.stefan-herschbach.de:23437/auth/realms/apprealm/.well-known/openid-configuration';
  //   this.oauthService.loadDiscoveryDocument(url).then((doc) => {
  //     // This method just tries to parse the token within the url when
  //     // the auth-server redirects the user back to the web-app
  //     // It dosn't initiate the login
  //     this.oauthService.tryLogin({});
  //     console.debug('discovery succeeded', doc);
  //
  //   });
  //
  //
  // }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }

  ngOnInit(): void {
    this.getUsers();
  }
  // user: UserComponent = {
  //   id: 1,
  //   name: 'Stefan'
  // }
  // user2: UserComponent = {
  //   id: 2,
  //   name: 'Stefan2'
  // }

  onSelect(user: UserComponent): void {
    this.selectedUser = user;
  }
}
