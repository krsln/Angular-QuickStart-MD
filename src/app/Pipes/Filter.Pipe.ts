import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'Filter',
  // pure: false
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string, propName: string): any[] {
    if (!items) { return []; }
    if (!searchText) { return items; }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      // console.log(it[propName].concat(' ').concat(it[propName]));
      // console.log(it[propName].concat(' ').concat(it[propName]).toLowerCase());
      // console.log(it[propName].concat(' ').concat(it[propName]).toLowerCase().includes(searchText));
      return it[propName].concat(' ').concat(it[propName]).toLowerCase().includes(searchText);
    });
  }
}

// <input [(ngModel)]="searchText" placeholder="Search your friend...">
// <div *ngFor="let item of users | Filter:searchText:'Title'"  class="user">
