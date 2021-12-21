import { FormControl, FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MemberService } from '../member-list/member.service';
import { Members } from '../member-list/members';

@Component({
  selector: 'app-search-member',
  templateUrl: './search-member.component.html',
  styleUrls: ['./search-member.component.css']
})
export class SearchMemberComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  membersArray: Members[] = [];

  memberForm = new FormGroup({
    name: new FormControl('')
  })

  member: string = '';

  ngOnInit(): void {
    this.memberService.getMember().subscribe(member => {
      this.membersArray = member;
    })
  }

}
