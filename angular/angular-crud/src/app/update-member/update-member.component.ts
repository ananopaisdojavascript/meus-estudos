import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../member-list/member.service';

@Component({
  selector: 'app-update-member',
  templateUrl: './update-member.component.html',
  styleUrls: ['./update-member.component.css']
})
export class UpdateMemberComponent implements OnInit {

  memberForm = new FormGroup({
    name: new FormControl('', Validators.required),
    group: new FormControl('', Validators.required)
  })

  constructor(private memberService: MemberService, private route: ActivatedRoute) { }

  id: number | string | undefined;

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.id = Number(param.get('id'))

      this.memberService.getMemberById(this.id).subscribe(member => {
        this.memberForm.reset(member)
      })
    })
  }

  updateMember() {
    this.memberService.updateMember({id: this.id, ...this.memberForm.value})
    .subscribe(member => {
      this.memberForm.reset(member)
    })
  }

}
