import {Component, OnInit} from '@angular/core';
import { UserComponent } from './user/user.component';
import {UserService} from './user/user.service';
import {JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';

@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: ['./app.component.css'],
             providers: [UserService, OAuthService]
           })
export class AppComponent implements OnInit {


  title = 'Coffee list app works!';
  users: UserComponent[];
  selectedUser: UserComponent;
  // constructor(private userService: UserService) { }

// constructor(private userService: UserService, private oauthService: OAuthService) {
  constructor(private userService: UserService, private oauthService: OAuthService) {

     this.configureAuth();

    // // URL of the SPA to redirect the user to after login
    // this.oauthService.redirectUri = window.location.origin + "/index.html";
    //
    // // set the scope for the permissions the client should request
    // this.oauthService.scope = "openid profile email flightapi_user";
    //
    // // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
    // // OAuth2-based access_token
    // this.oauthService.oidc = true;
    //
    // // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
    // // instead of localStorage
    // this.oauthService.setStorage(sessionStorage);
    //
    // this.oauthService.clientId = "coffeelist";
    // //this.oauthService.dummyClientSecret = "geheim";
    // const url = 'https://test.stefan-herschbach.de:23437/auth/realms/apprealm/.well-known/openid-configuration';
    // this.oauthService.loadDiscoveryDocument(url).then((doc) => {
    //   // This method just tries to parse the token within the url when
    //   // the auth-server redirects the user back to the web-app
    //   // It dosn't initiate the login
    //   this.oauthService.tryLogin({});
    //   console.debug('discovery succeeded', doc);
    //
    // });
  }

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

  private  configureAuth() {
    // URL of the SPA to redirect the user to after login
    this.oauthService.redirectUri = window.location.origin + "/index.html";

    // URL of the SPA to redirect the user after silent refresh
    this.oauthService.silentRefreshRedirectUri = window.location.origin + "/silent-refresh.html";

    // The SPA's id. The SPA is registerd with this id at the auth-server
    this.oauthService.clientId = "spa-demo";

    // set the scope for the permissions the client should request
    // The first three are defined by OIDC. The 4th is a usecase-specific one
    this.oauthService.scope = "openid profile email voucher";

    // Url of the Identity Provider
    this.oauthService.issuer = 'https://test.stefan-herschbach.de:23437/auth/realms/apprealm';

    this.oauthService.tokenValidationHandler = new JwksValidationHandler();

    this.oauthService.events.subscribe(e => {
      console.debug('oauth/oidc event', e);
    });

    // Load Discovery Document and then try to login the user
    this.oauthService.loadDiscoveryDocument().then((doc) => {
      this.oauthService.tryLogin();
    });

    this
      .oauthService
      .events
      .filter(e => e.type == 'token_expires')
      .subscribe(e => {
        console.debug('received token_expires event', e);
        this.oauthService.silentRefresh();
      });
  }
}
