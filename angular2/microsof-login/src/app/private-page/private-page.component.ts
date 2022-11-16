import { MsalService } from '@azure/msal-angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-page',
  templateUrl: './private-page.component.html',
  styleUrls: ['./private-page.component.css']
})
export class PrivatePageComponent implements OnInit {

  constructor(private msalService: MsalService) { }

  name: string = 'User'

  ngOnInit(): void {
  }

  getName(): unknown {
    return this.msalService.instance.getActiveAccount()?.name
  }
}
