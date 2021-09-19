import { Component, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NewLibDemoService } from '../new-lib-demo.service';
export class LibProfitlossComponent {
    constructor(libService) {
        this.libService = libService;
        //populating in table 
        this.tableItems = [];
        //populating header text in table 
        this.headerName = '';
        this.notifyDataChange = new EventEmitter();
        //variable to dynamically bind years in template eg) y1,y2 etc..
        this.duration = [];
        //variable for iterating dynamic header
        this.rowHeader = [];
        //for storing list as per api key eg) y1,y2 etc..
        this.sampleRow = [];
        //filtering column name
        this.columnName = '';
        //filter order
        this.orderType = '';
        this.str = '';
        //store selected year for editing
        this.clickedYear = '';
        //store selected rows category name for editing
        this.clickedName = '';
        //store value before start editing
        this.previousValue = '';
        this.count = 0;
        this.deepSortRange = false;
        //for excel data manipulation
        this.someData = [];
        this.selectedYear = [];
        // store exporting items
        this.exportingItems = [];
        this.flattenObject = [];
        this.dataForExcelSheet = [];
        this.priceRangeData = [];
        // data for price range filter
        this.priceRange = [
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
    }
    //Angular Lifecycle
    ngOnInit() {
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
    manipulateData(listOfItems, start = 1, oldList) {
        listOfItems.map(items => {
            items['expansion'] = false;
            items['checked'] = false;
            items['index'] = start;
            start == 1 ? items['isParent'] = true : items['isParent'] = false;
            start == 1 ? items['id'] = items['name'].charAt(0) + start : items['id'] = oldList['name'].charAt(0) + start;
            start != 1 ? items['parentName'] = oldList['name'] : items['parentName'] = '';
            start != 1 ? items['parentId'] = oldList['id'] : items['parentId'] = '';
            items.hasOwnProperty('subitems') == false ? items['hasChild'] = false : '';
            if (items.hasOwnProperty('subitems')) {
                let countIndex;
                countIndex = start + 1;
                items['subitems'].length > 0 ? items['hasChild'] = true : items['hasChild'] = false;
                items['subitems'].length > 0 ? this.manipulateData(items['subitems'], countIndex, items) : '';
            }
        });
    }
    expandRow(item) {
        var _a;
        if (((_a = item === null || item === void 0 ? void 0 : item.subitems) === null || _a === void 0 ? void 0 : _a.length) > 0) {
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
    resetDropdown(event) {
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
        let tempResp = JSON.parse(JSON.stringify(jsonList));
        ;
        tempResp['y' + yearValue] = this.previousValue;
        let resp = {
            editedRow: tempResp,
            editedData: this.changedData,
            editedYear: 'y' + yearValue,
            previousData: this.previousValue
        };
        this.notifyDataChange.emit(resp);
        // jsonList['y'+yearValue] = this.changedData;
        this.previousValue = '';
    }
    // checkbox selection handle
    exportSelect(chosenRow, completed) {
        console.log('Check', chosenRow);
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
        else if (chosenRow.length > 0) {
            // chosenRow['checked'] = !chosenRow['checked'];
            chosenRow.forEach(t => t.checked = completed);
            chosenRow.map((data) => {
                data.hasOwnProperty('subitems') ? this.exportSelect(data['subitems'], completed) : '';
            });
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
        if (this.filterJson.rowSelection) {
            // push selected items for exporting
            this.tableItems.map((itemData) => {
                if (itemData['checked']) {
                    this.exportingItems.push(itemData);
                }
            });
        }
        //service method to flatten json from nested json
        this.flattenObject = this.filterJson.rowSelection ? this.libService.getSeperation(this.exportingItems, 0, true, true) : this.libService.getSeperation(this.tableItems, 0, true);
        // constructing objects required for excel by extracting from original object
        this.flattenObject.map((yearList) => {
            this.str = '';
            this.str += `"Category" :"${yearList['name']}",`;
            for (let number = 1; number <= this.numberOfDuration; number++) {
                // let comma = number !== this.numberOfDuration ? ',' : '';
                this.str += `"Year ${number}" :${yearList['y' + number]}` + ',';
            }
            this.str += `"Total" :${yearList['total']},"isParent" : ${yearList['isParent']},"index" : ${yearList['index']}`;
            let demo = `{${this.str}}`;
            this.someData.push(JSON.parse(demo));
        });
        // returns array of values from json key
        this.getExcelRowValues(this.someData);
        // service to generate excel
        this.libService.generateExcel(this.dataForExcelSheet, 'Profit Loss Report', 'Profit Loss View', this.someData);
    }
    // method to get json values and store in array
    getExcelRowValues(flatData) {
        flatData.map((row) => {
            this.dataForExcelSheet.push(Object.values(row));
        });
    }
    // method to detect all checkbox selected or not
    someComplete(rowItems) {
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
    onSearchChange(searchValue, nonModifiedData) {
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
        this.tableItems = [...this.tempData];
    }
    resetPlaceholder(selectedData) {
        selectedData.placeholder = '';
    }
}
LibProfitlossComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-lib-profitloss',
                template: "<div  [ngClass]=\"{'button-align' : filterJson?.showFiltering, 'button-end' : !filterJson?.showFiltering}\">\r\n    <div class=\"filter-holder\" *ngIf=\"filterJson?.showFiltering\">\r\n        <button class=\"filter-button\" mat-stroked-button [matMenuTriggerFor]=\"menu\">Filter\r\n            <mat-icon class=\"filter-icon\">filter_list</mat-icon>\r\n        </button>\r\n        <mat-menu [class]=\"'filter-menu-layout'\" #menu=\"matMenu\">\r\n            <div class=\"title-container\">\r\n                <p class=\"panel-title\">Filter By</p>\r\n            </div>\r\n            <div class=\"hide-holder horizontal-gap\" *ngIf=\"filterJson?.hideShowFiltering\">\r\n                <div class=\"hide-filter-text-holder\">\r\n                    <p class=\"hide-show-text\">Hide/Show</p>\r\n                </div>\r\n                <mat-divider [vertical]=\"true\"></mat-divider>\r\n                <div id=\"yearCheckbox\" class=\"filter-boxes\" (click)=\"$event.stopPropagation()\">\r\n                    <mat-checkbox *ngFor=\"let yearNames of rowHeader;let yearIndex = index;\"\r\n                        [checked]=\"selectedYear.includes(sampleRow[yearIndex])\" class=\"move-checkbox\"\r\n                        (change)=\"valueChange(yearNames,$event, yearIndex)\" [ngStyle]=\"{'color': '#75003'}\">\r\n                        {{ yearNames }}\r\n                    </mat-checkbox>\r\n                </div>\r\n            </div>\r\n            <mat-divider class=\"horizontal-gap\" *ngIf=\"filterJson?.hideShowFiltering\"></mat-divider>\r\n            <div class=\"hide-holder horizontal-gap\" *ngIf=\"filterJson?.rangeFiltering\">\r\n                <div class=\"hide-filter-text-holder\">\r\n                    <p class=\"hide-show-text\">Range</p>\r\n                </div>\r\n                <mat-divider [vertical]=\"true\"></mat-divider>\r\n    \r\n                <div (click)=\"$event.stopPropagation()\">\r\n                    <div class=\"filter-input\">\r\n                        <label class=\"label-text\">Choose Year to Filter by Range</label>\r\n                        <mat-form-field class=\"input_type_wrap\">\r\n                            <mat-select #select [(ngModel)]=\"selectedValue\" (opened)=\"resetPlaceholder(select)\"\r\n                                floatLabel=\"never\">\r\n                                <mat-option [disabled]=\"selectedYear.includes(sampleRow[dropIndex])\"\r\n                                    *ngFor=\"let yearNames of rowHeader;let dropIndex = index;\"\r\n                                    [value]=\"sampleRow[dropIndex]\">\r\n                                    {{yearNames}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                            <button class=\"reset-drop\" mat-button matSuffix *ngIf=\"selectedValue\" mat-icon-button\r\n                                aria-label=\"Clear\" (click)=\"resetDropdown($event)\">\r\n                                <mat-icon matTooltip=\"Reset\">close</mat-icon>\r\n                            </button>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div id=\"rangeFilter\" class=\"slider-padding\"\r\n                        [matTooltip]=\"selectedValue == undefined ? 'Choose a year in dropdown to filter by range' : ''\"\r\n                        matTooltipPosition=\"above\">\r\n                        <button class=\"range-button\" [disabled]=\"selectedValue == undefined\"\r\n                            [ngClass]=\"{'filtered-button' : buttonLoop.range == rangeSelection}\" mat-stroked-button\r\n                            *ngFor=\"let buttonLoop of priceRangeData\"\r\n                            (click)=\"priceFilter(buttonLoop.min,buttonLoop.max, buttonLoop.range)\">{{buttonLoop.range}}</button>\r\n                    </div>\r\n    \r\n                </div>\r\n            </div>\r\n            <mat-divider class=\"horizontal-gap\" *ngIf=\"filterJson?.rangeFiltering\"></mat-divider>\r\n            <div>\r\n                <button mat-button color=\"warn\" (click)=\"clearFilter()\"\r\n                    [disabled]=\"!selectedYear.length > 0 && selectedValue == undefined\">Clear all filters</button>\r\n            </div>\r\n    \r\n        </mat-menu>\r\n    </div>\r\n    \r\n    <div class=\"filter-holder\">\r\n        <button class=\"filter-button\" mat-stroked-button (click)=\"exportData()\">Export\r\n            <mat-icon class=\"filter-icon\">file_download</mat-icon>\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"table-container\" [ngClass]=\"{'table-height': stickHeader}\">\r\n    <table class=\"table-size\"\r\n        [ngClass]=\"{ 'sticky-first' : isFirstSticky , 'non-sticky' : !isFirstSticky ,  'sticky-last': isLastSticky}\"\r\n        cellspacing=\"0\" cellpadding=\"5\">\r\n        <thead class=\"header-align row-text-design\" [ngClass]=\"{'header-stick': stickHeader}\" id=\"head-item\">\r\n            <th resize id=\"resizeHeader\" *ngIf=\"resizeColumn\" class=\"category-design\"> Category\r\n                <span *ngIf=\"filterJson?.showSorting\" [appSort]=\"tableItems\" data-order=\"desc\" data-name=\"name\"\r\n                    class=\"sort-icon\" (sortDetailsEvent)=\"getSortOrderDetails($event)\">\r\n                    <mat-icon *ngIf=\"(orderType == '' || columnName !== 'name')\" class=\"hide icon-design\">sort\r\n                    </mat-icon>\r\n                    <ng-container *ngIf=\"columnName == 'name'\">\r\n                        <mat-icon *ngIf=\"(orderType == 'desc' && columnName == 'name')\" class=\"icon-design\"\r\n                            title=\"High to Low\">south</mat-icon>\r\n                        <mat-icon *ngIf=\"(orderType == 'asc' && columnName == 'name')\" class=\"icon-design\"\r\n                            title=\"Low to High\">north</mat-icon>\r\n                        <mat-icon\r\n                            *ngIf=\"((orderType == 'asc' && columnName == 'name') || (orderType == 'desc' && columnName == 'name'))\"\r\n                            class=\"close icon-design\" (click)=\"restFilter()\" title=\"Reset Filter\">close</mat-icon>\r\n                    </ng-container>\r\n                </span>\r\n            </th>\r\n            <th *ngIf=\"!resizeColumn\" class=\"category-design\"> Category\r\n                <span *ngIf=\"filterJson?.showSorting\" [appSort]=\"tableItems\" data-order=\"desc\" data-name=\"name\"\r\n                    class=\"sort-icon\" (sortDetailsEvent)=\"getSortOrderDetails($event)\">\r\n                    <mat-icon *ngIf=\"(orderType == '' || columnName !== 'name')\" class=\"hide icon-design\">sort\r\n                    </mat-icon>\r\n                    <ng-container *ngIf=\"columnName == 'name'\">\r\n                        <mat-icon *ngIf=\"(orderType == 'desc' && columnName == 'name')\" class=\"icon-design\"\r\n                            title=\"High to Low\">south</mat-icon>\r\n                        <mat-icon *ngIf=\"(orderType == 'asc' && columnName == 'name')\" class=\"icon-design\"\r\n                            title=\"Low to High\">north</mat-icon>\r\n                        <mat-icon\r\n                            *ngIf=\"((orderType == 'asc' && columnName == 'name') || (orderType == 'desc' && columnName == 'name'))\"\r\n                            class=\"close icon-design\" (click)=\"restFilter()\" title=\"Reset Filter\">close</mat-icon>\r\n                    </ng-container>\r\n                </span>\r\n            </th>\r\n            <ng-container *ngFor=\"let yearHeader of rowHeader;let i = index;\">\r\n                <ng-container *ngIf=\"!resizeColumn\">\r\n                    <th *ngIf=\"!selectedYear.includes(sampleRow[i])\"> {{yearHeader}}\r\n                        <span *ngIf=\"filterJson?.showSorting\" [appSort]=\"tableItems\" data-order=\"desc\"\r\n                            [attr.data-name]=\"sampleRow[i]\" class=\"sort-icon\"\r\n                            (sortDetailsEvent)=\"getSortOrderDetails($event)\">\r\n                            <mat-icon *ngIf=\"(orderType == '' || columnName !== sampleRow[i])\" class=\"hide icon-design\">\r\n                                sort</mat-icon>\r\n                            <ng-container *ngIf=\"columnName == sampleRow[i]\">\r\n                                <mat-icon *ngIf=\"(orderType == 'desc' && columnName == sampleRow[i])\"\r\n                                    class=\"icon-design\" title=\"High to Low\">south</mat-icon>\r\n                                <mat-icon *ngIf=\"(orderType == 'asc' && columnName == sampleRow[i])\" class=\"icon-design\"\r\n                                    title=\"Low to High\">north</mat-icon>\r\n                                <mat-icon\r\n                                    *ngIf=\"((orderType == 'asc' && columnName == sampleRow[i]) || (orderType == 'desc' && columnName == sampleRow[i]))\"\r\n                                    class=\"close icon-design\" (click)=\"restFilter()\" title=\"Reset Filter\">close\r\n                                </mat-icon>\r\n                            </ng-container>\r\n                        </span>\r\n                    </th>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"resizeColumn\">\r\n                    <th resize id=\"resizeHeader\" *ngIf=\"!selectedYear.includes(sampleRow[i])\"> {{yearHeader}}\r\n                        <span *ngIf=\"filterJson?.showSorting\" [appSort]=\"tableItems\" data-order=\"desc\"\r\n                            [attr.data-name]=\"sampleRow[i]\" class=\"sort-icon\"\r\n                            (sortDetailsEvent)=\"getSortOrderDetails($event)\">\r\n                            <mat-icon *ngIf=\"(orderType == '' || columnName !== sampleRow[i])\" class=\"hide icon-design\">\r\n                                sort</mat-icon>\r\n                            <ng-container *ngIf=\"columnName == sampleRow[i]\">\r\n                                <mat-icon *ngIf=\"(orderType == 'desc' && columnName == sampleRow[i])\"\r\n                                    class=\"icon-design\" title=\"High to Low\">south</mat-icon>\r\n                                <mat-icon *ngIf=\"(orderType == 'asc' && columnName == sampleRow[i])\" class=\"icon-design\"\r\n                                    title=\"Low to High\">north</mat-icon>\r\n                                <mat-icon\r\n                                    *ngIf=\"((orderType == 'asc' && columnName == sampleRow[i]) || (orderType == 'desc' && columnName == sampleRow[i]))\"\r\n                                    class=\"close icon-design\" (click)=\"restFilter()\" title=\"Reset Filter\">close\r\n                                </mat-icon>\r\n                            </ng-container>\r\n                        </span>\r\n                    </th>\r\n                </ng-container>\r\n            </ng-container>\r\n            <th>Total</th>\r\n        </thead>\r\n        <ng-container *ngTemplateOutlet=\"recursiveListTmpl; context:{ list: tableItems }\"></ng-container>\r\n\r\n        <ng-container *ngFor=\"let lastData of lastRowData;let i = index;\">\r\n            <tr id=\"lastRow\" class=\"row-text-design\">\r\n                <td>\r\n                    {{lastData.name}}\r\n                </td>\r\n\r\n                <ng-container *ngFor=\"let parentYears of duration\">\r\n                    <td *ngIf=\"!selectedYear.includes('y'+parentYears) \"> {{lastData['y'+parentYears]}} </td>\r\n                </ng-container>\r\n                <td> {{lastData.total}} </td>\r\n            </tr>\r\n        </ng-container>\r\n    </table>\r\n\r\n    <ng-template #recursiveListTmpl let-itemLoop=\"list\">\r\n        <ng-container *ngFor=\"let item of itemLoop | priceRange : selectedValue : minAmountRange : maxAmountRange\">\r\n            <tr id=\"recursiveContainer\" (click)=\"expandRow(item)\" [ngClass]=\"{'sub-items-holder' : item.index >= 3}\">\r\n                <td  [ngClass]=\"{'sub-items-holder' : item.index >= 3}\"\r\n                    [style.padding-left]=\"item.index*20+'px'\"> <mat-checkbox *ngIf=\"filterJson?.rowSelection\"\r\n                    (click)=\"resetClick()\" \r\n                    (change)=\"exportSelect(item, $event.checked)\"\r\n                    [indeterminate]=\"someComplete(item)\"\r\n                    [checked]=\"item.checked\"\r\n                    [ngStyle]=\"{'color': '#75003'}\" class=\"select-row\"></mat-checkbox>\r\n                    <span class=\"more-less-icon\"\r\n                        *ngIf=\"item?.subitems?.length > 0\">{{ item.expansion ? '\u268A' : '\u271A'}}</span> {{ item.name }} </td>\r\n                <ng-container *ngFor=\"let parentYears of duration\">\r\n                    <td  class=\"data-edit\"\r\n                        [ngClass]=\"{'edit-hover' : editFields, 'sub-items-holder' : item.index >= 3}\"\r\n                        *ngIf=\"!selectedYear.includes('y'+parentYears) \">\r\n                        <mat-form-field>\r\n                            <input matInput (click)=\"resetClick()\" [(ngModel)]=\"item['y'+parentYears]\"\r\n                                (focus)=\"stopFocus()\"\r\n                                (input)=\"onSearchChange($event.target.value, item['y'+parentYears])\"\r\n                                [disabled]=\"((clickedYear !== 'y'+parentYears) || (item.name !== clickedName))\"\r\n                                [value]=\"item['y'+parentYears]\">\r\n                        </mat-form-field>\r\n                        <ng-container *ngIf=\"editFields\">\r\n                            <mat-icon *ngIf=\"((clickedYear !== 'y'+parentYears) || (item.name !== clickedName))\"\r\n                                class=\"icon-design edit-icon\"\r\n                                (click)=\"editData(item['y'+parentYears],item,parentYears,item.name)\">edit</mat-icon>\r\n                        </ng-container>\r\n                        <mat-icon *ngIf=\"!((clickedYear !== 'y'+parentYears) || (item.name !== clickedName))\"\r\n                            class=\"icon-design save-icon\" title=\"Save\" (click)=\"modifyData(item,parentYears)\">check\r\n                        </mat-icon>\r\n                        <mat-icon *ngIf=\"!((clickedYear !== 'y'+parentYears) || (item.name !== clickedName))\"\r\n                            class=\"icon-design close-icon\" title=\"close\" (click)=\"closeEdit(item,parentYears)\">close\r\n                        </mat-icon>\r\n                    </td>\r\n                </ng-container>\r\n                <td>{{item.total}}</td>\r\n            </tr>\r\n            <ng-container *ngIf=\"item.expansion\" id=\"child\">\r\n                <ng-container *ngTemplateOutlet=\"recursiveListTmpl; context:{ list: item?.subitems }\"></ng-container>\r\n            </ng-container>\r\n        </ng-container>\r\n        <!-- <div *ngIf=\"(itemLoop | priceRange : selectedValue : minAmountRange : maxAmountRange).length === 0\" \r\n               class=\"no-data\">No Item Matches your Filter...</div> -->\r\n    </ng-template>\r\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: ["tr>td:last-of-type{background-color:#e6dcff;padding-left:1rem}tr:not(:last-child){cursor:pointer;box-shadow:0 1px 1px -2px rgba(0,0,0,.2),0 1px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);height:4.75rem;background-color:#fff}.table-container{overflow:auto;width:100%;width:95%;margin:2rem 2rem 0}table{table-layout:fixed;width:100%}.sticky-first td:first-child,.sticky-first th:first-child{position:sticky;left:0;z-index:2;background-color:#fff;box-shadow:0 1px 1px -2px rgba(0,0,0,.2),0 1px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);width:250px}.non-sticky td:first-child,.non-sticky th:first-child{width:250px}.sticky-last td:last-child,.sticky-last th:last-child{position:sticky;right:0;z-index:2;box-shadow:0 1px 1px -2px rgba(0,0,0,.2),0 1px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);width:250px}.sticky-last th:last-child{background-color:#460073}th:last-child{padding-left:1rem}thead tr th{position:sticky;top:0}tr:last-child{background-color:#e6dcff;height:4.75rem}tr:last-child td{background-color:#e6dcff;font-weight:600;font-size:1.2rem}tr:last-child td:last-child{background-color:#7500c0;color:#fff;font-weight:600;font-size:1.2rem;padding-left:1rem}.header-align{text-align:left;background:#460073;color:#fff;height:3.75rem}#lastRow td:first-child{background-color:#e6dcff}#head-item .category-design{background:#460073;padding:1rem}.more-less-icon{color:#004dff}#recursiveContainer .sub-items-holder{background-color:#e6e6dc}.table-size{width:100%;position:relative}.row-text-design td{color:#000;font-size:1.08rem;font-weight:400}.row-text-design th{font-size:1.08rem;font-weight:600}.row-text-design td:not(:first-child),.row-text-design th:not(:first-child){width:150px}td:nth-child(2),th:nth-child(2){padding-left:1.2rem}tr td:first-child{padding:1rem}tr td:last-child{font-weight:400}.close{font-size:.85rem}#head-item .hide,.close{font-style:normal;cursor:pointer}#head-item .hide{display:none;margin-left:10px}#head-item .sort-icon{display:inline-block;width:5rem;height:.75rem}#head-item .sort-icon:hover>.hide{display:block;cursor:pointer}#recursiveContainer .data-edit:hover>.edit-icon{display:inline-block}#recursiveContainer .edit-icon{display:none;color:#7500c0}.save-icon{color:#09cc09}.close-icon{color:#be0101}.icon-design{font-size:16px;position:relative;top:2px;cursor:pointer}th#resizeHeader:hover{background-color:#7500c0}th:hover .hide{display:block;cursor:pointer}.data-edit mat-form-field{width:100px}.mat-form-field-disabled .mat-form-field-underline{display:none}.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix:after,.mat-input-element:disabled{color:#000}.header-stick{position:sticky;top:0;z-index:5}.table-height{height:350px}.edit-hover:hover{border:1px solid #7500c0}.button-align{display:flex;justify-content:space-between}.button-end{display:flex;justify-content:end}.filter-boxes{display:flex;margin:1rem;flex-wrap:wrap}.filter-boxes .mat-checkbox-frame{border-color:#7500c0}.mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03;background-color:#7500c0}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#7500c0}.filter-holder{margin:2rem}.filter-holder .filter-button{border-radius:0}.filter-holder .filter-icon{color:#7500c0;font-size:22px;margin-left:.75rem}.mat-menu-panel.filter-menu-layout{max-width:33rem;border-radius:0}.move-checkbox{margin-left:1rem}.hide-holder{display:flex}.hide-holder .hide-filter-text-holder{display:flex;align-items:center;margin:1rem;min-width:8rem;justify-content:center}.hide-holder .hide-filter-text-holder .hide-show-text{font-weight:400;color:#6c6c6c}.horizontal-gap{margin-bottom:.5rem;margin-top:.5rem}.slider-padding{margin:1rem;display:flex;flex-wrap:wrap}.slider-padding .slider-gap{margin-left:1rem}#rangeFilter .range-button{border-radius:0;min-width:5rem;width:8rem;margin-left:10px;margin-bottom:10px}.filtered-button{background-color:#7500c0;color:#fff}.panel-title{font-size:1rem;color:#000;font-weight:500}.title-container{padding:1rem 1rem 0;border-bottom:4px solid #a100ff}.input_type_wrap .mat-form-field-flex{background:#fff 0 0 no-repeat padding-box;color:#000;border-radius:0;box-shadow:0 1px 5px rgba(158,164,186,.2);padding:0}.input_type_wrap .mat-form-field-infix{padding-top:0;padding-bottom:0}.input_type_wrap .mat-form-field-underline{display:none}.input_type_wrap .mat-select-value{padding-left:1rem;padding-bottom:.5rem}.input_type_wrap .mat-select-arrow{margin-bottom:.5rem!important}.input_type_wrap mat-form-field{width:150px!important}.filter-input{display:inline-flex;justify-content:center;flex-direction:column;align-items:center;margin-left:1.5rem}.label-text{color:#000;font-weight:500;margin-bottom:.25rem}.reset-drop mat-icon{margin-bottom:3px}th:first-child .wrapper .bar{margin-right:-16px}.no-data{display:flex;justify-content:center;min-width:65rem;padding:2rem 2rem 2rem 3rem;font-size:1.2rem}.select-row{margin-right:.5rem}"]
            },] }
];
LibProfitlossComponent.ctorParameters = () => [
    { type: NewLibDemoService }
];
LibProfitlossComponent.propDecorators = {
    tableItems: [{ type: Input }],
    numberOfDuration: [{ type: Input }],
    headerName: [{ type: Input }],
    lastRowData: [{ type: Input }],
    isFirstSticky: [{ type: Input }],
    isLastSticky: [{ type: Input }],
    editFields: [{ type: Input }],
    stickHeader: [{ type: Input }],
    filterJson: [{ type: Input }],
    resizeColumn: [{ type: Input }],
    notifyDataChange: [{ type: Output }],
    priceRangeData: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGliLXByb2ZpdGxvc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmV3LWxpYi1kZW1vL3NyYy9saWIvbGliLXByb2ZpdGxvc3MvbGliLXByb2ZpdGxvc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJbEcsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFRNUQsTUFBTSxPQUFPLHNCQUFzQjtJQUVqQyxZQUFvQixVQUE4QjtRQUE5QixlQUFVLEdBQVYsVUFBVSxDQUFvQjtRQUVsRCxzQkFBc0I7UUFDYixlQUFVLEdBQUcsRUFBRSxDQUFDO1FBS3pCLGtDQUFrQztRQUN6QixlQUFVLEdBQVcsRUFBRSxDQUFDO1FBdUJ2QixxQkFBZ0IsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUVuRSxnRUFBZ0U7UUFDaEUsYUFBUSxHQUFHLEVBQUUsQ0FBQztRQUVkLHVDQUF1QztRQUN2QyxjQUFTLEdBQUcsRUFBRSxDQUFDO1FBRWYsaURBQWlEO1FBQ2pELGNBQVMsR0FBRyxFQUFFLENBQUM7UUFLZix1QkFBdUI7UUFDdkIsZUFBVSxHQUFXLEVBQUUsQ0FBQztRQUV4QixjQUFjO1FBQ2QsY0FBUyxHQUFXLEVBQUUsQ0FBQztRQUV2QixRQUFHLEdBQUcsRUFBRSxDQUFDO1FBS1QsaUNBQWlDO1FBQ2pDLGdCQUFXLEdBQUcsRUFBRSxDQUFDO1FBRWpCLCtDQUErQztRQUMvQyxnQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUVqQixrQ0FBa0M7UUFDbEMsa0JBQWEsR0FBRyxFQUFFLENBQUM7UUFFWixVQUFLLEdBQUcsQ0FBQyxDQUFDO1FBUWpCLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBSS9CLDZCQUE2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QUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxZQUF1QjtRQUN0QyxZQUFZLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUNoQyxDQUFDOzs7WUFsYkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLHd5ZEFBOEM7Z0JBRTlDLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJOzthQUN0Qzs7O1lBUFEsaUJBQWlCOzs7eUJBYXZCLEtBQUs7K0JBR0wsS0FBSzt5QkFHTCxLQUFLOzBCQUdMLEtBQUs7NEJBR0wsS0FBSzsyQkFHTCxLQUFLO3lCQUdMLEtBQUs7MEJBR0wsS0FBSzt5QkFHTCxLQUFLOzJCQUdMLEtBQUs7K0JBRUwsTUFBTTs2QkFrRU4sS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIFZpZXdFbmNhcHN1bGF0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdFNlbGVjdCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NlbGVjdCc7XHJcblxyXG5pbXBvcnQgeyBGaWx0ZXJDb25maWd1cmF0aW9uIH0gZnJvbSAnLi4vaW50ZXJmYWNlL3Bsdmlldy5tb2RlbCc7XHJcbmltcG9ydCB7IE5ld0xpYkRlbW9TZXJ2aWNlIH0gZnJvbSAnLi4vbmV3LWxpYi1kZW1vLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItbGliLXByb2ZpdGxvc3MnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9saWItcHJvZml0bG9zcy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbGliLXByb2ZpdGxvc3MuY29tcG9uZW50LnNjc3MnXSxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaWJQcm9maXRsb3NzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBsaWJTZXJ2aWNlIDogTmV3TGliRGVtb1NlcnZpY2UpIHsgfVxyXG5cclxuICAvL3BvcHVsYXRpbmcgaW4gdGFibGUgXHJcbiAgQElucHV0KCkgdGFibGVJdGVtcyA9IFtdO1xyXG5cclxuICAvL251bWJlciBvZiB5ZWFyc1xyXG4gIEBJbnB1dCgpIG51bWJlck9mRHVyYXRpb246IG51bWJlcjtcclxuXHJcbiAgLy9wb3B1bGF0aW5nIGhlYWRlciB0ZXh0IGluIHRhYmxlIFxyXG4gIEBJbnB1dCgpIGhlYWRlck5hbWU6IHN0cmluZyA9ICcnO1xyXG5cclxuICAvL3BvcHVsYXRpbmcgaW4gdGFibGUgXHJcbiAgQElucHV0KCkgbGFzdFJvd0RhdGE7XHJcblxyXG4gIC8vc3RpY2sgZmlyc3QgY29sdW1uXHJcbiAgQElucHV0KCkgaXNGaXJzdFN0aWNreTogYm9vbGVhbjtcclxuXHJcbiAgLy9zdGljayBsYXN0IGNvbHVtblxyXG4gIEBJbnB1dCgpIGlzTGFzdFN0aWNreTogYm9vbGVhbjtcclxuXHJcbiAgLy9lbmFibGUgZWRpdGluZyBmZWF0dXJlXHJcbiAgQElucHV0KCkgZWRpdEZpZWxkczogYm9vbGVhbjtcclxuXHJcbiAgLy9zdGljayBoZWFkZXIgb24gc2Nyb2xsaW5nXHJcbiAgQElucHV0KCkgc3RpY2tIZWFkZXI6IGJvb2xlYW47XHJcblxyXG4gIC8vZmlsdGVyIHNvcnQgY29uZmlndXJhdGlvblxyXG4gIEBJbnB1dCgpIGZpbHRlckpzb246IEZpbHRlckNvbmZpZ3VyYXRpb247XHJcblxyXG4gIC8vZnJlc2l6ZSBjb2x1bW5zXHJcbiAgQElucHV0KCkgcmVzaXplQ29sdW1uO1xyXG5cclxuICBAT3V0cHV0KCkgbm90aWZ5RGF0YUNoYW5nZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIC8vdmFyaWFibGUgdG8gZHluYW1pY2FsbHkgYmluZCB5ZWFycyBpbiB0ZW1wbGF0ZSBlZykgeTEseTIgZXRjLi5cclxuICBkdXJhdGlvbiA9IFtdO1xyXG5cclxuICAvL3ZhcmlhYmxlIGZvciBpdGVyYXRpbmcgZHluYW1pYyBoZWFkZXJcclxuICByb3dIZWFkZXIgPSBbXTtcclxuXHJcbiAgLy9mb3Igc3RvcmluZyBsaXN0IGFzIHBlciBhcGkga2V5IGVnKSB5MSx5MiBldGMuLlxyXG4gIHNhbXBsZVJvdyA9IFtdO1xyXG5cclxuICAvL2ZvciBjb3B5aW5nIGFwaSBkYXRhIHRvIGFub3RoZXIgYXJyYXlcclxuICB0ZW1wRGF0YTtcclxuXHJcbiAgLy9maWx0ZXJpbmcgY29sdW1uIG5hbWVcclxuICBjb2x1bW5OYW1lOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgLy9maWx0ZXIgb3JkZXJcclxuICBvcmRlclR5cGU6IHN0cmluZyA9ICcnO1xyXG5cclxuICBzdHIgPSAnJztcclxuXHJcbiAgLy8gc3RvcmUgc2VsZWN0ZWQgeWVhciBudW1iZXIgbGlrZSAxLDIgZXRjXHJcbiAgY2xpY2tlZElucHV0O1xyXG5cclxuICAvL3N0b3JlIHNlbGVjdGVkIHllYXIgZm9yIGVkaXRpbmdcclxuICBjbGlja2VkWWVhciA9ICcnO1xyXG5cclxuICAvL3N0b3JlIHNlbGVjdGVkIHJvd3MgY2F0ZWdvcnkgbmFtZSBmb3IgZWRpdGluZ1xyXG4gIGNsaWNrZWROYW1lID0gJyc7XHJcblxyXG4gIC8vc3RvcmUgdmFsdWUgYmVmb3JlIHN0YXJ0IGVkaXRpbmdcclxuICBwcmV2aW91c1ZhbHVlID0gJyc7XHJcblxyXG4gIHB1YmxpYyBjb3VudCA9IDA7XHJcblxyXG4gIC8vc3RvcmUgY2hhbmdlZCBkYXRhIHRvIG1vZGlmeSBpbiBqc29uXHJcbiAgY2hhbmdlZERhdGE7XHJcblxyXG4gIC8vc3RvcmUgcHJldmlvdXMgZWRpdGVkIHllYXIgbnVtYmVyIGxpa2UgMSwyIFxyXG4gIHByZXZpb3VzSW5kZXg7XHJcblxyXG4gIGRlZXBTb3J0UmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgcHJldmlvdXNMaXN0O1xyXG5cclxuICAvL2ZvciBleGNlbCBkYXRhIG1hbmlwdWxhdGlvblxyXG4gIHNvbWVEYXRhID0gW107XHJcblxyXG4gIHNlbGVjdGVkWWVhciA9IFtdO1xyXG5cclxuICAvLyBzdG9yZSBleHBvcnRpbmcgaXRlbXNcclxuICBleHBvcnRpbmdJdGVtcyA9IFtdO1xyXG5cclxuICB1cGRhdGVkVG90YWw7XHJcblxyXG4gIG1pbkFtb3VudFJhbmdlO1xyXG4gIG1heEFtb3VudFJhbmdlO1xyXG4gIHJhbmdlU2VsZWN0aW9uO1xyXG5cclxuICBzZWxlY3RlZFZhbHVlOiBzdHJpbmc7XHJcblxyXG4gIGZsYXR0ZW5PYmplY3QgPSBbXTtcclxuXHJcbiAgZGF0YUZvckV4Y2VsU2hlZXQgPSBbXTtcclxuXHJcbiAgQElucHV0KCkgcHJpY2VSYW5nZURhdGEgPSBbXVxyXG5cclxuICAvLyBkYXRhIGZvciBwcmljZSByYW5nZSBmaWx0ZXJcclxuICBwcmljZVJhbmdlID0gW1xyXG4gICAge1xyXG4gICAgICAnbWluJzogMCxcclxuICAgICAgJ21heCc6IDEwMDAsXHJcbiAgICAgICdyYW5nZSc6ICcwIC0gMTAwMCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICdtaW4nOiAxMDAxLFxyXG4gICAgICAnbWF4JzogNTAwMCxcclxuICAgICAgJ3JhbmdlJzogJzEwMDEgLSA1MDAwJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgJ21pbic6IDUwMDEsXHJcbiAgICAgICdtYXgnOiAxMDAwMCxcclxuICAgICAgJ3JhbmdlJzogJzUwMDEgLSAxMDAwMCdcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICdtaW4nOiAxMDAwMSxcclxuICAgICAgJ21heCc6ICd1bmxpbWl0ZWQnLFxyXG4gICAgICAncmFuZ2UnOiAnQWJvdmUgMTAwMDAnXHJcbiAgICB9XHJcbiAgXTtcclxuICBcclxuICAvL0FuZ3VsYXIgTGlmZWN5Y2xlXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1hbmlwdWxhdGVEYXRhKHRoaXMudGFibGVJdGVtcyk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRhYmxlSXRlbXMpO1xyXG4gICAgdGhpcy5keW5hbWljWWVhcnModGhpcy5udW1iZXJPZkR1cmF0aW9uKTtcclxuICAgIHRoaXMudGVtcERhdGEgPSBbLi4udGhpcy50YWJsZUl0ZW1zXTtcclxuICAgIC8vIHRoaXMudGFibGVJdGVtcyA9IHRoaXMuZ2V0SXRlbXModGhpcy50ZW1wRGF0YSxudWxsLDApO1xyXG4gIH1cclxuXHJcblxyXG4gIC8vbWV0aG9kIHRvIGR5bmFtaWNhbGx5IHJlbmRlciB5ZWFycyBpbnN0ZWFkIG9mIHVzaW5nIGRhdGEueTEsIGRhdGEueTJcclxuICBkeW5hbWljWWVhcnMoZHVyYXRpb25ZZWFycykge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkdXJhdGlvblllYXJzOyBpKyspIHtcclxuICAgICAgdGhpcy5kdXJhdGlvbi5wdXNoKGkgKyAxKTtcclxuICAgIH1cclxuXHJcbiAgICAvL2xvb3AgZm9yIGdlbmVyYXRpbmcgaGVhZGVycyBZZWFyIDEsIFllYXIgMiBldGMuLlxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkdXJhdGlvblllYXJzOyBpKyspIHtcclxuICAgICAgdGhpcy5zYW1wbGVSb3cucHVzaCgneScgKyAoaSArIDEpKTtcclxuICAgICAgdGhpcy5yb3dIZWFkZXIucHVzaCh0aGlzLmhlYWRlck5hbWUgKyAnICcgKyAoaSArIDEpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vbWV0aG9kIHRvIGFkZCBcImV4cGFuc2lvblwiIGJvb2xlYW4gdG8gZGV0ZXJtaW5lIG9wZW4vY2xvc2Ugb2YgZXhwYW5zaW9uIHBhbmVsXHJcbiAgbWFuaXB1bGF0ZURhdGEobGlzdE9mSXRlbXMsIHN0YXJ0ID0gMSwgb2xkTGlzdD8pIHtcclxuICAgIGxpc3RPZkl0ZW1zLm1hcChpdGVtcyA9PiB7XHJcbiAgICAgIGl0ZW1zWydleHBhbnNpb24nXSA9IGZhbHNlO1xyXG4gICAgICBpdGVtc1snY2hlY2tlZCddID0gZmFsc2U7XHJcbiAgICAgIGl0ZW1zWydpbmRleCddID0gc3RhcnQ7XHJcbiAgICAgIHN0YXJ0ID09IDEgPyBpdGVtc1snaXNQYXJlbnQnXSA9IHRydWUgOiBpdGVtc1snaXNQYXJlbnQnXSA9IGZhbHNlO1xyXG4gICAgICBzdGFydCA9PSAxID8gaXRlbXNbJ2lkJ10gPSBpdGVtc1snbmFtZSddLmNoYXJBdCgwKSArIHN0YXJ0IDogaXRlbXNbJ2lkJ10gPSBvbGRMaXN0WyduYW1lJ10uY2hhckF0KDApICsgc3RhcnQ7XHJcblxyXG4gICAgICBzdGFydCAhPSAxID8gaXRlbXNbJ3BhcmVudE5hbWUnXSA9IG9sZExpc3RbJ25hbWUnXSA6IGl0ZW1zWydwYXJlbnROYW1lJ10gPSAnJztcclxuICAgICAgc3RhcnQgIT0gMSA/IGl0ZW1zWydwYXJlbnRJZCddID0gb2xkTGlzdFsnaWQnXSA6IGl0ZW1zWydwYXJlbnRJZCddID0gJyc7XHJcblxyXG4gICAgICBpdGVtcy5oYXNPd25Qcm9wZXJ0eSgnc3ViaXRlbXMnKSA9PSBmYWxzZSA/IGl0ZW1zWydoYXNDaGlsZCddPSBmYWxzZSA6ICcnO1xyXG4gICAgICBpZiAoaXRlbXMuaGFzT3duUHJvcGVydHkoJ3N1Yml0ZW1zJykpIHtcclxuICAgICAgICBsZXQgY291bnRJbmRleDtcclxuICAgICAgICBjb3VudEluZGV4ID0gc3RhcnQgKyAxO1xyXG4gICAgICAgIGl0ZW1zWydzdWJpdGVtcyddLmxlbmd0aD4wID8gaXRlbXNbJ2hhc0NoaWxkJ10gPSB0cnVlOiBpdGVtc1snaGFzQ2hpbGQnXT0gZmFsc2U7XHJcbiAgICAgICAgaXRlbXNbJ3N1Yml0ZW1zJ10ubGVuZ3RoID4gMCA/IHRoaXMubWFuaXB1bGF0ZURhdGEoaXRlbXNbJ3N1Yml0ZW1zJ10sIGNvdW50SW5kZXgsIGl0ZW1zKSA6ICcnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGV4cGFuZFJvdyhpdGVtKSB7XHJcbiAgICBpZiAoaXRlbT8uc3ViaXRlbXM/Lmxlbmd0aCA+IDApIHtcclxuICAgICAgaXRlbS5leHBhbnNpb24gPSAhaXRlbS5leHBhbnNpb247XHJcbiAgICB9XHJcblxyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICAvL2dldCBzb3J0IG9yZGVyIGZyb20gZGlyZWN0aXZlXHJcbiAgZ2V0U29ydE9yZGVyRGV0YWlscyhldmVudCkge1xyXG4gICAgY29uc29sZS5sb2coJ0V2ZW50JywgZXZlbnQpO1xyXG4gICAgdGhpcy5jb2x1bW5OYW1lID0gZXZlbnQucHJvcGVydHk7XHJcbiAgICB0aGlzLm9yZGVyVHlwZSA9IGV2ZW50Lm9yZGVyO1xyXG4gIH1cclxuXHJcbiAgLy9yZXNldCBzb3J0XHJcbiAgcmVzdEZpbHRlcigpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5vcmRlclR5cGUgPSAnJztcclxuICAgIHRoaXMuY29sdW1uTmFtZSA9ICcnO1xyXG4gICAgdGhpcy50YWJsZUl0ZW1zID0gW107XHJcbiAgICB0aGlzLnRhYmxlSXRlbXMgPSBbLi4udGhpcy50ZW1wRGF0YV07XHJcbiAgfVxyXG5cclxuICByZXNldERyb3Bkb3duKGV2ZW50OiBhbnkpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHVuZGVmaW5lZDtcclxuICAgIHRoaXMucmFuZ2VTZWxlY3Rpb24gPSAnJztcclxuICAgIHRoaXMubWluQW1vdW50UmFuZ2UgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLm1heEFtb3VudFJhbmdlID0gdW5kZWZpbmVkO1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICAvL2VkaXQgdGFibGUgY29sdW1uXHJcbiAgZWRpdERhdGEoZWRpdFZhbHVlLCBsaXN0LCBpbmRleCwgY2F0ZWdvcnlOYW1lKSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIGNvbnNvbGUubG9nKGluZGV4LCBsaXN0KTtcclxuICAgIGlmICh0aGlzLnByZXZpb3VzVmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdQVicsIHRoaXMucHJldmlvdXNJbmRleCwgdGhpcy5wcmV2aW91c1ZhbHVlLCB0aGlzLnByZXZpb3VzTGlzdCk7XHJcbiAgICAgIHRoaXMucHJldmlvdXNMaXN0Wyd5JyArIHRoaXMucHJldmlvdXNJbmRleF0gPSB0aGlzLnByZXZpb3VzVmFsdWU7XHJcbiAgICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9ICcnO1xyXG4gICAgfVxyXG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gZWRpdFZhbHVlO1xyXG4gICAgdGhpcy5jbGlja2VkSW5wdXQgPSBpbmRleDtcclxuICAgIHRoaXMuY2xpY2tlZFllYXIgPSAneScgKyBpbmRleDtcclxuICAgIHRoaXMuY2xpY2tlZE5hbWUgPSBjYXRlZ29yeU5hbWU7XHJcbiAgICB0aGlzLnByZXZpb3VzSW5kZXggPSBpbmRleDtcclxuICAgIHRoaXMucHJldmlvdXNMaXN0ID0gbGlzdDtcclxuICB9XHJcblxyXG4gIC8vY2FuY2VsIGVkaXQgbW9kZVxyXG4gIGNsb3NlRWRpdChqc29uTGlzdCwgeWVhclZhbHVlKSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHRoaXMuY2xpY2tlZFllYXIgPSAnJztcclxuICAgIHRoaXMuY2xpY2tlZE5hbWUgPSAnJztcclxuICAgIGlmICh0aGlzLnByZXZpb3VzVmFsdWUgIT09ICcnKSB7XHJcbiAgICAgIGpzb25MaXN0Wyd5JyArIHllYXJWYWx1ZV0gPSB0aGlzLnByZXZpb3VzVmFsdWU7XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRhYmxlSXRlbXMpO1xyXG4gIH1cclxuXHJcbiAgLy9zYXZlIGVkaXRlZCBpbnB1dFxyXG4gIG1vZGlmeURhdGEoanNvbkxpc3QsIHllYXJWYWx1ZSkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmNsaWNrZWRZZWFyID0gJyc7XHJcbiAgICB0aGlzLmNsaWNrZWROYW1lID0gJyc7XHJcbiAgICBsZXQgdGVtcFJlc3AgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGpzb25MaXN0KSk7O1xyXG4gICAgdGVtcFJlc3BbJ3knICsgeWVhclZhbHVlXSA9IHRoaXMucHJldmlvdXNWYWx1ZTtcclxuICAgIGxldCByZXNwID0ge1xyXG4gICAgICBlZGl0ZWRSb3c6IHRlbXBSZXNwLFxyXG4gICAgICBlZGl0ZWREYXRhOiB0aGlzLmNoYW5nZWREYXRhLFxyXG4gICAgICBlZGl0ZWRZZWFyOiAneScgKyB5ZWFyVmFsdWUsXHJcbiAgICAgIHByZXZpb3VzRGF0YTogdGhpcy5wcmV2aW91c1ZhbHVlXHJcbiAgICB9XHJcbiAgICB0aGlzLm5vdGlmeURhdGFDaGFuZ2UuZW1pdChyZXNwKTtcclxuICAgIC8vIGpzb25MaXN0Wyd5Jyt5ZWFyVmFsdWVdID0gdGhpcy5jaGFuZ2VkRGF0YTtcclxuICAgIHRoaXMucHJldmlvdXNWYWx1ZSA9ICcnO1xyXG5cclxuICB9XHJcblxyXG4gIC8vIGNoZWNrYm94IHNlbGVjdGlvbiBoYW5kbGVcclxuICBleHBvcnRTZWxlY3QoY2hvc2VuUm93LCBjb21wbGV0ZWQ6IGJvb2xlYW4pIHtcclxuICAgY29uc29sZS5sb2coJ0NoZWNrJyxjaG9zZW5Sb3cpO1xyXG4gICAgaWYgKGNob3NlblJvd1snaXNQYXJlbnQnXSkge1xyXG4gICAgIFxyXG4gICAgICBpZiAoY2hvc2VuUm93LnN1Yml0ZW1zICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAoY2hvc2VuUm93LnN1Yml0ZW1zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNob3NlblJvd1snY2hlY2tlZCddID0gIWNob3NlblJvd1snY2hlY2tlZCddO1xyXG4gICAgICAvL2Nob3NlblJvdy5zdWJpdGVtcy5mb3JFYWNoKHQgPT4gdC5jaGVja2VkID0gY29tcGxldGVkKTtcclxuICAgICAgY2hvc2VuUm93Lmhhc093blByb3BlcnR5KCdzdWJpdGVtcycpID8gdGhpcy5leHBvcnRTZWxlY3QoY2hvc2VuUm93WydzdWJpdGVtcyddLCBjb21wbGV0ZWQpIDogJyc7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmKGNob3NlblJvdy5sZW5ndGggPiAwKXtcclxuICBcclxuICAgICAgLy8gY2hvc2VuUm93WydjaGVja2VkJ10gPSAhY2hvc2VuUm93WydjaGVja2VkJ107XHJcbiAgICAgIGNob3NlblJvdy5mb3JFYWNoKHQgPT4gdC5jaGVja2VkID0gY29tcGxldGVkKTtcclxuICAgICAgY2hvc2VuUm93Lm1hcCgoZGF0YSk9PntcclxuICAgICAgICBkYXRhLmhhc093blByb3BlcnR5KCdzdWJpdGVtcycpID8gdGhpcy5leHBvcnRTZWxlY3QoZGF0YVsnc3ViaXRlbXMnXSwgY29tcGxldGVkKSA6ICcnO1xyXG4gICAgICB9KVxyXG4gICAgICAvL2Nob3NlblJvdy5oYXNPd25Qcm9wZXJ0eSgnc3ViaXRlbXMnKSA/IHRoaXMuZXhwb3J0U2VsZWN0KGNob3NlblJvd1snc3ViaXRlbXMnXSwgY29tcGxldGVkKSA6ICcnO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIGNob3NlblJvd1snY2hlY2tlZCddID0gIWNob3NlblJvd1snY2hlY2tlZCddO1xyXG4gICAgICAvLyB0aGlzLnNlbGVjdFBhcmVudChjaG9zZW5Sb3dbJ3BhcmVudElkJ10pO1xyXG4gICAgICBjaG9zZW5Sb3cuaGFzT3duUHJvcGVydHkoJ3N1Yml0ZW1zJykgPyB0aGlzLmV4cG9ydFNlbGVjdChjaG9zZW5Sb3dbJ3N1Yml0ZW1zJ10sIGNvbXBsZXRlZCkgOiAnJztcclxuICAgIH1cclxuXHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIC8vIHNlbGVjdFBhcmVudChpZCl7XHJcbiAgLy8gICBsZXQgZmxhdEZvckNoZWNrYm94ID0gdGhpcy5saWJTZXJ2aWNlLmdldFNlcGVyYXRpb24odGhpcy50YWJsZUl0ZW1zKTtcclxuICAvLyAgIGNvbnNvbGUubG9nKCdwYXJlbnQgc2VsZWN0aW9uJywgZmxhdEZvckNoZWNrYm94KTtcclxuICAvLyAgIGZsYXRGb3JDaGVja2JveC5tYXAoKGxpc3RGbGF0KT0+e1xyXG4gIC8vICAgICBpZihsaXN0RmxhdFsnaWQnXSA9PSBpZCl7XHJcbiAgLy8gICAgICAgbGlzdEZsYXRbJ2NoZWNrZWQnXSA9IHRydWU7XHJcbiAgLy8gICAgICAgdGhpcy5zZWxlY3RQYXJlbnQobGlzdEZsYXRbJ3BhcmVudElkJ10pO1xyXG4gIC8vICAgICB9XHJcbiAgXHJcblxyXG4gIC8vICAgfSk7XHJcbiAgLy8gfVxyXG5cclxuICAvL2V4cG9ydCB0byBleGNlbFxyXG4gIGV4cG9ydERhdGEoKSB7XHJcbiAgICB0aGlzLmV4cG9ydGluZ0l0ZW1zID0gW107XHJcbiAgICB0aGlzLmZsYXR0ZW5PYmplY3QgPSBbXTtcclxuICAgIHRoaXMuc29tZURhdGEgPSBbXTtcclxuICAgIHRoaXMuZGF0YUZvckV4Y2VsU2hlZXQgPSBbXTtcclxuXHJcbiAgICBpZih0aGlzLmZpbHRlckpzb24ucm93U2VsZWN0aW9uKXtcclxuICAgICAgICAvLyBwdXNoIHNlbGVjdGVkIGl0ZW1zIGZvciBleHBvcnRpbmdcclxuICAgICAgICB0aGlzLnRhYmxlSXRlbXMubWFwKChpdGVtRGF0YSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGl0ZW1EYXRhWydjaGVja2VkJ10pIHtcclxuICAgICAgICAgICAgdGhpcy5leHBvcnRpbmdJdGVtcy5wdXNoKGl0ZW1EYXRhKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy9zZXJ2aWNlIG1ldGhvZCB0byBmbGF0dGVuIGpzb24gZnJvbSBuZXN0ZWQganNvblxyXG4gICAgdGhpcy5mbGF0dGVuT2JqZWN0ID0gdGhpcy5maWx0ZXJKc29uLnJvd1NlbGVjdGlvbiA/IHRoaXMubGliU2VydmljZS5nZXRTZXBlcmF0aW9uKHRoaXMuZXhwb3J0aW5nSXRlbXMsIDAgLCB0cnVlLCB0cnVlKSA6IHRoaXMubGliU2VydmljZS5nZXRTZXBlcmF0aW9uKHRoaXMudGFibGVJdGVtcywgMCAsIHRydWUpO1xyXG4gICBcclxuICAgXHJcbiAgIC8vIGNvbnN0cnVjdGluZyBvYmplY3RzIHJlcXVpcmVkIGZvciBleGNlbCBieSBleHRyYWN0aW5nIGZyb20gb3JpZ2luYWwgb2JqZWN0XHJcbiAgICB0aGlzLmZsYXR0ZW5PYmplY3QubWFwKCh5ZWFyTGlzdCk9PntcclxuICAgICAgdGhpcy5zdHI9Jyc7XHJcbiAgICAgIHRoaXMuc3RyKz1gXCJDYXRlZ29yeVwiIDpcIiR7eWVhckxpc3RbJ25hbWUnXX1cIixgXHJcbiAgICAgIGZvcihsZXQgbnVtYmVyID0gMTsgbnVtYmVyIDw9IHRoaXMubnVtYmVyT2ZEdXJhdGlvbjsgbnVtYmVyICsrKXtcclxuICAgICAgICAvLyBsZXQgY29tbWEgPSBudW1iZXIgIT09IHRoaXMubnVtYmVyT2ZEdXJhdGlvbiA/ICcsJyA6ICcnO1xyXG4gICAgICAgIHRoaXMuc3RyKz1gXCJZZWFyICR7bnVtYmVyfVwiIDoke3llYXJMaXN0Wyd5JytudW1iZXJdfWArICcsJ1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RyKz1gXCJUb3RhbFwiIDoke3llYXJMaXN0Wyd0b3RhbCddfSxcImlzUGFyZW50XCIgOiAke3llYXJMaXN0Wydpc1BhcmVudCddfSxcImluZGV4XCIgOiAke3llYXJMaXN0WydpbmRleCddfWBcclxuICAgICAgbGV0IGRlbW8gPSBgeyR7dGhpcy5zdHJ9fWA7XHJcbiAgICAgIHRoaXMuc29tZURhdGEucHVzaChKU09OLnBhcnNlKGRlbW8pKTtcclxuICAgIH0pO1xyXG4gICBcclxuICAgIC8vIHJldHVybnMgYXJyYXkgb2YgdmFsdWVzIGZyb20ganNvbiBrZXlcclxuICAgIHRoaXMuZ2V0RXhjZWxSb3dWYWx1ZXModGhpcy5zb21lRGF0YSk7XHJcbiAgIFxyXG4gICAgLy8gc2VydmljZSB0byBnZW5lcmF0ZSBleGNlbFxyXG4gICAgdGhpcy5saWJTZXJ2aWNlLmdlbmVyYXRlRXhjZWwodGhpcy5kYXRhRm9yRXhjZWxTaGVldCwnUHJvZml0IExvc3MgUmVwb3J0JywgJ1Byb2ZpdCBMb3NzIFZpZXcnLCB0aGlzLnNvbWVEYXRhKVxyXG4gIH1cclxuXHJcblxyXG4gIC8vIG1ldGhvZCB0byBnZXQganNvbiB2YWx1ZXMgYW5kIHN0b3JlIGluIGFycmF5XHJcbiAgZ2V0RXhjZWxSb3dWYWx1ZXMoZmxhdERhdGEpe1xyXG4gICAgZmxhdERhdGEubWFwKChyb3c6IGFueSkgPT4ge1xyXG4gICAgICB0aGlzLmRhdGFGb3JFeGNlbFNoZWV0LnB1c2goT2JqZWN0LnZhbHVlcyhyb3cpKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG5cclxuICAvLyBtZXRob2QgdG8gZGV0ZWN0IGFsbCBjaGVja2JveCBzZWxlY3RlZCBvciBub3RcclxuICBzb21lQ29tcGxldGUocm93SXRlbXMpOiBib29sZWFuIHtcclxuXHJcbiAgICBsZXQgaXNDb21wbGV0ZWQgPSByb3dJdGVtcy5zdWJpdGVtcyAhPT0gdW5kZWZpbmVkID8gcm93SXRlbXMuc3ViaXRlbXMuZXZlcnkodCA9PiB0LmNoZWNrZWQpIDogZmFsc2U7XHJcbiAgICBpZiAocm93SXRlbXMuc3ViaXRlbXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICBpZiAocm93SXRlbXMuc3ViaXRlbXMubGVuZ3RoID09IDApIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHJvd0l0ZW1zLnN1Yml0ZW1zLmZpbHRlcih0ID0+IHQuY2hlY2tlZCkubGVuZ3RoID4gMCAmJiAhaXNDb21wbGV0ZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL2F2b2lkIGV4cGFuc2lvbiBwYW5lbCBvcGVuIG9uIGlucHV0IGZvY3VzXHJcbiAgc3RvcEZvY3VzKCkge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgfVxyXG5cclxuICAvL3N0b3JlIG1vZGlmaWVkIHZhbHVlIG9uIGNoYW5nZSBldmVudFxyXG4gIG9uU2VhcmNoQ2hhbmdlKHNlYXJjaFZhbHVlOiBzdHJpbmcsIG5vbk1vZGlmaWVkRGF0YSk6IHZvaWQge1xyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICB0aGlzLmNoYW5nZWREYXRhID0gc2VhcmNoVmFsdWU7XHJcbiAgICAvLyBjb25zb2xlLmxvZyhub25Nb2RpZmllZERhdGEpO1xyXG4gICAgLy8gdGhpcy5wcmV2aW91c1ZhbHVlID0gbm9uTW9kaWZpZWREYXRhO1xyXG4gIH1cclxuXHJcbiAgLy9hdm9pZCBleHBhbnNpb24gcGFuZWwgb3BlbiBvbiBpbnB1dCBmb2N1c1xyXG4gIHJlc2V0Q2xpY2soKSB7XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICB9XHJcblxyXG4gIGdldFVwZGF0ZWRUb3RhbCh0b3RhbFZhbHVlLCBsaXN0KSB7XHJcbiAgICBsZXQgc3VtVG90YWwgPSAwO1xyXG4gICAgdGhpcy5zZWxlY3RlZFllYXIubWFwKChpdGVyYXRlZFZhbHVlKSA9PiB7XHJcbiAgICAgIHN1bVRvdGFsID0gc3VtVG90YWwgKyBOdW1iZXIobGlzdFtpdGVyYXRlZFZhbHVlXSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnVwZGF0ZWRUb3RhbCA9IE51bWJlcih0b3RhbFZhbHVlKSAtIE51bWJlcihzdW1Ub3RhbCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMudXBkYXRlZFRvdGFsO1xyXG4gIH1cclxuXHJcbiAgdmFsdWVDaGFuZ2UoeWVhck5hbWVzLCBldmVudCwgeWVhckluZGV4KSB7XHJcbiAgICBpZiAodGhpcy5zZWxlY3RlZFllYXIubGVuZ3RoID4gMCkge1xyXG4gICAgICBpZiAodGhpcy5zZWxlY3RlZFllYXIuaW5jbHVkZXModGhpcy5zYW1wbGVSb3dbeWVhckluZGV4XSkpIHtcclxuICAgICAgICBsZXQgcmVtb3ZlSW5kZXggPSB0aGlzLnNlbGVjdGVkWWVhci5pbmRleE9mKHRoaXMuc2FtcGxlUm93W3llYXJJbmRleF0pO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRZZWFyLnNwbGljZShyZW1vdmVJbmRleCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFllYXIucHVzaCh0aGlzLnNhbXBsZVJvd1t5ZWFySW5kZXhdKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRZZWFyLnB1c2godGhpcy5zYW1wbGVSb3dbeWVhckluZGV4XSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRZZWFyLmluY2x1ZGVzKHRoaXMuc2VsZWN0ZWRWYWx1ZSkpIHtcclxuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgICB0aGlzLm1pbkFtb3VudFJhbmdlID0gdW5kZWZpbmVkO1xyXG4gICAgICB0aGlzLm1heEFtb3VudFJhbmdlID0gdW5kZWZpbmVkO1xyXG4gICAgICB0aGlzLnJhbmdlU2VsZWN0aW9uID0gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcmljZUZpbHRlcihtaW4sIG1heCwgcmFuZ2UpIHtcclxuICAgIHRoaXMubWluQW1vdW50UmFuZ2UgPSBtaW47XHJcbiAgICB0aGlzLm1heEFtb3VudFJhbmdlID0gbWF4O1xyXG4gICAgdGhpcy5yYW5nZVNlbGVjdGlvbiA9IHJhbmdlO1xyXG5cclxuICB9XHJcblxyXG4gIGNsZWFyRmlsdGVyKCkge1xyXG4gICAgdGhpcy5yYW5nZVNlbGVjdGlvbiA9ICcnO1xyXG4gICAgdGhpcy5zZWxlY3RlZFllYXIgPSBbXTtcclxuICAgIHRoaXMubWluQW1vdW50UmFuZ2UgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLm1heEFtb3VudFJhbmdlID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy50YWJsZUl0ZW1zID0gWy4uLnRoaXMudGVtcERhdGFdXHJcbiAgfVxyXG5cclxuICByZXNldFBsYWNlaG9sZGVyKHNlbGVjdGVkRGF0YTogTWF0U2VsZWN0KSB7XHJcbiAgICBzZWxlY3RlZERhdGEucGxhY2Vob2xkZXIgPSAnJztcclxuICB9XHJcblxyXG59XHJcbiJdfQ==