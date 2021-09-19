import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceRange'
})
export class PricerangePipe implements PipeTransform {


  private searchedItems: Array<any> = [];
  private key: string;
  private prop: string;
  private childrenPropName: string;

  transform(value: any, columnName, minValue, maxValue, deepSearch: boolean = false): any {

    // if (!deepSearch) {
      if (minValue !== undefined && maxValue !== undefined && columnName !== undefined) {
        if (typeof (maxValue) !== "string") {
          console.log(columnName, minValue, maxValue);
          let validatedData;
          validatedData = value.filter(itemList => {

            return Number(itemList[columnName]) >= minValue && Number(itemList[columnName]) < maxValue
          });
          return validatedData;
        }
        else {
          return value.filter(itemList => Number(itemList[columnName]) >= minValue)
        }
      }
      else {
        return value;
      }
    }
  //   else {
  //     if (minValue !== undefined && maxValue !== undefined && columnName !== undefined) {
  //       this.searchedItems = [];
  //       this.key = minValue;
  //       this.prop = columnName;
  //       this.childrenPropName = 'subitems';
  //       let searchResult = this.searchRecursive(value);
  //       return searchResult;
  //     }
  //     return value;
  //   }


  // }

  searchRecursive(value) {
    for (var i = 0; i < value.length; i++) {
      if (Number(value[i][this.prop]) >= Number(this.key)) {
        this.searchedItems.push(value[i]);
      }
      else if (value[i][this.childrenPropName]) {
        if (value[i][this.childrenPropName].length > 0) {
          this.searchRecursive(value[i][this.childrenPropName]);
        }
      }
    }

    return this.searchedItems;
  }

}
