import { Component, Input, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { MatSelect } from '@angular/material/select';

import { FilterConfiguration } from '../interface/plview.model';
import { NewLibDemoService } from '../new-lib-demo.service';

@Component({
  selector: 'lib-lib-profitloss',
  templateUrl: './lib-profitloss.component.html',
  styleUrls: ['./lib-profitloss.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LibProfitlossComponent implements OnInit {

  constructor(private libService : NewLibDemoService) { }

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

  //fresize columns
  @Input() resizeColumn;

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

  str = '';

  // store selected year number like 1,2 etc
  clickedInput;

  //store selected year for editing
  clickedYear = '';

  //store selected rows category name for editing
  clickedName = '';

  //store value before start editing
  previousValue = '';

  public count = 0;

  //store changed data to modify in json
  changedData;

  //store previous edited year number like 1,2 
  previousIndex;

  deepSortRange: boolean = false;

  previousList;

  //for excel data manipulation
  someData = [];

  selectedYear = [];

  // store exporting items
  exportingItems = [];

  updatedTotal;

  minAmountRange;
  maxAmountRange;
  rangeSelection;

  selectedValue: string;

  flattenObject = [];

  dataForExcelSheet = [];

  @Input() priceRangeData = []

  // data for price range filter
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
      items['checked'] = false;
      items['index'] = start;
      start == 1 ? items['isParent'] = true : items['isParent'] = false;
      start == 1 ? items['id'] = items['name'].charAt(0) + start : items['id'] = oldList['name'].charAt(0) + start;

      start != 1 ? items['parentName'] = oldList['name'] : items['parentName'] = '';
      start != 1 ? items['parentId'] = oldList['id'] : items['parentId'] = '';

      items.hasOwnProperty('subitems') == false ? items['hasChild']= false : '';
      if (items.hasOwnProperty('subitems')) {
        let countIndex;
        countIndex = start + 1;
        items['subitems'].length>0 ? items['hasChild'] = true: items['hasChild']= false;
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

  // checkbox selection handle
  exportSelect(chosenRow, completed: boolean) {
   console.log('Check',chosenRow);
    if (chosenRow['isParent']) {
     
      if (chosenRow.subitems !== undefined) {
        if (chosenRow.subitems.length == 0) {
          return;
        }
      }
      chosenRow['checked'] = !chosenRow['checked'];
      //chosenRow.subitems.forEach(t => t.checked = completed);
      chosenRow.hasOwnProperty('subitems') ? this.exportSelect(chosenRow['subitems'], completed) : '';
    }
    else if(chosenRow.length > 0){
  
      // chosenRow['checked'] = !chosenRow['checked'];
      chosenRow.forEach(t => t.checked = completed);
      chosenRow.map((data)=>{
        data.hasOwnProperty('subitems') ? this.exportSelect(data['subitems'], completed) : '';
      })
      //chosenRow.hasOwnProperty('subitems') ? this.exportSelect(chosenRow['subitems'], completed) : '';
    }
    else {
      chosenRow['checked'] = !chosenRow['checked'];
      // this.selectParent(chosenRow['parentId']);
      chosenRow.hasOwnProperty('subitems') ? this.exportSelect(chosenRow['subitems'], completed) : '';
    }

    event.stopPropagation();
  }

  // selectParent(id){
  //   let flatForCheckbox = this.libService.getSeperation(this.tableItems);
  //   console.log('parent selection', flatForCheckbox);
  //   flatForCheckbox.map((listFlat)=>{
  //     if(listFlat['id'] == id){
  //       listFlat['checked'] = true;
  //       this.selectParent(listFlat['parentId']);
  //     }
  

  //   });
  // }

  //export to excel
  exportData() {
    this.exportingItems = [];
    this.flattenObject = [];
    this.someData = [];
    this.dataForExcelSheet = [];

    if(this.filterJson.rowSelection){
        // push selected items for exporting
        this.tableItems.map((itemData) => {
          if (itemData['checked']) {
            this.exportingItems.push(itemData);
          }
        });
    }
    
    //service method to flatten json from nested json
    this.flattenObject = this.filterJson.rowSelection ? this.libService.getSeperation(this.exportingItems, 0 , true, true) : this.libService.getSeperation(this.tableItems, 0 , true);
   
   
   // constructing objects required for excel by extracting from original object
    this.flattenObject.map((yearList)=>{
      this.str='';
      this.str+=`"Category" :"${yearList['name']}",`
      for(let number = 1; number <= this.numberOfDuration; number ++){
        // let comma = number !== this.numberOfDuration ? ',' : '';
        this.str+=`"Year ${number}" :${yearList['y'+number]}`+ ','
      }
      this.str+=`"Total" :${yearList['total']},"isParent" : ${yearList['isParent']},"index" : ${yearList['index']}`
      let demo = `{${this.str}}`;
      this.someData.push(JSON.parse(demo));
    });
   
    // returns array of values from json key
    this.getExcelRowValues(this.someData);
   
    // service to generate excel
    this.libService.generateExcel(this.dataForExcelSheet,'Profit Loss Report', 'Profit Loss View', this.someData)
  }


  // method to get json values and store in array
  getExcelRowValues(flatData){
    flatData.map((row: any) => {
      this.dataForExcelSheet.push(Object.values(row))
    })
  }


  // method to detect all checkbox selected or not
  someComplete(rowItems): boolean {

    let isCompleted = rowItems.subitems !== undefined ? rowItems.subitems.every(t => t.checked) : false;
    if (rowItems.subitems !== undefined) {
      if (rowItems.subitems.length == 0) {
        return false;
      }
      else {
        return rowItems.subitems.filter(t => t.checked).length > 0 && !isCompleted;
      }

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
