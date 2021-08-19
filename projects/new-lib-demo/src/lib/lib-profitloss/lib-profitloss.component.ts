import { NonNullAssert } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { FilterConfiguration } from '../interface/plview.model';

@Component({
  selector: 'lib-lib-profitloss',
  templateUrl: './lib-profitloss.component.html',
  styleUrls: ['./lib-profitloss.component.scss']
})
export class LibProfitlossComponent implements OnInit {

  constructor() { }

  //populating in table 
  @Input() tableItems = [];

  //number of years
  @Input() numberOfDuration : number;

  //populating header text in table 
  @Input() headerName : string = '';

  //populating in table 
  @Input() lastRowData;

  //show filter
  @Input() showFilter : boolean;

  //stick first column
  @Input() isFirstSticky : boolean;

  //stick last column
  @Input() isLastSticky : boolean;

  //enable editing feature
  @Input() editFields : boolean;

  //stick header on scrolling
  @Input() stickHeader : boolean;

  //filter sort configuration
  @Input() filterJson : FilterConfiguration;

  //variable to dynamically bind years in template eg) y1,y2 etc..
  duration = [];

  //variable for iterating dynamic header
  rowHeader = [];

  //for storing list as per api key eg) y1,y2 etc..
  sampleRow = [];

  //for copying api data to another array
  tempData;

  //filtering column name
  columnName:string = '';

  //filter order
  orderType:string = '';

  // store selected year number like 1,2 etc
  clickedInput;

  //store selected year for editing
  clickedYear = '';

  //store selected rows category name for editing
  clickedName = '';

  //store value before start editing
  previousValue = '';

  //store changed data to modify in json
  changedData;

  //store previous edited year number like 1,2 
  previousIndex;

selectedYear = [];

updatedTotal;

minAmountRange;
maxAmountRange;
rangeSelection;

selectedValue: string;

priceRange = [
  {
    'min' : 0,
    'max' : 1000,
    'range' : '0 - 1000'
  },
  {
    'min' : 1001,
    'max' : 5000,
    'range' : '1001 - 5000'
  },
  {
    'min' : 5001,
    'max' : 10000,
    'range' : '5001 - 10000'
  },
  {
    'min' : 10001,
    'max' : 'unlimited',
    'range' : 'Above 10000'
  }
];
  //Angular Lifecycle
  ngOnInit(): void {
    this.manipulateData(this.tableItems);
    console.log(this.tableItems);
    this.dynamicYears(this.numberOfDuration);
    this.tempData = [...this.tableItems];
    // this.tableItems = this.getItems(this.tempData,null,0);
  }


  //method to dynamically render years instead of using data.y1, data.y2
  dynamicYears(durationYears) {
    for (let i = 0; i < durationYears; i++) {
      this.duration.push(i + 1);
    }

    //loop for generating headers Year 1, Year 2 etc..
    for (let i = 0; i < durationYears; i++) {
      this.sampleRow.push('y' + (i + 1));
      this.rowHeader.push(this.headerName +' ' + (i + 1));
    }
  }

  //method to add "expansion" boolean to determine open/close of expansion panel
  manipulateData(listOfItems, start = 1) {
    console.log('Items',listOfItems);
    listOfItems.map(items => {
      items['expansion'] = false;
      items['index'] = start;
      if (items.hasOwnProperty('subitems')) {
        // items['subitems'].forEach(childItems => {
        //   childItems['expansion'] = false;
        //   if (childItems.hasOwnProperty('subitems')) {
        //     childItems.subitems.map(subChildItems => {
        //       subChildItems['expansion'] = false;
        //     });
        //   }
        // });
        console.log('Loop Items',items);
        let countIndex;
        countIndex = start + 1;
        items['subitems'].length > 0 ?  this.manipulateData(items['subitems'], countIndex ) : '';
      }
    });
  }

  test1(item){
    if(item?.subitems?.length>0){
      item.expansion = !item.expansion;
      // this.tableItems = this.getItems(this.tempData,null,0);
    }
 
    event.stopPropagation();
  }

