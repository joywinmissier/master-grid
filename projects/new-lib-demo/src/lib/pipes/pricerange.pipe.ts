import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pricerange'
})
export class PricerangePipe implements PipeTransform {

  transform(value: any, minValue, maxValue): any {
   

    if(minValue !==undefined && maxValue !==undefined){
      if(typeof(maxValue) !== "string"){
        console.log(minValue,maxValue);
        return value.filter(itemList =>{
          console.log(itemList.y1>=minValue,itemList.y1<maxValue);
          Number(itemList.y1) >= minValue || Number(itemList.y1) < maxValue
        });
      }
      else{
        return value.filter(itemList => Number(itemList.y1) >= minValue)
      }
    }
    else {
      return value;
    }

  }

}
