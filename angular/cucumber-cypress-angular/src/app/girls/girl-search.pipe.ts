import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'girlSearch'
})
export class GirlSearchPipe implements PipeTransform {

  transform(names: any[], searchName: string): any[] {
    if(!names) return [];
    if(!searchName) return names;

    return names.filter(name => {
      return Object.keys(name).some(key => {
        return String(name[key])
        .toLowerCase()
        .includes(searchName.toLowerCase())
      })
    })
  }

}
