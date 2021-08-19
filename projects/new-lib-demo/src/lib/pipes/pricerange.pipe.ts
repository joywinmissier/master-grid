import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceRange'
})
export class PricerangePipe implements PipeTransform {

  transform(value: any, columnName, minValue, maxValue): any {
   

    if(minValue !==undefined && maxValue !==undefined && columnName !==undefined){
      if(typeof(maxValue) !== "string"){
        console.log(columnName,minValue,maxValue);
        let validatedData;
        validatedData = value.filter(itemList => {
          
           return Number(itemList[columnName]) >= minValue && Number(itemList[columnName]) < maxValue
          });
          return validatedData;
      }
      else{
        return value.filter(itemList => Number(itemList[columnName]) >= minValue)
      }
    }
    else {
      return value;
    }

  }

}
