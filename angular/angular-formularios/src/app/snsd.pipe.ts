import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snsd'
})
export class SnsdPipe implements PipeTransform {

  transform(members: string[], searchMember: string) {
    if(!members) {
      return [];
    }

    if(!searchMember) {
      return members;
    }

    searchMember = searchMember.toLocaleLowerCase();

    return members.filter(member => {
      return member.toLocaleLowerCase().includes(searchMember);
    })
  }

}
