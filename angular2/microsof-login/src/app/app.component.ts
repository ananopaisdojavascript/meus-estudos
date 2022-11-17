import { MsalService } from '@azure/msal-angular';
import { Component, OnInit } from '@angular/core';
import { AuthenticationResult } from '@azure/msal-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private msalService: MsalService, private httpClient: HttpClient) {}

  apiResponse: string = '';

  ngOnInit(): void {
    this.msalService.instance.handleRedirectPromise().then(
      response => {
        if(response !== null && response.account !== null) {
          this.msalService.instance.setActiveAccount(response.account)
        }
      }
    )
  }

  isLoggedIn(): boolean {
    return this.msalService.instance.getActiveAccount() !== null
  }

  login(): void {
    this.msalService.loginRedirect();
  }

  logout(): void {
    this.msalService.logout()
  }

  callProfile(): unknown {
    return this.httpClient.get('https://graph.microsoft.com/v1.0/me').subscribe(response => {
      this.apiResponse = JSON.stringify(response);
    });
  }

  callMessages(): unknown {
    return this.httpClient.get('https://graph.microsoft.com/v1.0/me/messages').subscribe(response => {
      this.apiResponse = JSON.stringify(response);
    });
  }

}
