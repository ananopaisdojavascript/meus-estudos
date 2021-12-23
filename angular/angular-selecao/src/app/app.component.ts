import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MemberService } from './member.service';
import { Members } from './members';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-selecao';

  constructor(private memberService: MemberService) {}

  members: Members[] = [];

  selectedMember: any;

  filteredMembers = [];

  ngOnInit(): void {
    this.memberService.getMember().subscribe(member => {
      this.members = member;
    })
  }

}
