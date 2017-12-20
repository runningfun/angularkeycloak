import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Component({
             templateUrl: './home.component.html'
           })
export class HomeComponent {

  constructor(private oauthService: OAuthService) {
  }

  public login() {
    this.oauthService.initImplicitFlow();
    console.log('login done');
  }

  public logoff() {
    this.oauthService.logOut();
  }

  public get name() {
    const claims = this.oauthService.getIdentityClaims();
    if (claims) {
      return claims.toString();
    } else {
      return null;
    }
  }

}
