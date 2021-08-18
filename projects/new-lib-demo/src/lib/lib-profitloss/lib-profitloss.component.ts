import { Component, Input, OnInit } from '@angular/core';
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
  //Angular Lifecycle
  ngOnInit(): void {
    this.manipulateData(this.tableItems);
    this.dynamicYears(this.numberOfDuration);
    this.tempData = [...this.tableItems];
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
  manipulateData(listOfItems) {
    listOfItems.map(items => {
      items['expansion'] = false;
      if (items.hasOwnProperty('subitems')) {
        items['subitems'].forEach(childItems => {
          childItems['expansion'] = false;
          if (childItems.hasOwnProperty('subitems')) {
            childItems.subitems.map(subChildItems => {
              subChildItems['expansion'] = false;
            });
          }
        });
      }
    });
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

}