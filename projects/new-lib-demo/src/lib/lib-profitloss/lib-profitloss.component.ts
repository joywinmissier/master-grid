import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { FilterConfiguration } from '../interface/plview.model';

@Component({
  selector: 'lib-lib-profitloss',
  templateUrl: './lib-profitloss.component.html',
  styleUrls: ['./lib-profitloss.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LibProfitlossComponent implements OnInit {

  constructor() { }

  //populating in table 
  @Input() tableItems = [];

  //number of years
  @Input() numberOfDuration: number;

  //populating header text in table 
  @Input() headerName: string = '';

  //populating in table 
  @Input() lastRowData;

  //stick first column
  @Input() isFirstSticky: boolean;

  //stick last column
  @Input() isLastSticky: boolean;

  //enable editing feature
  @Input() editFields: boolean;

  //stick header on scrolling
  @Input() stickHeader: boolean;

  //filter sort configuration
  @Input() filterJson: FilterConfiguration;

  @Output() notifyDataChange: EventEmitter<any> = new EventEmitter();

  //variable to dynamically bind years in template eg) y1,y2 etc..
  duration = [];

  //variable for iterating dynamic header
  rowHeader = [];

  //for storing list as per api key eg) y1,y2 etc..
  sampleRow = [];

  //for copying api data to another array
  tempData;

  //filtering column name
  columnName: string = '';

  //filter order
  orderType: string = '';

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

  deepSortRange : boolean = false;

  previousList;

  selectedYear = [];

  updatedTotal;

  minAmountRange;
  maxAmountRange;
  rangeSelection;

  selectedValue: string;

  priceRange = [
    {
      'min': 0,
      'max': 1000,
      'range': '0 - 1000'
    },
    {
      'min': 1001,
      'max': 5000,
      'range': '1001 - 5000'
    },
    {
      'min': 5001,
      'max': 10000,
      'range': '5001 - 10000'
    },
    {
      'min': 10001,
      'max': 'unlimited',
      'range': 'Above 10000'
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
      this.rowHeader.push(this.headerName + ' ' + (i + 1));
    }
  }

  //method to add "expansion" boolean to determine open/close of expansion panel
  manipulateData(listOfItems, start = 1, oldList?) {
    listOfItems.map(items => {
      items['expansion'] = false;
      items['index'] = start;
      start == 1 ? items['isParent'] = true : items['isParent'] = false;
      start == 1 ? items['id'] = items['name'].charAt(0) + start : items['id'] = oldList['name'].charAt(0) + start;

      start != 1 ? items['parentName'] = oldList['name'] : items['parentName'] = '';
      start != 1 ? items['parentId'] = oldList['id'] : items['parentId'] = '';
      if (items.hasOwnProperty('subitems')) {
        let countIndex;
        countIndex = start + 1;
        items['subitems'].length > 0 ? this.manipulateData(items['subitems'], countIndex, items) : '';
      }
    });
  }

  expandRow(item) {
    if (item?.subitems?.length > 0) {
      item.expansion = !item.expansion;
    }

    event.stopPropagation();
  }

  //get sort order from directive
  getSortOrderDetails(event) {
    console.log('Event', event);
    this.columnName = event.property;
    this.orderType = event.order;
  }

  //reset sort
  restFilter() {
    event.stopPropagation();
    this.orderType = '';
    this.columnName = '';
    this.tableItems = [];
    this.tableItems = [...this.tempData];
  }

  resetDropdown(event: any) {
    this.selectedValue = undefined;
    this.rangeSelection = '';
    this.minAmountRange = undefined;
    this.maxAmountRange = undefined;
    event.stopPropagation();
  }

  //edit table column
  editData(editValue, list, index, categoryName) {
    event.stopPropagation();
    console.log(index, list);
    if (this.previousValue !== '') {
      console.log('PV', this.previousIndex, this.previousValue, this.previousList);
      this.previousList['y' + this.previousIndex] = this.previousValue;
      this.previousValue = '';
    }
    this.previousValue = editValue;
    this.clickedInput = index;
    this.clickedYear = 'y' + index;
    this.clickedName = categoryName;
    this.previousIndex = index;
    this.previousList = list;
  }

  //cancel edit mode
  closeEdit(jsonList, yearValue) {
    event.stopPropagation();
    this.clickedYear = '';
    this.clickedName = '';
    if (this.previousValue !== '') {
      jsonList['y' + yearValue] = this.previousValue;
    }
    console.log(this.tableItems);
  }

  //save edited input
  modifyData(jsonList, yearValue) {
    event.stopPropagation();
    this.clickedYear = '';
    this.clickedName = '';
    let tempResp = JSON.parse(JSON.stringify(jsonList));;
    tempResp['y' + yearValue] = this.previousValue;
    let resp = {
      editedRow: tempResp,
      editedData: this.changedData,
      editedYear: 'y' + yearValue,
      previousData: this.previousValue
    }
    this.notifyDataChange.emit(resp);
    // jsonList['y'+yearValue] = this.changedData;
    this.previousValue = '';

  }

  nameShortener(str) {
    if(str!==''){
      var matches = str.match(/\b(\w)/g); // ['J','S','O','N']
      var acronym = matches.join(''); // JSON
      return acronym;
    }
    else {
      return '';
    }

  }

  //avoid expansion panel open on input focus
  stopFocus() {
    event.stopPropagation();
  }

  //store modified value on change event
  onSearchChange(searchValue: string, nonModifiedData): void {
    event.stopPropagation();
    this.changedData = searchValue;
    // console.log(nonModifiedData);
    // this.previousValue = nonModifiedData;
  }

  //avoid expansion panel open on input focus
  resetClick() {
    event.stopPropagation();
  }

  getUpdatedTotal(totalValue, list) {
    let sumTotal = 0;
    this.selectedYear.map((iteratedValue) => {
      sumTotal = sumTotal + Number(list[iteratedValue]);
    });

    this.updatedTotal = Number(totalValue) - Number(sumTotal);

    return this.updatedTotal;
  }

  valueChange(yearNames, event, yearIndex) {
    if (this.selectedYear.length > 0) {
      if (this.selectedYear.includes(this.sampleRow[yearIndex])) {
        let removeIndex = this.selectedYear.indexOf(this.sampleRow[yearIndex]);
        this.selectedYear.splice(removeIndex, 1);
      }
      else {
        this.selectedYear.push(this.sampleRow[yearIndex]);
      }
    }
    else {
      this.selectedYear.push(this.sampleRow[yearIndex]);
    }

    if (this.selectedYear.includes(this.selectedValue)) {
      this.selectedValue = undefined;
      this.minAmountRange = undefined;
      this.maxAmountRange = undefined;
      this.rangeSelection = '';
    }
  }

  priceFilter(min, max, range) {
    this.minAmountRange = min;
    this.maxAmountRange = max;
    this.rangeSelection = range;

  }

  clearFilter() {
    this.rangeSelection = '';
    this.selectedYear = [];
    this.minAmountRange = undefined;
    this.maxAmountRange = undefined;
    this.selectedValue = undefined;
    this.tableItems = [...this.tempData]
  }

  resetPlaceholder(selectedData: MatSelect) {
    selectedData.placeholder = '';
  }

}
