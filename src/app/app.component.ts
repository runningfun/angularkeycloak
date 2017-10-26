import {Component} from '@angular/core';
import {JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';

@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: ['./app.component.css'],
             providers: [OAuthService]
           })
export class AppComponent {


  title = 'Coffee list app works!';
  constructor(private oauthService: OAuthService) {
     this.configureAuth();
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
