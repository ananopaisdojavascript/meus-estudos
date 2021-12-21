import { MemberService } from './member.service';
import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Members } from './members';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})

export class MemberListComponent implements OnInit {

  constructor(private memberService: MemberService) { }

  membersArray: Members[] = [];

  getColor(color: string) { (2)
    switch (color) {
      case 'BlackPink':
        return '#6F1E51';
      case 'Twice':
        return '#1abc9c';
      case 'Red Velvet':
        return '#c0392b';
    }
  }

  memberForm = new FormGroup({
    name: new FormControl('', Validators.required),
    group: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    this.memberService.getMember().subscribe(member => {
      this.membersArray = member;
    })
  }

  postMember() {
    const member = this.memberForm.value;
    this.memberService.createMember(member).subscribe(data => {
      return this.membersArray.push(data);
    })
    this.memberForm.reset();
  }

  deleteMember(member: Members) {
    this.memberService.deleteMember(member.id).subscribe(() => {
      const index = this.membersArray.indexOf(member)
      this.membersArray.splice(index, 1)
    })
  }

}
