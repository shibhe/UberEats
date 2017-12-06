import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false
})
export class SearchPipe implements PipeTransform {

  transform(itemList: any, searchName?: string): any {
    //check if search not exists
    if (searchName === undefined)
    return itemList; 

    return itemList.filter(function(item){
      //return boolean... If true it stores the value in the array else remove it
       return item.itemName.toLowerCase().includes(searchName.toLowerCase());
    })
  }

}