  //get sort order from directive
  getSortOrderDetails(event){
    console.log('Event',event);
    this.columnName = event.property;
    this.orderType = event.order;
  }

  //reset sort
  restFilter(){
    event.stopPropagation();
    this.orderType = '';
    this.columnName = '';
    this.tableItems = [];
    this.tableItems = [...this.tempData];
    console.log('Reset',this.orderType,this.columnName,this.tableItems);
  }

  //edit table column
  editData(editValue,list,index, categoryName){
    event.stopPropagation();
   
    if(this.previousValue !==''){
      list['y'+this.previousIndex] = this.previousValue;
    }
    this.previousValue = editValue;
    this.clickedInput = index;
    this.clickedYear = 'y'+index;
    this.clickedName = categoryName;
    this.previousIndex = index;
    // list['y'+index] = "1710";
    // console.log('Edit Value',editValue,list);
  }

  //cancel edit mode
  closeEdit(jsonList, yearValue){
    event.stopPropagation();
    this.clickedYear = '';
    this.clickedName = '';
    jsonList['y'+yearValue] = this.previousValue;
  }

  //save edited input
  modifyData(jsonList, yearValue){
    event.stopPropagation();
    this.clickedYear = '';
    this.clickedName = '';
    jsonList['y'+yearValue] = this.changedData;
    this.previousValue = '';
  }

  //avoid expansion panel open on input focus
  stopFocus(){
    event.stopPropagation();
  }

  //store modified value on change event
  onSearchChange(searchValue: string): void {  
    event.stopPropagation();
    this.changedData = searchValue;
  }

  //avoid expansion panel open on input focus
  resetClick(){
    event.stopPropagation();
  }

  getUpdatedTotal(totalValue, list){
    let sumTotal= 0;
    this.selectedYear.map((iteratedValue)=>{
      sumTotal = sumTotal + Number(list[iteratedValue]);
    });

    this.updatedTotal = Number(totalValue) - Number(sumTotal);

    return this.updatedTotal;
  }

  valueChange(yearNames, event, yearIndex){
    console.log('Checked Unchecked');
    if(this.selectedYear.length > 0){
      console.log('If',this.selectedYear);
      if(this.selectedYear.includes(this.sampleRow[yearIndex])){
        console.log('If If',this.selectedYear);
        let removeIndex = this.selectedYear.indexOf(this.sampleRow[yearIndex]);
        this.selectedYear.splice(removeIndex, 1);
      }
      else {
        this.selectedYear.push(this.sampleRow[yearIndex]);
      }
    }
    else {
      console.log('Else',this.selectedYear);
      this.selectedYear.push(this.sampleRow[yearIndex]);
    }
  }

  priceFilter(min, max, range){
    // this.tableItems = [...this.tempData];
    this.minAmountRange = min;
    this.maxAmountRange = max;
    this.rangeSelection = range;
    // let filteredArray;
    // if(typeof(max) !== "string"){
    //  filteredArray = this.tableItems.filter(itemList =>{
    //     console.log(itemList.y1>=min,itemList.y1<max);
    //    return Number(itemList.y1) >= Number(min) && Number(itemList.y1) < Number(max)
    //   });
    //   console.log('filtered',filteredArray);
    // }
    // else{
    //    filteredArray = this.tableItems.filter(itemList => Number(itemList.y1) >= Number(min));
    //    console.log('filtered',filteredArray);
    // }

    // this.tableItems = [...filteredArray];
 
  }

  clearFilter(){
    this.rangeSelection = '';
    this.selectedYear = [];
    this.minAmountRange = undefined;
    this.maxAmountRange = undefined;
    this.selectedValue = undefined;
    this.tableItems = [...this.tempData]
  }

  // getItems(data, items,index) {
  //   data.forEach(x => {
  //     if (!items)
  //       items=[];
  //     items.push(x);
  //     items[items.length-1].index=index
  //     if (x.subitems && x.expanded)
  //       this.getItems(x.subitems,items,index+1);
  //   }
  //   )
  //   return items;
  // }

  resetPlaceholder(selectedData : MatSelect) {
    selectedData.placeholder = '';
  }

}
