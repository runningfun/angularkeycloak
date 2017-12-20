import {Component} from '@angular/core';
import {JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {authConfig} from './AuthConfig';

@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: ['./app.component.css'],
             providers: [OAuthService]
           })
export class AppComponent {


  title = 'Coffee list app works!';
  constructor(private oauthService: OAuthService) {
     this.configureWithNewConfigApi();
  }

  private configureWithNewConfigApi() {
    this.oauthService.configure(authConfig);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();
    this.oauthService.loadDiscoveryDocumentAndTryLogin();
    console.log('configureWithNewConfigApi done');
  }
}
