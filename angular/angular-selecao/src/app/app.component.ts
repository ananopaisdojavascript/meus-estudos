import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MemberService } from './member.service';
import { Component, OnInit } from '@angular/core';
import { Members } from './members';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  group: string = '';

  member: string = '';

  constructor(private memberService: MemberService){}

  members: Members[] = [];

  ngOnInit() {
    this.memberService.getData().subscribe(member => {
      this.members = member;
    })
  }

}
