import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchMember'
})
export class SearchMemberPipe implements PipeTransform {

  transform(members: any, searchMember: any) {
    if (searchMember) {
      return members.filter((member: any) => member.indexOf(searchMember)) >= 0
    } else {
      return members;
    }
  }

}
