import { MsalService } from '@azure/msal-angular';
import { Component, OnInit } from '@angular/core';
import { AuthenticationResult } from '@azure/msal-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private msalService: MsalService) {}

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
    // this.msalService.loginPopup().subscribe((response: AuthenticationResult) => {
    //   this.msalService.instance.setActiveAccount(response.account)
    // })
  }

  logout(): void {
    this.msalService.logout()
  }
}
