(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('exceljs'), require('file-saver'), require('@angular/platform-browser'), require('@angular/forms'), require('@angular/cdk/table'), require('@angular/material/autocomplete'), require('@angular/material/badge'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/core'), require('@angular/material/datepicker'), require('@angular/material/dialog'), require('@angular/material/divider'), require('@angular/material/expansion'), require('@angular/material/form-field'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slide-toggle'), require('@angular/material/slider'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/stepper'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('rxjs/operators'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('new-lib-demo', ['exports', '@angular/common', '@angular/core', 'exceljs', 'file-saver', '@angular/platform-browser', '@angular/forms', '@angular/cdk/table', '@angular/material/autocomplete', '@angular/material/badge', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/core', '@angular/material/datepicker', '@angular/material/dialog', '@angular/material/divider', '@angular/material/expansion', '@angular/material/form-field', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/menu', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slide-toggle', '@angular/material/slider', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/stepper', '@angular/material/table', '@angular/material/tabs', '@angular/material/toolbar', '@angular/material/tooltip', 'rxjs/operators', 'rxjs'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['new-lib-demo'] = {}, global.ng.common, global.ng.core, global.exceljs, global.fs, global.ng.platformBrowser, global.ng.forms, global.ng.cdk.table, global.ng.material.autocomplete, global.ng.material.badge, global.ng.material.bottomSheet, global.ng.material.button, global.ng.material.buttonToggle, global.ng.material.card, global.ng.material.checkbox, global.ng.material.chips, global.ng.material.core, global.ng.material.datepicker, global.ng.material.dialog, global.ng.material.divider, global.ng.material.expansion, global.ng.material.formField, global.ng.material.gridList, global.ng.material.icon, global.ng.material.input, global.ng.material.list, global.ng.material.menu, global.ng.material.paginator, global.ng.material.progressBar, global.ng.material.progressSpinner, global.ng.material.radio, global.ng.material.select, global.ng.material.sidenav, global.ng.material.slideToggle, global.ng.material.slider, global.ng.material.snackBar, global.ng.material.sort, global.ng.material.stepper, global.ng.material.table, global.ng.material.tabs, global.ng.material.toolbar, global.ng.material.tooltip, global.rxjs.operators, global.rxjs));
}(this, (function (exports, i1, i0, exceljs, fs, platformBrowser, forms, table, autocomplete, badge, bottomSheet, button, buttonToggle, card, checkbox, chips, core, datepicker, dialog, divider, expansion, formField, gridList, icon, input, list, menu, paginator, progressBar, progressSpinner, radio, select, sidenav, slideToggle, slider, snackBar, sort, stepper, table$1, tabs, toolbar, tooltip, operators, rxjs) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }

    var NewLibDemoService = /** @class */ (function () {
        function NewLibDemoService(datePipe) {
            this.datePipe = datePipe;
            this.dataForXSLX = [];
            this.dummExcelDT = [];
        }
        // method to seperate subitems and make flat json
        NewLibDemoService.prototype.getSeperation = function (dumData, startIndex, forExcel, selectedExport) {
            var _this = this;
            if (startIndex === void 0) { startIndex = 0; }
            if (forExcel === void 0) { forExcel = false; }
            if (selectedExport === void 0) { selectedExport = false; }
            startIndex == 0 ? this.dummExcelDT = [] : '';
            dumData.map(function (data) {
                if (data['checked'] && forExcel && selectedExport) {
                    _this.dummExcelDT.push(data);
                }
                else {
                    _this.dummExcelDT.push(data);
                }
                if (data.hasOwnProperty("subitems")) {
                    data['subitems'].length > 0 ? _this.getSeperation(data['subitems'], 1, forExcel) : '';
                }
            });
            this.dataForXSLX = [];
            this.dataForXSLX = JSON.parse(JSON.stringify(this.dummExcelDT));
            forExcel ? this.removeGargabeKeyValue(this.dataForXSLX) : '';
            return this.dataForXSLX;
        };
        // remove unwanted json keys to avoid shown in excel 
        NewLibDemoService.prototype.removeGargabeKeyValue = function (flattenFilter) {
            flattenFilter.map(function (dataToFilter) {
                delete dataToFilter['subitems'];
                delete dataToFilter['expansion'];
                delete dataToFilter['checked'];
                delete dataToFilter['id'];
                delete dataToFilter['parentName'];
                delete dataToFilter['parentId'];
                delete dataToFilter['hasChild'];
            });
        };
        // method to generate excel and save as file .xlsx
        NewLibDemoService.prototype.generateExcel = function (dataForExcel, titleForExcel, sheetNameForExcel, dataForValues) {
            return __awaiter(this, void 0, void 0, function () {
                var title, header, workbook, worksheet, titleRow, subTitleRow, headerRow, footerRow;
                var _this = this;
                return __generator(this, function (_a) {
                    title = titleForExcel;
                    header = Object.keys(dataForValues[0]).slice(0, -2);
                    workbook = new exceljs.Workbook();
                    worksheet = workbook.addWorksheet(sheetNameForExcel);
                    titleRow = worksheet.addRow([title]);
                    titleRow.font = { name: 'Comic Sans MS', family: 4, size: 16, underline: 'double', bold: true };
                    worksheet.addRow([]);
                    subTitleRow = worksheet.addRow(['Date : ' + this.datePipe.transform(new Date(), 'medium')]);
                    worksheet.mergeCells('A1:D2');
                    // Blank Row
                    worksheet.addRow([]);
                    headerRow = worksheet.addRow(header);
                    // Cell Style : Fill and Border
                    headerRow.eachCell(function (cell, number) {
                        cell.font = {
                            color: { argb: "ffffff" }
                        };
                        cell.fill = {
                            type: 'pattern',
                            pattern: 'solid',
                            fgColor: { argb: '460073' },
                        };
                        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                    });
                    // Add Data and Conditional Formatting
                    dataForExcel.forEach(function (d, index) {
                        if (dataForValues[index]['isParent']) {
                            worksheet.addRow([]);
                            var sub = d.slice(0, -2);
                            var row = worksheet.addRow(sub);
                            row.getCell(1).font = {
                                bold: true
                            };
                        }
                        else {
                            var sub1 = d.slice(0, -2);
                            var row = worksheet.addRow(sub1);
                            row.getCell(1).alignment = { indent: _this.dummExcelDT[index]['index'] };
                        }
                    });
                    worksheet.getColumn(1).width = 60;
                    worksheet.getColumn(3).width = 30;
                    worksheet.getColumn(4).width = 30;
                    worksheet.addRow([]);
                    footerRow = worksheet.addRow(['Report Generated Using Master-Grid Angular Library']);
                    footerRow.getCell(1).fill = {
                        type: 'pattern',
                        pattern: 'solid',
                        fgColor: { argb: 'FFCCFFE5' }
                    };
                    footerRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                    // Merge Cells
                    worksheet.mergeCells("A" + footerRow.number + ":F" + footerRow.number);
                    // Generate Excel File with given name
                    workbook.xlsx.writeBuffer().then(function (data) {
                        var blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                        fs.saveAs(blob, 'Profit Loss.xlsx');
                    });
                    return [2 /*return*/];
                });
            });
        };
        return NewLibDemoService;
    }());
    NewLibDemoService.ɵprov = i0.ɵɵdefineInjectable({ factory: function NewLibDemoService_Factory() { return new NewLibDemoService(i0.ɵɵinject(i1.DatePipe)); }, token: NewLibDemoService, providedIn: "root" });
    NewLibDemoService.decorators = [
        { type: i0.Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    NewLibDemoService.ctorParameters = function () { return [
        { type: i1.DatePipe }
    ]; };

    var NewLibDemoComponent = /** @class */ (function () {
        function NewLibDemoComponent() {
        }
        NewLibDemoComponent.prototype.ngOnInit = function () {
        };
        return NewLibDemoComponent;
    }());
    NewLibDemoComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-new-lib-demo',
                    template: "\n    <p>\n      new-lib-demo works!\n    </p>\n  "
                },] }
    ];
    NewLibDemoComponent.ctorParameters = function () { return []; };

    var LibProfitlossComponent = /** @class */ (function () {
        function LibProfitlossComponent(libService) {
            this.libService = libService;
            //populating in table 
            this.tableItems = [];
            //populating header text in table 
            this.headerName = '';
            this.notifyDataChange = new i0.EventEmitter();
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
        LibProfitlossComponent.prototype.ngOnInit = function () {
            this.manipulateData(this.tableItems);
            console.log(this.tableItems);
            this.dynamicYears(this.numberOfDuration);
            this.tempData = __spread(this.tableItems);
            // this.tableItems = this.getItems(this.tempData,null,0);
        };
        //method to dynamically render years instead of using data.y1, data.y2
        LibProfitlossComponent.prototype.dynamicYears = function (durationYears) {
            for (var i = 0; i < durationYears; i++) {
                this.duration.push(i + 1);
            }
            //loop for generating headers Year 1, Year 2 etc..
            for (var i = 0; i < durationYears; i++) {
                this.sampleRow.push('y' + (i + 1));
                this.rowHeader.push(this.headerName + ' ' + (i + 1));
            }
        };
        //method to add "expansion" boolean to determine open/close of expansion panel
        LibProfitlossComponent.prototype.manipulateData = function (listOfItems, start, oldList) {
            var _this = this;
            if (start === void 0) { start = 1; }
            listOfItems.map(function (items) {
                items['expansion'] = false;
                items['checked'] = false;
                items['index'] = start;
                start == 1 ? items['isParent'] = true : items['isParent'] = false;
                start == 1 ? items['id'] = items['name'].charAt(0) + start : items['id'] = oldList['name'].charAt(0) + start;
                start != 1 ? items['parentName'] = oldList['name'] : items['parentName'] = '';
                start != 1 ? items['parentId'] = oldList['id'] : items['parentId'] = '';
                items.hasOwnProperty('subitems') == false ? items['hasChild'] = false : '';
                if (items.hasOwnProperty('subitems')) {
                    var countIndex = void 0;
                    countIndex = start + 1;
                    items['subitems'].length > 0 ? items['hasChild'] = true : items['hasChild'] = false;
                    items['subitems'].length > 0 ? _this.manipulateData(items['subitems'], countIndex, items) : '';
                }
            });
        };
        LibProfitlossComponent.prototype.expandRow = function (item) {
            var _a;
            if (((_a = item === null || item === void 0 ? void 0 : item.subitems) === null || _a === void 0 ? void 0 : _a.length) > 0) {
                item.expansion = !item.expansion;
            }
            event.stopPropagation();
        };
        //get sort order from directive
        LibProfitlossComponent.prototype.getSortOrderDetails = function (event) {
            console.log('Event', event);
            this.columnName = event.property;
            this.orderType = event.order;
        };
        //reset sort
        LibProfitlossComponent.prototype.restFilter = function () {
            event.stopPropagation();
            this.orderType = '';
            this.columnName = '';
            this.tableItems = [];
            this.tableItems = __spread(this.tempData);
        };
        LibProfitlossComponent.prototype.resetDropdown = function (event) {
            this.selectedValue = undefined;
            this.rangeSelection = '';
            this.minAmountRange = undefined;
            this.maxAmountRange = undefined;
            event.stopPropagation();
        };
        //edit table column
        LibProfitlossComponent.prototype.editData = function (editValue, list, index, categoryName) {
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
        };
        //cancel edit mode
        LibProfitlossComponent.prototype.closeEdit = function (jsonList, yearValue) {
            event.stopPropagation();
            this.clickedYear = '';
            this.clickedName = '';
            if (this.previousValue !== '') {
                jsonList['y' + yearValue] = this.previousValue;
            }
            console.log(this.tableItems);
        };
        //save edited input
        LibProfitlossComponent.prototype.modifyData = function (jsonList, yearValue) {
            event.stopPropagation();
            this.clickedYear = '';
            this.clickedName = '';
            var tempResp = JSON.parse(JSON.stringify(jsonList));
            ;
            tempResp['y' + yearValue] = this.previousValue;
            var resp = {
                editedRow: tempResp,
                editedData: this.changedData,
                editedYear: 'y' + yearValue,
                previousData: this.previousValue
            };
            this.notifyDataChange.emit(resp);
            // jsonList['y'+yearValue] = this.changedData;
            this.previousValue = '';
        };
        // checkbox selection handle
        LibProfitlossComponent.prototype.exportSelect = function (chosenRow, completed) {
            var _this = this;
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
                chosenRow.forEach(function (t) { return t.checked = completed; });
                chosenRow.map(function (data) {
                    data.hasOwnProperty('subitems') ? _this.exportSelect(data['subitems'], completed) : '';
                });
                //chosenRow.hasOwnProperty('subitems') ? this.exportSelect(chosenRow['subitems'], completed) : '';
            }
            else {
                chosenRow['checked'] = !chosenRow['checked'];
                // this.selectParent(chosenRow['parentId']);
                chosenRow.hasOwnProperty('subitems') ? this.exportSelect(chosenRow['subitems'], completed) : '';
            }
            event.stopPropagation();
        };
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
        LibProfitlossComponent.prototype.exportData = function () {
            var _this = this;
            this.exportingItems = [];
            this.flattenObject = [];
            this.someData = [];
            this.dataForExcelSheet = [];
            if (this.filterJson.rowSelection) {
                // push selected items for exporting
                this.tableItems.map(function (itemData) {
                    if (itemData['checked']) {
                        _this.exportingItems.push(itemData);
                    }
                });
            }
            //service method to flatten json from nested json
            this.flattenObject = this.filterJson.rowSelection ? this.libService.getSeperation(this.exportingItems, 0, true, true) : this.libService.getSeperation(this.tableItems, 0, true);
            // constructing objects required for excel by extracting from original object
            this.flattenObject.map(function (yearList) {
                _this.str = '';
                _this.str += "\"Category\" :\"" + yearList['name'] + "\",";
                for (var number = 1; number <= _this.numberOfDuration; number++) {
                    // let comma = number !== this.numberOfDuration ? ',' : '';
                    _this.str += "\"Year " + number + "\" :" + yearList['y' + number] + ',';
                }
                _this.str += "\"Total\" :" + yearList['total'] + ",\"isParent\" : " + yearList['isParent'] + ",\"index\" : " + yearList['index'];
                var demo = "{" + _this.str + "}";
                _this.someData.push(JSON.parse(demo));
            });
            // returns array of values from json key
            this.getExcelRowValues(this.someData);
            // service to generate excel
            this.libService.generateExcel(this.dataForExcelSheet, 'Profit Loss Report', 'Profit Loss View', this.someData);
        };
        // method to get json values and store in array
        LibProfitlossComponent.prototype.getExcelRowValues = function (flatData) {
            var _this = this;
            flatData.map(function (row) {
                _this.dataForExcelSheet.push(Object.values(row));
            });
        };
        // method to detect all checkbox selected or not
        LibProfitlossComponent.prototype.someComplete = function (rowItems) {
            var isCompleted = rowItems.subitems !== undefined ? rowItems.subitems.every(function (t) { return t.checked; }) : false;
            if (rowItems.subitems !== undefined) {
                if (rowItems.subitems.length == 0) {
                    return false;
                }
                else {
                    return rowItems.subitems.filter(function (t) { return t.checked; }).length > 0 && !isCompleted;
                }
            }
        };
        //avoid expansion panel open on input focus
        LibProfitlossComponent.prototype.stopFocus = function () {
            event.stopPropagation();
        };
        //store modified value on change event
        LibProfitlossComponent.prototype.onSearchChange = function (searchValue, nonModifiedData) {
            event.stopPropagation();
            this.changedData = searchValue;
            // console.log(nonModifiedData);
            // this.previousValue = nonModifiedData;
        };
        //avoid expansion panel open on input focus
        LibProfitlossComponent.prototype.resetClick = function () {
            event.stopPropagation();
        };
        LibProfitlossComponent.prototype.getUpdatedTotal = function (totalValue, list) {
            var sumTotal = 0;
            this.selectedYear.map(function (iteratedValue) {
                sumTotal = sumTotal + Number(list[iteratedValue]);
            });
            this.updatedTotal = Number(totalValue) - Number(sumTotal);
            return this.updatedTotal;
        };
        LibProfitlossComponent.prototype.valueChange = function (yearNames, event, yearIndex) {
            if (this.selectedYear.length > 0) {
                if (this.selectedYear.includes(this.sampleRow[yearIndex])) {
                    var removeIndex = this.selectedYear.indexOf(this.sampleRow[yearIndex]);
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
        };
        LibProfitlossComponent.prototype.priceFilter = function (min, max, range) {
            this.minAmountRange = min;
            this.maxAmountRange = max;
            this.rangeSelection = range;
        };
        LibProfitlossComponent.prototype.clearFilter = function () {
            this.rangeSelection = '';
            this.selectedYear = [];
            this.minAmountRange = undefined;
            this.maxAmountRange = undefined;
            this.selectedValue = undefined;
            this.tableItems = __spread(this.tempData);
        };
        LibProfitlossComponent.prototype.resetPlaceholder = function (selectedData) {
            selectedData.placeholder = '';
        };
        return LibProfitlossComponent;
    }());
    LibProfitlossComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'lib-lib-profitloss',
                    template: "<div  [ngClass]=\"{'button-align' : filterJson?.showFiltering, 'button-end' : !filterJson?.showFiltering}\">\r\n    <div class=\"filter-holder\" *ngIf=\"filterJson?.showFiltering\">\r\n        <button class=\"filter-button\" mat-stroked-button [matMenuTriggerFor]=\"menu\">Filter\r\n            <mat-icon class=\"filter-icon\">filter_list</mat-icon>\r\n        </button>\r\n        <mat-menu [class]=\"'filter-menu-layout'\" #menu=\"matMenu\">\r\n            <div class=\"title-container\">\r\n                <p class=\"panel-title\">Filter By</p>\r\n            </div>\r\n            <div class=\"hide-holder horizontal-gap\" *ngIf=\"filterJson?.hideShowFiltering\">\r\n                <div class=\"hide-filter-text-holder\">\r\n                    <p class=\"hide-show-text\">Hide/Show</p>\r\n                </div>\r\n                <mat-divider [vertical]=\"true\"></mat-divider>\r\n                <div id=\"yearCheckbox\" class=\"filter-boxes\" (click)=\"$event.stopPropagation()\">\r\n                    <mat-checkbox *ngFor=\"let yearNames of rowHeader;let yearIndex = index;\"\r\n                        [checked]=\"selectedYear.includes(sampleRow[yearIndex])\" class=\"move-checkbox\"\r\n                        (change)=\"valueChange(yearNames,$event, yearIndex)\" [ngStyle]=\"{'color': '#75003'}\">\r\n                        {{ yearNames }}\r\n                    </mat-checkbox>\r\n                </div>\r\n            </div>\r\n            <mat-divider class=\"horizontal-gap\" *ngIf=\"filterJson?.hideShowFiltering\"></mat-divider>\r\n            <div class=\"hide-holder horizontal-gap\" *ngIf=\"filterJson?.rangeFiltering\">\r\n                <div class=\"hide-filter-text-holder\">\r\n                    <p class=\"hide-show-text\">Range</p>\r\n                </div>\r\n                <mat-divider [vertical]=\"true\"></mat-divider>\r\n    \r\n                <div (click)=\"$event.stopPropagation()\">\r\n                    <div class=\"filter-input\">\r\n                        <label class=\"label-text\">Choose Year to Filter by Range</label>\r\n                        <mat-form-field class=\"input_type_wrap\">\r\n                            <mat-select #select [(ngModel)]=\"selectedValue\" (opened)=\"resetPlaceholder(select)\"\r\n                                floatLabel=\"never\">\r\n                                <mat-option [disabled]=\"selectedYear.includes(sampleRow[dropIndex])\"\r\n                                    *ngFor=\"let yearNames of rowHeader;let dropIndex = index;\"\r\n                                    [value]=\"sampleRow[dropIndex]\">\r\n                                    {{yearNames}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                            <button class=\"reset-drop\" mat-button matSuffix *ngIf=\"selectedValue\" mat-icon-button\r\n                                aria-label=\"Clear\" (click)=\"resetDropdown($event)\">\r\n                                <mat-icon matTooltip=\"Reset\">close</mat-icon>\r\n                            </button>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div id=\"rangeFilter\" class=\"slider-padding\"\r\n                        [matTooltip]=\"selectedValue == undefined ? 'Choose a year in dropdown to filter by range' : ''\"\r\n                        matTooltipPosition=\"above\">\r\n                        <button class=\"range-button\" [disabled]=\"selectedValue == undefined\"\r\n                            [ngClass]=\"{'filtered-button' : buttonLoop.range == rangeSelection}\" mat-stroked-button\r\n                            *ngFor=\"let buttonLoop of priceRangeData\"\r\n                            (click)=\"priceFilter(buttonLoop.min,buttonLoop.max, buttonLoop.range)\">{{buttonLoop.range}}</button>\r\n                    </div>\r\n    \r\n                </div>\r\n            </div>\r\n            <mat-divider class=\"horizontal-gap\" *ngIf=\"filterJson?.rangeFiltering\"></mat-divider>\r\n            <div>\r\n                <button mat-button color=\"warn\" (click)=\"clearFilter()\"\r\n                    [disabled]=\"!selectedYear.length > 0 && selectedValue == undefined\">Clear all filters</button>\r\n            </div>\r\n    \r\n        </mat-menu>\r\n    </div>\r\n    \r\n    <div class=\"filter-holder\">\r\n        <button class=\"filter-button\" mat-stroked-button (click)=\"exportData()\">Export\r\n            <mat-icon class=\"filter-icon\">file_download</mat-icon>\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"table-container\" [ngClass]=\"{'table-height': stickHeader}\">\r\n    <table class=\"table-size\"\r\n        [ngClass]=\"{ 'sticky-first' : isFirstSticky , 'non-sticky' : !isFirstSticky ,  'sticky-last': isLastSticky}\"\r\n        cellspacing=\"0\" cellpadding=\"5\">\r\n        <thead class=\"header-align row-text-design\" [ngClass]=\"{'header-stick': stickHeader}\" id=\"head-item\">\r\n            <th resize id=\"resizeHeader\" *ngIf=\"resizeColumn\" class=\"category-design\"> Category\r\n                <span *ngIf=\"filterJson?.showSorting\" [appSort]=\"tableItems\" data-order=\"desc\" data-name=\"name\"\r\n                    class=\"sort-icon\" (sortDetailsEvent)=\"getSortOrderDetails($event)\">\r\n                    <mat-icon *ngIf=\"(orderType == '' || columnName !== 'name')\" class=\"hide icon-design\">sort\r\n                    </mat-icon>\r\n                    <ng-container *ngIf=\"columnName == 'name'\">\r\n                        <mat-icon *ngIf=\"(orderType == 'desc' && columnName == 'name')\" class=\"icon-design\"\r\n                            title=\"High to Low\">south</mat-icon>\r\n                        <mat-icon *ngIf=\"(orderType == 'asc' && columnName == 'name')\" class=\"icon-design\"\r\n                            title=\"Low to High\">north</mat-icon>\r\n                        <mat-icon\r\n                            *ngIf=\"((orderType == 'asc' && columnName == 'name') || (orderType == 'desc' && columnName == 'name'))\"\r\n                            class=\"close icon-design\" (click)=\"restFilter()\" title=\"Reset Filter\">close</mat-icon>\r\n                    </ng-container>\r\n                </span>\r\n            </th>\r\n            <th *ngIf=\"!resizeColumn\" class=\"category-design\"> Category\r\n                <span *ngIf=\"filterJson?.showSorting\" [appSort]=\"tableItems\" data-order=\"desc\" data-name=\"name\"\r\n                    class=\"sort-icon\" (sortDetailsEvent)=\"getSortOrderDetails($event)\">\r\n                    <mat-icon *ngIf=\"(orderType == '' || columnName !== 'name')\" class=\"hide icon-design\">sort\r\n                    </mat-icon>\r\n                    <ng-container *ngIf=\"columnName == 'name'\">\r\n                        <mat-icon *ngIf=\"(orderType == 'desc' && columnName == 'name')\" class=\"icon-design\"\r\n                            title=\"High to Low\">south</mat-icon>\r\n                        <mat-icon *ngIf=\"(orderType == 'asc' && columnName == 'name')\" class=\"icon-design\"\r\n                            title=\"Low to High\">north</mat-icon>\r\n                        <mat-icon\r\n                            *ngIf=\"((orderType == 'asc' && columnName == 'name') || (orderType == 'desc' && columnName == 'name'))\"\r\n                            class=\"close icon-design\" (click)=\"restFilter()\" title=\"Reset Filter\">close</mat-icon>\r\n                    </ng-container>\r\n                </span>\r\n            </th>\r\n            <ng-container *ngFor=\"let yearHeader of rowHeader;let i = index;\">\r\n                <ng-container *ngIf=\"!resizeColumn\">\r\n                    <th *ngIf=\"!selectedYear.includes(sampleRow[i])\"> {{yearHeader}}\r\n                        <span *ngIf=\"filterJson?.showSorting\" [appSort]=\"tableItems\" data-order=\"desc\"\r\n                            [attr.data-name]=\"sampleRow[i]\" class=\"sort-icon\"\r\n                            (sortDetailsEvent)=\"getSortOrderDetails($event)\">\r\n                            <mat-icon *ngIf=\"(orderType == '' || columnName !== sampleRow[i])\" class=\"hide icon-design\">\r\n                                sort</mat-icon>\r\n                            <ng-container *ngIf=\"columnName == sampleRow[i]\">\r\n                                <mat-icon *ngIf=\"(orderType == 'desc' && columnName == sampleRow[i])\"\r\n                                    class=\"icon-design\" title=\"High to Low\">south</mat-icon>\r\n                                <mat-icon *ngIf=\"(orderType == 'asc' && columnName == sampleRow[i])\" class=\"icon-design\"\r\n                                    title=\"Low to High\">north</mat-icon>\r\n                                <mat-icon\r\n                                    *ngIf=\"((orderType == 'asc' && columnName == sampleRow[i]) || (orderType == 'desc' && columnName == sampleRow[i]))\"\r\n                                    class=\"close icon-design\" (click)=\"restFilter()\" title=\"Reset Filter\">close\r\n                                </mat-icon>\r\n                            </ng-container>\r\n                        </span>\r\n                    </th>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"resizeColumn\">\r\n                    <th resize id=\"resizeHeader\" *ngIf=\"!selectedYear.includes(sampleRow[i])\"> {{yearHeader}}\r\n                        <span *ngIf=\"filterJson?.showSorting\" [appSort]=\"tableItems\" data-order=\"desc\"\r\n                            [attr.data-name]=\"sampleRow[i]\" class=\"sort-icon\"\r\n                            (sortDetailsEvent)=\"getSortOrderDetails($event)\">\r\n                            <mat-icon *ngIf=\"(orderType == '' || columnName !== sampleRow[i])\" class=\"hide icon-design\">\r\n                                sort</mat-icon>\r\n                            <ng-container *ngIf=\"columnName == sampleRow[i]\">\r\n                                <mat-icon *ngIf=\"(orderType == 'desc' && columnName == sampleRow[i])\"\r\n                                    class=\"icon-design\" title=\"High to Low\">south</mat-icon>\r\n                                <mat-icon *ngIf=\"(orderType == 'asc' && columnName == sampleRow[i])\" class=\"icon-design\"\r\n                                    title=\"Low to High\">north</mat-icon>\r\n                                <mat-icon\r\n                                    *ngIf=\"((orderType == 'asc' && columnName == sampleRow[i]) || (orderType == 'desc' && columnName == sampleRow[i]))\"\r\n                                    class=\"close icon-design\" (click)=\"restFilter()\" title=\"Reset Filter\">close\r\n                                </mat-icon>\r\n                            </ng-container>\r\n                        </span>\r\n                    </th>\r\n                </ng-container>\r\n            </ng-container>\r\n            <th>Total</th>\r\n        </thead>\r\n        <ng-container *ngTemplateOutlet=\"recursiveListTmpl; context:{ list: tableItems }\"></ng-container>\r\n\r\n        <ng-container *ngFor=\"let lastData of lastRowData;let i = index;\">\r\n            <tr id=\"lastRow\" class=\"row-text-design\">\r\n                <td>\r\n                    {{lastData.name}}\r\n                </td>\r\n\r\n                <ng-container *ngFor=\"let parentYears of duration\">\r\n                    <td *ngIf=\"!selectedYear.includes('y'+parentYears) \"> {{lastData['y'+parentYears]}} </td>\r\n                </ng-container>\r\n                <td> {{lastData.total}} </td>\r\n            </tr>\r\n        </ng-container>\r\n    </table>\r\n\r\n    <ng-template #recursiveListTmpl let-itemLoop=\"list\">\r\n        <ng-container *ngFor=\"let item of itemLoop | priceRange : selectedValue : minAmountRange : maxAmountRange\">\r\n            <tr id=\"recursiveContainer\" (click)=\"expandRow(item)\" [ngClass]=\"{'sub-items-holder' : item.index >= 3}\">\r\n                <td  [ngClass]=\"{'sub-items-holder' : item.index >= 3}\"\r\n                    [style.padding-left]=\"item.index*20+'px'\"> <mat-checkbox *ngIf=\"filterJson?.rowSelection\"\r\n                    (click)=\"resetClick()\" \r\n                    (change)=\"exportSelect(item, $event.checked)\"\r\n                    [indeterminate]=\"someComplete(item)\"\r\n                    [checked]=\"item.checked\"\r\n                    [ngStyle]=\"{'color': '#75003'}\" class=\"select-row\"></mat-checkbox>\r\n                    <span class=\"more-less-icon\"\r\n                        *ngIf=\"item?.subitems?.length > 0\">{{ item.expansion ? '\u268A' : '\u271A'}}</span> {{ item.name }} </td>\r\n                <ng-container *ngFor=\"let parentYears of duration\">\r\n                    <td  class=\"data-edit\"\r\n                        [ngClass]=\"{'edit-hover' : editFields, 'sub-items-holder' : item.index >= 3}\"\r\n                        *ngIf=\"!selectedYear.includes('y'+parentYears) \">\r\n                        <mat-form-field>\r\n                            <input matInput (click)=\"resetClick()\" [(ngModel)]=\"item['y'+parentYears]\"\r\n                                (focus)=\"stopFocus()\"\r\n                                (input)=\"onSearchChange($event.target.value, item['y'+parentYears])\"\r\n                                [disabled]=\"((clickedYear !== 'y'+parentYears) || (item.name !== clickedName))\"\r\n                                [value]=\"item['y'+parentYears]\">\r\n                        </mat-form-field>\r\n                        <ng-container *ngIf=\"editFields\">\r\n                            <mat-icon *ngIf=\"((clickedYear !== 'y'+parentYears) || (item.name !== clickedName))\"\r\n                                class=\"icon-design edit-icon\"\r\n                                (click)=\"editData(item['y'+parentYears],item,parentYears,item.name)\">edit</mat-icon>\r\n                        </ng-container>\r\n                        <mat-icon *ngIf=\"!((clickedYear !== 'y'+parentYears) || (item.name !== clickedName))\"\r\n                            class=\"icon-design save-icon\" title=\"Save\" (click)=\"modifyData(item,parentYears)\">check\r\n                        </mat-icon>\r\n                        <mat-icon *ngIf=\"!((clickedYear !== 'y'+parentYears) || (item.name !== clickedName))\"\r\n                            class=\"icon-design close-icon\" title=\"close\" (click)=\"closeEdit(item,parentYears)\">close\r\n                        </mat-icon>\r\n                    </td>\r\n                </ng-container>\r\n                <td>{{item.total}}</td>\r\n            </tr>\r\n            <ng-container *ngIf=\"item.expansion\" id=\"child\">\r\n                <ng-container *ngTemplateOutlet=\"recursiveListTmpl; context:{ list: item?.subitems }\"></ng-container>\r\n            </ng-container>\r\n        </ng-container>\r\n        <!-- <div *ngIf=\"(itemLoop | priceRange : selectedValue : minAmountRange : maxAmountRange).length === 0\" \r\n               class=\"no-data\">No Item Matches your Filter...</div> -->\r\n    </ng-template>\r\n</div>",
                    encapsulation: i0.ViewEncapsulation.None,
                    styles: ["tr>td:last-of-type{background-color:#e6dcff;padding-left:1rem}tr:not(:last-child){cursor:pointer;box-shadow:0 1px 1px -2px rgba(0,0,0,.2),0 1px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);height:4.75rem;background-color:#fff}.table-container{overflow:auto;width:100%;width:95%;margin:2rem 2rem 0}table{table-layout:fixed;width:100%}.sticky-first td:first-child,.sticky-first th:first-child{position:sticky;left:0;z-index:2;background-color:#fff;box-shadow:0 1px 1px -2px rgba(0,0,0,.2),0 1px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);width:250px}.non-sticky td:first-child,.non-sticky th:first-child{width:250px}.sticky-last td:last-child,.sticky-last th:last-child{position:sticky;right:0;z-index:2;box-shadow:0 1px 1px -2px rgba(0,0,0,.2),0 1px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);width:250px}.sticky-last th:last-child{background-color:#460073}th:last-child{padding-left:1rem}thead tr th{position:sticky;top:0}tr:last-child{background-color:#e6dcff;height:4.75rem}tr:last-child td{background-color:#e6dcff;font-weight:600;font-size:1.2rem}tr:last-child td:last-child{background-color:#7500c0;color:#fff;font-weight:600;font-size:1.2rem;padding-left:1rem}.header-align{text-align:left;background:#460073;color:#fff;height:3.75rem}#lastRow td:first-child{background-color:#e6dcff}#head-item .category-design{background:#460073;padding:1rem}.more-less-icon{color:#004dff}#recursiveContainer .sub-items-holder{background-color:#e6e6dc}.table-size{width:100%;position:relative}.row-text-design td{color:#000;font-size:1.08rem;font-weight:400}.row-text-design th{font-size:1.08rem;font-weight:600}.row-text-design td:not(:first-child),.row-text-design th:not(:first-child){width:150px}td:nth-child(2),th:nth-child(2){padding-left:1.2rem}tr td:first-child{padding:1rem}tr td:last-child{font-weight:400}.close{font-size:.85rem}#head-item .hide,.close{font-style:normal;cursor:pointer}#head-item .hide{display:none;margin-left:10px}#head-item .sort-icon{display:inline-block;width:5rem;height:.75rem}#head-item .sort-icon:hover>.hide{display:block;cursor:pointer}#recursiveContainer .data-edit:hover>.edit-icon{display:inline-block}#recursiveContainer .edit-icon{display:none;color:#7500c0}.save-icon{color:#09cc09}.close-icon{color:#be0101}.icon-design{font-size:16px;position:relative;top:2px;cursor:pointer}th#resizeHeader:hover{background-color:#7500c0}th:hover .hide{display:block;cursor:pointer}.data-edit mat-form-field{width:100px}.mat-form-field-disabled .mat-form-field-underline{display:none}.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix:after,.mat-input-element:disabled{color:#000}.header-stick{position:sticky;top:0;z-index:5}.table-height{height:350px}.edit-hover:hover{border:1px solid #7500c0}.button-align{display:flex;justify-content:space-between}.button-end{display:flex;justify-content:end}.filter-boxes{display:flex;margin:1rem;flex-wrap:wrap}.filter-boxes .mat-checkbox-frame{border-color:#7500c0}.mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03;background-color:#7500c0}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#7500c0}.filter-holder{margin:2rem}.filter-holder .filter-button{border-radius:0}.filter-holder .filter-icon{color:#7500c0;font-size:22px;margin-left:.75rem}.mat-menu-panel.filter-menu-layout{max-width:33rem;border-radius:0}.move-checkbox{margin-left:1rem}.hide-holder{display:flex}.hide-holder .hide-filter-text-holder{display:flex;align-items:center;margin:1rem;min-width:8rem;justify-content:center}.hide-holder .hide-filter-text-holder .hide-show-text{font-weight:400;color:#6c6c6c}.horizontal-gap{margin-bottom:.5rem;margin-top:.5rem}.slider-padding{margin:1rem;display:flex;flex-wrap:wrap}.slider-padding .slider-gap{margin-left:1rem}#rangeFilter .range-button{border-radius:0;min-width:5rem;width:8rem;margin-left:10px;margin-bottom:10px}.filtered-button{background-color:#7500c0;color:#fff}.panel-title{font-size:1rem;color:#000;font-weight:500}.title-container{padding:1rem 1rem 0;border-bottom:4px solid #a100ff}.input_type_wrap .mat-form-field-flex{background:#fff 0 0 no-repeat padding-box;color:#000;border-radius:0;box-shadow:0 1px 5px rgba(158,164,186,.2);padding:0}.input_type_wrap .mat-form-field-infix{padding-top:0;padding-bottom:0}.input_type_wrap .mat-form-field-underline{display:none}.input_type_wrap .mat-select-value{padding-left:1rem;padding-bottom:.5rem}.input_type_wrap .mat-select-arrow{margin-bottom:.5rem!important}.input_type_wrap mat-form-field{width:150px!important}.filter-input{display:inline-flex;justify-content:center;flex-direction:column;align-items:center;margin-left:1.5rem}.label-text{color:#000;font-weight:500;margin-bottom:.25rem}.reset-drop mat-icon{margin-bottom:3px}th:first-child .wrapper .bar{margin-right:-16px}.no-data{display:flex;justify-content:center;min-width:65rem;padding:2rem 2rem 2rem 3rem;font-size:1.2rem}.select-row{margin-right:.5rem}"]
                },] }
    ];
    LibProfitlossComponent.ctorParameters = function () { return [
        { type: NewLibDemoService }
    ]; };
    LibProfitlossComponent.propDecorators = {
        tableItems: [{ type: i0.Input }],
        numberOfDuration: [{ type: i0.Input }],
        headerName: [{ type: i0.Input }],
        lastRowData: [{ type: i0.Input }],
        isFirstSticky: [{ type: i0.Input }],
        isLastSticky: [{ type: i0.Input }],
        editFields: [{ type: i0.Input }],
        stickHeader: [{ type: i0.Input }],
        filterJson: [{ type: i0.Input }],
        resizeColumn: [{ type: i0.Input }],
        notifyDataChange: [{ type: i0.Output }],
        priceRangeData: [{ type: i0.Input }]
    };

    var Sort = /** @class */ (function () {
        function Sort() {
            this.sortOrder = 1;
            this.collator = new Intl.Collator(undefined, {
                numeric: true,
                sensitivity: "base",
            });
        }
        Sort.prototype.startSort = function (property, order, type) {
            var _this = this;
            if (type === void 0) { type = ""; }
            if (order === "desc") {
                this.sortOrder = -1;
            }
            return function (a, b) {
                if (a.hasOwnProperty('subitems')) {
                    _this.recursiveSort(a['subitems'], property, order);
                }
                if (b.hasOwnProperty('subitems')) {
                    _this.recursiveSort(a['subitems'], property, order);
                }
                return _this.collator.compare(a[property], b[property]) * _this.sortOrder;
            };
        };
        Sort.prototype.recursiveSort = function (listToSort, sortingProperty, sortOrder) {
            var _this = this;
            sortOrder == 'asc' ? listToSort.sort(function (firstBSubitem, secondfBSubitem) { return firstBSubitem[sortingProperty] - secondfBSubitem[sortingProperty]; })
                : listToSort.sort(function (descFirstItem, descsecondItem) { return descsecondItem[sortingProperty] - descFirstItem[sortingProperty]; });
            if (listToSort.length > 0) {
                listToSort.map(function (listSort) {
                    if (listSort.hasOwnProperty('subitems')) {
                        _this.recursiveSort(listSort['subitems'], sortingProperty, sortOrder);
                    }
                });
            }
        };
        return Sort;
    }());

    var SortDirective = /** @class */ (function () {
        function SortDirective(renderer, targetElem) {
            this.renderer = renderer;
            this.targetElem = targetElem;
            this.sortDetailsEvent = new i0.EventEmitter();
        }
        SortDirective.prototype.sortData = function () {
            // Create Object of Sort Class
            var sort = new Sort();
            // Get Reference Of Current Clicked Element
            var elem = this.targetElem.nativeElement;
            // Get In WHich Order list should be sorted by default it should be set to desc on element attribute
            var order = elem.getAttribute("data-order");
            // Get The Property Type specially set [data-type=date] if it is date field
            var type = elem.getAttribute("data-type");
            // Get The Property Name from Element Attribute
            var property = elem.getAttribute("data-name");
            if (order === "desc") {
                this.appSort.sort(sort.startSort(property, order, type));
                elem.setAttribute("data-order", "asc");
            }
            else {
                this.appSort.sort(sort.startSort(property, order, type));
                elem.setAttribute("data-order", "desc");
            }
            console.log(property, order, type);
            this.sortDetailsEvent.emit({ property: property, order: order, type: type });
        };
        return SortDirective;
    }());
    SortDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[appSort]'
                },] }
    ];
    SortDirective.ctorParameters = function () { return [
        { type: i0.Renderer2 },
        { type: i0.ElementRef }
    ]; };
    SortDirective.propDecorators = {
        appSort: [{ type: i0.Input }],
        sortDetailsEvent: [{ type: i0.Output }],
        sortData: [{ type: i0.HostListener, args: ["click",] }]
    };

    var modules = [
        table.CdkTableModule,
        autocomplete.MatAutocompleteModule,
        badge.MatBadgeModule,
        bottomSheet.MatBottomSheetModule,
        button.MatButtonModule,
        buttonToggle.MatButtonToggleModule,
        card.MatCardModule,
        checkbox.MatCheckboxModule,
        chips.MatChipsModule,
        stepper.MatStepperModule,
        datepicker.MatDatepickerModule,
        dialog.MatDialogModule,
        divider.MatDividerModule,
        expansion.MatExpansionModule,
        gridList.MatGridListModule,
        icon.MatIconModule,
        input.MatInputModule,
        list.MatListModule,
        menu.MatMenuModule,
        core.MatNativeDateModule,
        paginator.MatPaginatorModule,
        progressBar.MatProgressBarModule,
        progressSpinner.MatProgressSpinnerModule,
        radio.MatRadioModule,
        select.MatSelectModule,
        core.MatRippleModule,
        select.MatSelectModule,
        sidenav.MatSidenavModule,
        slider.MatSliderModule,
        slideToggle.MatSlideToggleModule,
        snackBar.MatSnackBarModule,
        sort.MatSortModule,
        table$1.MatTableModule,
        tabs.MatTabsModule,
        toolbar.MatToolbarModule,
        tooltip.MatTooltipModule,
        formField.MatFormFieldModule,
        progressBar.MatProgressBarModule
    ];
    var ɵ0 = { verticalPosition: 'top', horizontalPosition: 'left' };
    var MaterialModule = /** @class */ (function () {
        function MaterialModule() {
        }
        return MaterialModule;
    }());
    MaterialModule.decorators = [
        { type: i0.NgModule, args: [{
                    imports: [modules],
                    exports: [modules],
                    providers: [
                        { provide: snackBar.MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: ɵ0 }
                    ]
                },] }
    ];

    var PricerangePipe = /** @class */ (function () {
        function PricerangePipe() {
            this.searchedItems = [];
        }
        PricerangePipe.prototype.transform = function (value, columnName, minValue, maxValue, deepSearch) {
            if (deepSearch === void 0) { deepSearch = false; }
            // if (!deepSearch) {
            if (minValue !== undefined && maxValue !== undefined && columnName !== undefined) {
                if (typeof (maxValue) !== "string") {
                    console.log(columnName, minValue, maxValue);
                    var validatedData = void 0;
                    validatedData = value.filter(function (itemList) {
                        return Number(itemList[columnName]) >= minValue && Number(itemList[columnName]) < maxValue;
                    });
                    return validatedData;
                }
                else {
                    return value.filter(function (itemList) { return Number(itemList[columnName]) >= minValue; });
                }
            }
            else {
                return value;
            }
        };
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
        PricerangePipe.prototype.searchRecursive = function (value) {
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
        };
        return PricerangePipe;
    }());
    PricerangePipe.decorators = [
        { type: i0.Pipe, args: [{
                    name: 'priceRange'
                },] }
    ];

    var ResizeComponent = /** @class */ (function () {
        function ResizeComponent() {
            this.width = null;
        }
        ResizeComponent.prototype.onResize = function (width) {
            if (this.className !== undefined) {
                if (this.className == 'category-design') {
                    width <= 250 ? this.width = 250 : this.width = width;
                }
                else {
                    width <= 150 ? this.width = 150 : this.width = width;
                }
            }
            else {
                width <= 150 ? this.width = 150 : this.width = width;
            }
            // this.width = width;
        };
        ResizeComponent.prototype.getClassData = function (className) {
            this.className = className['classIdentifier'];
            // if(className !== undefined && className['classIdentifier'] == 'category-design'){
            //   console.log('IF',className['classIdentifier'],this.tempWidth);
            //   this.tempWidth < 250 ? this.width = 250 : this.width = this.tempWidth
            // }
        };
        return ResizeComponent;
    }());
    ResizeComponent.decorators = [
        { type: i0.Component, args: [{
                    selector: 'th[resize]',
                    template: "<div class=\"wrapper\">\r\n\t<div class=\"content\">\r\n\t\t<ng-content></ng-content>\r\n\t</div>\r\n\t<div class=\"bar\" (resize)=\"onResize($event)\" (expansionDetails)=\"getClassData($event)\"></div>\r\n</div>",
                    styles: [".wrapper{display:flex;justify-content:flex-end}.content{flex:1}.bar{position:absolute;top:0;bottom:0;width:2px;height:60px;margin-right:-8px;justify-self:flex-end;border-left:2px solid transparent;border-right:2px solid transparent;background-clip:content-box;cursor:ew-resize;opacity:0;transition:opacity .3s}.bar:active,.bar:hover{opacity:1}"]
                },] }
    ];
    ResizeComponent.propDecorators = {
        width: [{ type: i0.HostBinding, args: ["style.width.px",] }]
    };

    var ResizableDirective = /** @class */ (function () {
        function ResizableDirective(documentRef, elementRef) {
            var _this = this;
            this.elementRef = elementRef;
            this.expansionDetails = new i0.EventEmitter();
            this.resize = rxjs.fromEvent(this.elementRef.nativeElement, "mousedown").pipe(operators.tap(function (e) { return e.preventDefault(); }), operators.switchMap(function () {
                var _a = _this.elementRef.nativeElement
                    .closest("th")
                    .getBoundingClientRect(), width = _a.width, right = _a.right;
                console.log('right', _this.elementRef.nativeElement.closest("th").classList);
                _this.expansionDetails.emit({ classIdentifier: _this.elementRef.nativeElement.closest("th").classList[0] });
                return rxjs.fromEvent(_this._document, "mousemove").pipe(operators.map(function (_a) {
                    var clientX = _a.clientX;
                    return width + clientX - right;
                }), operators.distinctUntilChanged(), operators.takeUntil(rxjs.fromEvent(_this._document, "mouseup")));
            }));
            this._document = documentRef;
        }
        return ResizableDirective;
    }());
    ResizableDirective.decorators = [
        { type: i0.Directive, args: [{
                    selector: '[resize]'
                },] }
    ];
    ResizableDirective.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: i0.Inject, args: [i1.DOCUMENT,] }] },
        { type: i0.ElementRef, decorators: [{ type: i0.Inject, args: [i0.ElementRef,] }] }
    ]; };
    ResizableDirective.propDecorators = {
        expansionDetails: [{ type: i0.Output }],
        resize: [{ type: i0.Output }]
    };

    var ResizableModule = /** @class */ (function () {
        function ResizableModule() {
        }
        return ResizableModule;
    }());
    ResizableModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [ResizeComponent, ResizableDirective],
                    exports: [ResizeComponent],
                },] }
    ];

    var NewLibDemoModule = /** @class */ (function () {
        function NewLibDemoModule() {
        }
        return NewLibDemoModule;
    }());
    NewLibDemoModule.decorators = [
        { type: i0.NgModule, args: [{
                    declarations: [
                        NewLibDemoComponent,
                        LibProfitlossComponent,
                        SortDirective,
                        PricerangePipe
                    ],
                    imports: [
                        platformBrowser.BrowserModule,
                        i1.CommonModule,
                        forms.FormsModule,
                        MaterialModule,
                        ResizableModule
                    ],
                    providers: [i1.DatePipe],
                    exports: [
                        NewLibDemoComponent,
                        LibProfitlossComponent
                    ]
                },] }
    ];

    /*
     * Public API Surface of new-lib-demo
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.LibProfitlossComponent = LibProfitlossComponent;
    exports.NewLibDemoComponent = NewLibDemoComponent;
    exports.NewLibDemoModule = NewLibDemoModule;
    exports.NewLibDemoService = NewLibDemoService;
    exports.SortDirective = SortDirective;
    exports.ɵa = PricerangePipe;
    exports.ɵb = MaterialModule;
    exports.ɵc = ResizableModule;
    exports.ɵd = ResizeComponent;
    exports.ɵe = ResizableDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=new-lib-demo.umd.js.map
