import { __awaiter } from 'tslib';
import { DatePipe, DOCUMENT, CommonModule } from '@angular/common';
import { ɵɵdefineInjectable, ɵɵinject, Injectable, Component, EventEmitter, ViewEncapsulation, Input, Output, Directive, Renderer2, ElementRef, HostListener, NgModule, Pipe, HostBinding, Inject } from '@angular/core';
import { Workbook } from 'exceljs';
import { saveAs } from 'file-saver';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CdkTableModule } from '@angular/cdk/table';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule, MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { tap, switchMap, map, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

import * as ɵngcc0 from '@angular/core';
import * as ɵngcc1 from '@angular/common';
import * as ɵngcc2 from '@angular/material/button';
import * as ɵngcc3 from '@angular/material/icon';
import * as ɵngcc4 from '@angular/material/menu';
import * as ɵngcc5 from '@angular/material/divider';
import * as ɵngcc6 from '@angular/material/checkbox';
import * as ɵngcc7 from '@angular/material/form-field';
import * as ɵngcc8 from '@angular/material/select';
import * as ɵngcc9 from '@angular/forms';
import * as ɵngcc10 from '@angular/material/tooltip';
import * as ɵngcc11 from '@angular/material/core';
import * as ɵngcc12 from '@angular/material/input';

const _c0 = function () { return { "color": "#75003" }; };
function LibProfitlossComponent_div_1_div_10_mat_checkbox_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-checkbox", 26);
    ɵngcc0.ɵɵlistener("change", function LibProfitlossComponent_div_1_div_10_mat_checkbox_6_Template_mat_checkbox_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r17); const yearNames_r14 = ctx.$implicit; const yearIndex_r15 = ctx.index; const ctx_r16 = ɵngcc0.ɵɵnextContext(3); return ctx_r16.valueChange(yearNames_r14, $event, yearIndex_r15); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const yearNames_r14 = ctx.$implicit;
    const yearIndex_r15 = ctx.index;
    const ctx_r13 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("checked", ctx_r13.selectedYear.includes(ctx_r13.sampleRow[yearIndex_r15]))("ngStyle", ɵngcc0.ɵɵpureFunction0(3, _c0));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", yearNames_r14, " ");
} }
function LibProfitlossComponent_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "div", 20);
    ɵngcc0.ɵɵelementStart(1, "div", 21);
    ɵngcc0.ɵɵelementStart(2, "p", 22);
    ɵngcc0.ɵɵtext(3, "Hide/Show");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(4, "mat-divider", 23);
    ɵngcc0.ɵɵelementStart(5, "div", 24);
    ɵngcc0.ɵɵlistener("click", function LibProfitlossComponent_div_1_div_10_Template_div_click_5_listener($event) { return $event.stopPropagation(); });
    ɵngcc0.ɵɵtemplate(6, LibProfitlossComponent_div_1_div_10_mat_checkbox_6_Template, 2, 4, "mat-checkbox", 25);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("vertical", true);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r9.rowHeader);
} }
function LibProfitlossComponent_div_1_mat_divider_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "mat-divider", 27);
} }
function LibProfitlossComponent_div_1_div_12_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-option", 38);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const yearNames_r23 = ctx.$implicit;
    const dropIndex_r24 = ctx.index;
    const ctx_r20 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("disabled", ctx_r20.selectedYear.includes(ctx_r20.sampleRow[dropIndex_r24]))("value", ctx_r20.sampleRow[dropIndex_r24]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", yearNames_r23, " ");
} }
function LibProfitlossComponent_div_1_div_12_button_13_Template(rf, ctx) { if (rf & 1) {
    const _r26 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 39);
    ɵngcc0.ɵɵlistener("click", function LibProfitlossComponent_div_1_div_12_button_13_Template_button_click_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r26); const ctx_r25 = ɵngcc0.ɵɵnextContext(3); return ctx_r25.resetDropdown($event); });
    ɵngcc0.ɵɵelementStart(1, "mat-icon", 40);
    ɵngcc0.ɵɵtext(2, "close");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} }
const _c1 = function (a0) { return { "filtered-button": a0 }; };
function LibProfitlossComponent_div_1_div_12_button_15_Template(rf, ctx) { if (rf & 1) {
    const _r29 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "button", 41);
    ɵngcc0.ɵɵlistener("click", function LibProfitlossComponent_div_1_div_12_button_15_Template_button_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r29); const buttonLoop_r27 = ctx.$implicit; const ctx_r28 = ɵngcc0.ɵɵnextContext(3); return ctx_r28.priceFilter(buttonLoop_r27.min, buttonLoop_r27.max, buttonLoop_r27.range); });
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const buttonLoop_r27 = ctx.$implicit;
    const ctx_r22 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵproperty("disabled", ctx_r22.selectedValue == undefined)("ngClass", ɵngcc0.ɵɵpureFunction1(3, _c1, buttonLoop_r27.range == ctx_r22.rangeSelection));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(buttonLoop_r27.range);
} }
function LibProfitlossComponent_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r32 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 20);
    ɵngcc0.ɵɵelementStart(1, "div", 21);
    ɵngcc0.ɵɵelementStart(2, "p", 22);
    ɵngcc0.ɵɵtext(3, "Range");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelement(4, "mat-divider", 23);
    ɵngcc0.ɵɵelementStart(5, "div", 28);
    ɵngcc0.ɵɵlistener("click", function LibProfitlossComponent_div_1_div_12_Template_div_click_5_listener($event) { return $event.stopPropagation(); });
    ɵngcc0.ɵɵelementStart(6, "div", 29);
    ɵngcc0.ɵɵelementStart(7, "label", 30);
    ɵngcc0.ɵɵtext(8, "Choose Year to Filter by Range");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(9, "mat-form-field", 31);
    ɵngcc0.ɵɵelementStart(10, "mat-select", 32, 33);
    ɵngcc0.ɵɵlistener("ngModelChange", function LibProfitlossComponent_div_1_div_12_Template_mat_select_ngModelChange_10_listener($event) { ɵngcc0.ɵɵrestoreView(_r32); const ctx_r31 = ɵngcc0.ɵɵnextContext(2); return ctx_r31.selectedValue = $event; })("opened", function LibProfitlossComponent_div_1_div_12_Template_mat_select_opened_10_listener() { ɵngcc0.ɵɵrestoreView(_r32); const _r19 = ɵngcc0.ɵɵreference(11); const ctx_r33 = ɵngcc0.ɵɵnextContext(2); return ctx_r33.resetPlaceholder(_r19); });
    ɵngcc0.ɵɵtemplate(12, LibProfitlossComponent_div_1_div_12_mat_option_12_Template, 2, 3, "mat-option", 34);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(13, LibProfitlossComponent_div_1_div_12_button_13_Template, 3, 0, "button", 35);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(14, "div", 36);
    ɵngcc0.ɵɵtemplate(15, LibProfitlossComponent_div_1_div_12_button_15_Template, 2, 5, "button", 37);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r11 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵproperty("vertical", true);
    ɵngcc0.ɵɵadvance(6);
    ɵngcc0.ɵɵproperty("ngModel", ctx_r11.selectedValue);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r11.rowHeader);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r11.selectedValue);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("matTooltip", ctx_r11.selectedValue == undefined ? "Choose a year in dropdown to filter by range" : "");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r11.priceRangeData);
} }
function LibProfitlossComponent_div_1_mat_divider_13_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelement(0, "mat-divider", 27);
} }
function LibProfitlossComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "div", 2);
    ɵngcc0.ɵɵelementStart(1, "button", 13);
    ɵngcc0.ɵɵtext(2, "Filter ");
    ɵngcc0.ɵɵelementStart(3, "mat-icon", 4);
    ɵngcc0.ɵɵtext(4, "filter_list");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementStart(5, "mat-menu", null, 14);
    ɵngcc0.ɵɵelementStart(7, "div", 15);
    ɵngcc0.ɵɵelementStart(8, "p", 16);
    ɵngcc0.ɵɵtext(9, "Filter By");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(10, LibProfitlossComponent_div_1_div_10_Template, 7, 2, "div", 17);
    ɵngcc0.ɵɵtemplate(11, LibProfitlossComponent_div_1_mat_divider_11_Template, 1, 0, "mat-divider", 18);
    ɵngcc0.ɵɵtemplate(12, LibProfitlossComponent_div_1_div_12_Template, 16, 6, "div", 17);
    ɵngcc0.ɵɵtemplate(13, LibProfitlossComponent_div_1_mat_divider_13_Template, 1, 0, "mat-divider", 18);
    ɵngcc0.ɵɵelementStart(14, "div");
    ɵngcc0.ɵɵelementStart(15, "button", 19);
    ɵngcc0.ɵɵlistener("click", function LibProfitlossComponent_div_1_Template_button_click_15_listener() { ɵngcc0.ɵɵrestoreView(_r35); const ctx_r34 = ɵngcc0.ɵɵnextContext(); return ctx_r34.clearFilter(); });
    ɵngcc0.ɵɵtext(16, "Clear all filters");
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const _r8 = ɵngcc0.ɵɵreference(6);
    const ctx_r0 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("matMenuTriggerFor", _r8);
    ɵngcc0.ɵɵadvance(4);
    ɵngcc0.ɵɵclassMap("filter-menu-layout");
    ɵngcc0.ɵɵadvance(5);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.filterJson == null ? null : ctx_r0.filterJson.hideShowFiltering);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.filterJson == null ? null : ctx_r0.filterJson.hideShowFiltering);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.filterJson == null ? null : ctx_r0.filterJson.rangeFiltering);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r0.filterJson == null ? null : ctx_r0.filterJson.rangeFiltering);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("disabled", !ctx_r0.selectedYear.length > 0 && ctx_r0.selectedValue == undefined);
} }
function LibProfitlossComponent_th_10_span_2_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 47);
    ɵngcc0.ɵɵtext(1, "sort ");
    ɵngcc0.ɵɵelementEnd();
} }
function LibProfitlossComponent_th_10_span_2_ng_container_2_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 51);
    ɵngcc0.ɵɵtext(1, "south");
    ɵngcc0.ɵɵelementEnd();
} }
function LibProfitlossComponent_th_10_span_2_ng_container_2_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 52);
    ɵngcc0.ɵɵtext(1, "north");
    ɵngcc0.ɵɵelementEnd();
} }
function LibProfitlossComponent_th_10_span_2_ng_container_2_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r43 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 53);
    ɵngcc0.ɵɵlistener("click", function LibProfitlossComponent_th_10_span_2_ng_container_2_mat_icon_3_Template_mat_icon_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r43); const ctx_r42 = ɵngcc0.ɵɵnextContext(4); return ctx_r42.restFilter(); });
    ɵngcc0.ɵɵtext(1, "close");
    ɵngcc0.ɵɵelementEnd();
} }
function LibProfitlossComponent_th_10_span_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, LibProfitlossComponent_th_10_span_2_ng_container_2_mat_icon_1_Template, 2, 0, "mat-icon", 48);
    ɵngcc0.ɵɵtemplate(2, LibProfitlossComponent_th_10_span_2_ng_container_2_mat_icon_2_Template, 2, 0, "mat-icon", 49);
    ɵngcc0.ɵɵtemplate(3, LibProfitlossComponent_th_10_span_2_ng_container_2_mat_icon_3_Template, 2, 0, "mat-icon", 50);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r38 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r38.orderType == "desc" && ctx_r38.columnName == "name");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r38.orderType == "asc" && ctx_r38.columnName == "name");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r38.orderType == "asc" && ctx_r38.columnName == "name" || ctx_r38.orderType == "desc" && ctx_r38.columnName == "name");
} }
function LibProfitlossComponent_th_10_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r45 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 44);
    ɵngcc0.ɵɵlistener("sortDetailsEvent", function LibProfitlossComponent_th_10_span_2_Template_span_sortDetailsEvent_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r45); const ctx_r44 = ɵngcc0.ɵɵnextContext(2); return ctx_r44.getSortOrderDetails($event); });
    ɵngcc0.ɵɵtemplate(1, LibProfitlossComponent_th_10_span_2_mat_icon_1_Template, 2, 0, "mat-icon", 45);
    ɵngcc0.ɵɵtemplate(2, LibProfitlossComponent_th_10_span_2_ng_container_2_Template, 4, 3, "ng-container", 46);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r36 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("appSort", ctx_r36.tableItems);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r36.orderType == "" || ctx_r36.columnName !== "name");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r36.columnName == "name");
} }
function LibProfitlossComponent_th_10_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 42);
    ɵngcc0.ɵɵtext(1, " Category ");
    ɵngcc0.ɵɵtemplate(2, LibProfitlossComponent_th_10_span_2_Template, 3, 3, "span", 43);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r1.filterJson == null ? null : ctx_r1.filterJson.showSorting);
} }
function LibProfitlossComponent_th_11_span_2_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 47);
    ɵngcc0.ɵɵtext(1, "sort ");
    ɵngcc0.ɵɵelementEnd();
} }
function LibProfitlossComponent_th_11_span_2_ng_container_2_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 51);
    ɵngcc0.ɵɵtext(1, "south");
    ɵngcc0.ɵɵelementEnd();
} }
function LibProfitlossComponent_th_11_span_2_ng_container_2_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 52);
    ɵngcc0.ɵɵtext(1, "north");
    ɵngcc0.ɵɵelementEnd();
} }
function LibProfitlossComponent_th_11_span_2_ng_container_2_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r53 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 53);
    ɵngcc0.ɵɵlistener("click", function LibProfitlossComponent_th_11_span_2_ng_container_2_mat_icon_3_Template_mat_icon_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r53); const ctx_r52 = ɵngcc0.ɵɵnextContext(4); return ctx_r52.restFilter(); });
    ɵngcc0.ɵɵtext(1, "close");
    ɵngcc0.ɵɵelementEnd();
} }
function LibProfitlossComponent_th_11_span_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, LibProfitlossComponent_th_11_span_2_ng_container_2_mat_icon_1_Template, 2, 0, "mat-icon", 48);
    ɵngcc0.ɵɵtemplate(2, LibProfitlossComponent_th_11_span_2_ng_container_2_mat_icon_2_Template, 2, 0, "mat-icon", 49);
    ɵngcc0.ɵɵtemplate(3, LibProfitlossComponent_th_11_span_2_ng_container_2_mat_icon_3_Template, 2, 0, "mat-icon", 50);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r48 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r48.orderType == "desc" && ctx_r48.columnName == "name");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r48.orderType == "asc" && ctx_r48.columnName == "name");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r48.orderType == "asc" && ctx_r48.columnName == "name" || ctx_r48.orderType == "desc" && ctx_r48.columnName == "name");
} }
function LibProfitlossComponent_th_11_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r55 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 44);
    ɵngcc0.ɵɵlistener("sortDetailsEvent", function LibProfitlossComponent_th_11_span_2_Template_span_sortDetailsEvent_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r55); const ctx_r54 = ɵngcc0.ɵɵnextContext(2); return ctx_r54.getSortOrderDetails($event); });
    ɵngcc0.ɵɵtemplate(1, LibProfitlossComponent_th_11_span_2_mat_icon_1_Template, 2, 0, "mat-icon", 45);
    ɵngcc0.ɵɵtemplate(2, LibProfitlossComponent_th_11_span_2_ng_container_2_Template, 4, 3, "ng-container", 46);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r46 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("appSort", ctx_r46.tableItems);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r46.orderType == "" || ctx_r46.columnName !== "name");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r46.columnName == "name");
} }
function LibProfitlossComponent_th_11_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 54);
    ɵngcc0.ɵɵtext(1, " Category ");
    ɵngcc0.ɵɵtemplate(2, LibProfitlossComponent_th_11_span_2_Template, 3, 3, "span", 43);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r2.filterJson == null ? null : ctx_r2.filterJson.showSorting);
} }
function LibProfitlossComponent_ng_container_12_ng_container_1_th_1_span_2_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 47);
    ɵngcc0.ɵɵtext(1, " sort");
    ɵngcc0.ɵɵelementEnd();
} }
function LibProfitlossComponent_ng_container_12_ng_container_1_th_1_span_2_ng_container_2_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 51);
    ɵngcc0.ɵɵtext(1, "south");
    ɵngcc0.ɵɵelementEnd();
} }
function LibProfitlossComponent_ng_container_12_ng_container_1_th_1_span_2_ng_container_2_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 52);
    ɵngcc0.ɵɵtext(1, "north");
    ɵngcc0.ɵɵelementEnd();
} }
function LibProfitlossComponent_ng_container_12_ng_container_1_th_1_span_2_ng_container_2_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r68 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 53);
    ɵngcc0.ɵɵlistener("click", function LibProfitlossComponent_ng_container_12_ng_container_1_th_1_span_2_ng_container_2_mat_icon_3_Template_mat_icon_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r68); const ctx_r67 = ɵngcc0.ɵɵnextContext(6); return ctx_r67.restFilter(); });
    ɵngcc0.ɵɵtext(1, "close ");
    ɵngcc0.ɵɵelementEnd();
} }
function LibProfitlossComponent_ng_container_12_ng_container_1_th_1_span_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, LibProfitlossComponent_ng_container_12_ng_container_1_th_1_span_2_ng_container_2_mat_icon_1_Template, 2, 0, "mat-icon", 48);
    ɵngcc0.ɵɵtemplate(2, LibProfitlossComponent_ng_container_12_ng_container_1_th_1_span_2_ng_container_2_mat_icon_2_Template, 2, 0, "mat-icon", 49);
    ɵngcc0.ɵɵtemplate(3, LibProfitlossComponent_ng_container_12_ng_container_1_th_1_span_2_ng_container_2_mat_icon_3_Template, 2, 0, "mat-icon", 50);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r57 = ɵngcc0.ɵɵnextContext(4).index;
    const ctx_r63 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r63.orderType == "desc" && ctx_r63.columnName == ctx_r63.sampleRow[i_r57]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r63.orderType == "asc" && ctx_r63.columnName == ctx_r63.sampleRow[i_r57]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r63.orderType == "asc" && ctx_r63.columnName == ctx_r63.sampleRow[i_r57] || ctx_r63.orderType == "desc" && ctx_r63.columnName == ctx_r63.sampleRow[i_r57]);
} }
function LibProfitlossComponent_ng_container_12_ng_container_1_th_1_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r71 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 56);
    ɵngcc0.ɵɵlistener("sortDetailsEvent", function LibProfitlossComponent_ng_container_12_ng_container_1_th_1_span_2_Template_span_sortDetailsEvent_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r71); const ctx_r70 = ɵngcc0.ɵɵnextContext(4); return ctx_r70.getSortOrderDetails($event); });
    ɵngcc0.ɵɵtemplate(1, LibProfitlossComponent_ng_container_12_ng_container_1_th_1_span_2_mat_icon_1_Template, 2, 0, "mat-icon", 45);
    ɵngcc0.ɵɵtemplate(2, LibProfitlossComponent_ng_container_12_ng_container_1_th_1_span_2_ng_container_2_Template, 4, 3, "ng-container", 46);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r57 = ɵngcc0.ɵɵnextContext(3).index;
    const ctx_r61 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("appSort", ctx_r61.tableItems);
    ɵngcc0.ɵɵattribute("data-name", ctx_r61.sampleRow[i_r57]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r61.orderType == "" || ctx_r61.columnName !== ctx_r61.sampleRow[i_r57]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r61.columnName == ctx_r61.sampleRow[i_r57]);
} }
function LibProfitlossComponent_ng_container_12_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵtemplate(2, LibProfitlossComponent_ng_container_12_ng_container_1_th_1_span_2_Template, 3, 4, "span", 55);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const yearHeader_r56 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r60 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", yearHeader_r56, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r60.filterJson == null ? null : ctx_r60.filterJson.showSorting);
} }
function LibProfitlossComponent_ng_container_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, LibProfitlossComponent_ng_container_12_ng_container_1_th_1_Template, 3, 2, "th", 46);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r57 = ɵngcc0.ɵɵnextContext().index;
    const ctx_r58 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r58.selectedYear.includes(ctx_r58.sampleRow[i_r57]));
} }
function LibProfitlossComponent_ng_container_12_ng_container_2_th_1_span_2_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 47);
    ɵngcc0.ɵɵtext(1, " sort");
    ɵngcc0.ɵɵelementEnd();
} }
function LibProfitlossComponent_ng_container_12_ng_container_2_th_1_span_2_ng_container_2_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 51);
    ɵngcc0.ɵɵtext(1, "south");
    ɵngcc0.ɵɵelementEnd();
} }
function LibProfitlossComponent_ng_container_12_ng_container_2_th_1_span_2_ng_container_2_mat_icon_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 52);
    ɵngcc0.ɵɵtext(1, "north");
    ɵngcc0.ɵɵelementEnd();
} }
function LibProfitlossComponent_ng_container_12_ng_container_2_th_1_span_2_ng_container_2_mat_icon_3_Template(rf, ctx) { if (rf & 1) {
    const _r83 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 53);
    ɵngcc0.ɵɵlistener("click", function LibProfitlossComponent_ng_container_12_ng_container_2_th_1_span_2_ng_container_2_mat_icon_3_Template_mat_icon_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r83); const ctx_r82 = ɵngcc0.ɵɵnextContext(6); return ctx_r82.restFilter(); });
    ɵngcc0.ɵɵtext(1, "close ");
    ɵngcc0.ɵɵelementEnd();
} }
function LibProfitlossComponent_ng_container_12_ng_container_2_th_1_span_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, LibProfitlossComponent_ng_container_12_ng_container_2_th_1_span_2_ng_container_2_mat_icon_1_Template, 2, 0, "mat-icon", 48);
    ɵngcc0.ɵɵtemplate(2, LibProfitlossComponent_ng_container_12_ng_container_2_th_1_span_2_ng_container_2_mat_icon_2_Template, 2, 0, "mat-icon", 49);
    ɵngcc0.ɵɵtemplate(3, LibProfitlossComponent_ng_container_12_ng_container_2_th_1_span_2_ng_container_2_mat_icon_3_Template, 2, 0, "mat-icon", 50);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r57 = ɵngcc0.ɵɵnextContext(4).index;
    const ctx_r78 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r78.orderType == "desc" && ctx_r78.columnName == ctx_r78.sampleRow[i_r57]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r78.orderType == "asc" && ctx_r78.columnName == ctx_r78.sampleRow[i_r57]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r78.orderType == "asc" && ctx_r78.columnName == ctx_r78.sampleRow[i_r57] || ctx_r78.orderType == "desc" && ctx_r78.columnName == ctx_r78.sampleRow[i_r57]);
} }
function LibProfitlossComponent_ng_container_12_ng_container_2_th_1_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r86 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "span", 56);
    ɵngcc0.ɵɵlistener("sortDetailsEvent", function LibProfitlossComponent_ng_container_12_ng_container_2_th_1_span_2_Template_span_sortDetailsEvent_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r86); const ctx_r85 = ɵngcc0.ɵɵnextContext(4); return ctx_r85.getSortOrderDetails($event); });
    ɵngcc0.ɵɵtemplate(1, LibProfitlossComponent_ng_container_12_ng_container_2_th_1_span_2_mat_icon_1_Template, 2, 0, "mat-icon", 45);
    ɵngcc0.ɵɵtemplate(2, LibProfitlossComponent_ng_container_12_ng_container_2_th_1_span_2_ng_container_2_Template, 4, 3, "ng-container", 46);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r57 = ɵngcc0.ɵɵnextContext(3).index;
    const ctx_r76 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("appSort", ctx_r76.tableItems);
    ɵngcc0.ɵɵattribute("data-name", ctx_r76.sampleRow[i_r57]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r76.orderType == "" || ctx_r76.columnName !== ctx_r76.sampleRow[i_r57]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r76.columnName == ctx_r76.sampleRow[i_r57]);
} }
function LibProfitlossComponent_ng_container_12_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "th", 58);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵtemplate(2, LibProfitlossComponent_ng_container_12_ng_container_2_th_1_span_2_Template, 3, 4, "span", 55);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const yearHeader_r56 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const ctx_r75 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", yearHeader_r56, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r75.filterJson == null ? null : ctx_r75.filterJson.showSorting);
} }
function LibProfitlossComponent_ng_container_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, LibProfitlossComponent_ng_container_12_ng_container_2_th_1_Template, 3, 2, "th", 57);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r57 = ɵngcc0.ɵɵnextContext().index;
    const ctx_r59 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r59.selectedYear.includes(ctx_r59.sampleRow[i_r57]));
} }
function LibProfitlossComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, LibProfitlossComponent_ng_container_12_ng_container_1_Template, 2, 1, "ng-container", 46);
    ɵngcc0.ɵɵtemplate(2, LibProfitlossComponent_ng_container_12_ng_container_2_Template, 2, 1, "ng-container", 46);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r3.resizeColumn);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r3.resizeColumn);
} }
function LibProfitlossComponent_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
function LibProfitlossComponent_ng_container_16_ng_container_4_td_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "td");
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const parentYears_r93 = ɵngcc0.ɵɵnextContext().$implicit;
    const lastData_r90 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", lastData_r90["y" + parentYears_r93], " ");
} }
function LibProfitlossComponent_ng_container_16_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, LibProfitlossComponent_ng_container_16_ng_container_4_td_1_Template, 2, 1, "td", 46);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const parentYears_r93 = ctx.$implicit;
    const ctx_r92 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r92.selectedYear.includes("y" + parentYears_r93));
} }
function LibProfitlossComponent_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "tr", 59);
    ɵngcc0.ɵɵelementStart(2, "td");
    ɵngcc0.ɵɵtext(3);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(4, LibProfitlossComponent_ng_container_16_ng_container_4_Template, 2, 1, "ng-container", 10);
    ɵngcc0.ɵɵelementStart(5, "td");
    ɵngcc0.ɵɵtext(6);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const lastData_r90 = ctx.$implicit;
    const ctx_r5 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵadvance(3);
    ɵngcc0.ɵɵtextInterpolate1(" ", lastData_r90.name, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r5.duration);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate1(" ", lastData_r90.total, " ");
} }
function LibProfitlossComponent_ng_template_17_ng_container_0_mat_checkbox_3_Template(rf, ctx) { if (rf & 1) {
    const _r105 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-checkbox", 64);
    ɵngcc0.ɵɵlistener("click", function LibProfitlossComponent_ng_template_17_ng_container_0_mat_checkbox_3_Template_mat_checkbox_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r105); const ctx_r104 = ɵngcc0.ɵɵnextContext(3); return ctx_r104.resetClick(); })("change", function LibProfitlossComponent_ng_template_17_ng_container_0_mat_checkbox_3_Template_mat_checkbox_change_0_listener($event) { ɵngcc0.ɵɵrestoreView(_r105); const item_r99 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r106 = ɵngcc0.ɵɵnextContext(2); return ctx_r106.exportSelect(item_r99, $event.checked); });
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r99 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r100 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("indeterminate", ctx_r100.someComplete(item_r99))("checked", item_r99.checked)("ngStyle", ɵngcc0.ɵɵpureFunction0(3, _c0));
} }
function LibProfitlossComponent_ng_template_17_ng_container_0_span_4_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementStart(0, "span", 65);
    ɵngcc0.ɵɵtext(1);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r99 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate(item_r99.expansion ? "\u268A" : "\u271A");
} }
function LibProfitlossComponent_ng_template_17_ng_container_0_ng_container_6_td_1_ng_container_3_mat_icon_1_Template(rf, ctx) { if (rf & 1) {
    const _r118 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 72);
    ɵngcc0.ɵɵlistener("click", function LibProfitlossComponent_ng_template_17_ng_container_0_ng_container_6_td_1_ng_container_3_mat_icon_1_Template_mat_icon_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r118); const parentYears_r110 = ɵngcc0.ɵɵnextContext(3).$implicit; const item_r99 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r116 = ɵngcc0.ɵɵnextContext(2); return ctx_r116.editData(item_r99["y" + parentYears_r110], item_r99, parentYears_r110, item_r99.name); });
    ɵngcc0.ɵɵtext(1, "edit");
    ɵngcc0.ɵɵelementEnd();
} }
function LibProfitlossComponent_ng_template_17_ng_container_0_ng_container_6_td_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, LibProfitlossComponent_ng_template_17_ng_container_0_ng_container_6_td_1_ng_container_3_mat_icon_1_Template, 2, 0, "mat-icon", 71);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const parentYears_r110 = ɵngcc0.ɵɵnextContext(2).$implicit;
    const item_r99 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r112 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r112.clickedYear !== "y" + parentYears_r110 || item_r99.name !== ctx_r112.clickedName);
} }
function LibProfitlossComponent_ng_template_17_ng_container_0_ng_container_6_td_1_mat_icon_4_Template(rf, ctx) { if (rf & 1) {
    const _r124 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 73);
    ɵngcc0.ɵɵlistener("click", function LibProfitlossComponent_ng_template_17_ng_container_0_ng_container_6_td_1_mat_icon_4_Template_mat_icon_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r124); const parentYears_r110 = ɵngcc0.ɵɵnextContext(2).$implicit; const item_r99 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r122 = ɵngcc0.ɵɵnextContext(2); return ctx_r122.modifyData(item_r99, parentYears_r110); });
    ɵngcc0.ɵɵtext(1, "check ");
    ɵngcc0.ɵɵelementEnd();
} }
function LibProfitlossComponent_ng_template_17_ng_container_0_ng_container_6_td_1_mat_icon_5_Template(rf, ctx) { if (rf & 1) {
    const _r128 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "mat-icon", 74);
    ɵngcc0.ɵɵlistener("click", function LibProfitlossComponent_ng_template_17_ng_container_0_ng_container_6_td_1_mat_icon_5_Template_mat_icon_click_0_listener() { ɵngcc0.ɵɵrestoreView(_r128); const parentYears_r110 = ɵngcc0.ɵɵnextContext(2).$implicit; const item_r99 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r126 = ɵngcc0.ɵɵnextContext(2); return ctx_r126.closeEdit(item_r99, parentYears_r110); });
    ɵngcc0.ɵɵtext(1, "close ");
    ɵngcc0.ɵɵelementEnd();
} }
const _c2 = function (a0, a1) { return { "edit-hover": a0, "sub-items-holder": a1 }; };
function LibProfitlossComponent_ng_template_17_ng_container_0_ng_container_6_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r131 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementStart(0, "td", 67);
    ɵngcc0.ɵɵelementStart(1, "mat-form-field");
    ɵngcc0.ɵɵelementStart(2, "input", 68);
    ɵngcc0.ɵɵlistener("click", function LibProfitlossComponent_ng_template_17_ng_container_0_ng_container_6_td_1_Template_input_click_2_listener() { ɵngcc0.ɵɵrestoreView(_r131); const ctx_r130 = ɵngcc0.ɵɵnextContext(4); return ctx_r130.resetClick(); })("ngModelChange", function LibProfitlossComponent_ng_template_17_ng_container_0_ng_container_6_td_1_Template_input_ngModelChange_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r131); const parentYears_r110 = ɵngcc0.ɵɵnextContext().$implicit; const item_r99 = ɵngcc0.ɵɵnextContext().$implicit; return (item_r99["y" + parentYears_r110] = $event); })("focus", function LibProfitlossComponent_ng_template_17_ng_container_0_ng_container_6_td_1_Template_input_focus_2_listener() { ɵngcc0.ɵɵrestoreView(_r131); const ctx_r135 = ɵngcc0.ɵɵnextContext(4); return ctx_r135.stopFocus(); })("input", function LibProfitlossComponent_ng_template_17_ng_container_0_ng_container_6_td_1_Template_input_input_2_listener($event) { ɵngcc0.ɵɵrestoreView(_r131); const parentYears_r110 = ɵngcc0.ɵɵnextContext().$implicit; const item_r99 = ɵngcc0.ɵɵnextContext().$implicit; const ctx_r136 = ɵngcc0.ɵɵnextContext(2); return ctx_r136.onSearchChange($event.target.value, item_r99["y" + parentYears_r110]); });
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(3, LibProfitlossComponent_ng_template_17_ng_container_0_ng_container_6_td_1_ng_container_3_Template, 2, 1, "ng-container", 46);
    ɵngcc0.ɵɵtemplate(4, LibProfitlossComponent_ng_template_17_ng_container_0_ng_container_6_td_1_mat_icon_4_Template, 2, 0, "mat-icon", 69);
    ɵngcc0.ɵɵtemplate(5, LibProfitlossComponent_ng_template_17_ng_container_0_ng_container_6_td_1_mat_icon_5_Template, 2, 0, "mat-icon", 70);
    ɵngcc0.ɵɵelementEnd();
} if (rf & 2) {
    const parentYears_r110 = ɵngcc0.ɵɵnextContext().$implicit;
    const item_r99 = ɵngcc0.ɵɵnextContext().$implicit;
    const ctx_r111 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(7, _c2, ctx_r111.editFields, item_r99.index >= 3));
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵproperty("ngModel", item_r99["y" + parentYears_r110])("disabled", ctx_r111.clickedYear !== "y" + parentYears_r110 || item_r99.name !== ctx_r111.clickedName)("value", item_r99["y" + parentYears_r110]);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r111.editFields);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !(ctx_r111.clickedYear !== "y" + parentYears_r110 || item_r99.name !== ctx_r111.clickedName));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !(ctx_r111.clickedYear !== "y" + parentYears_r110 || item_r99.name !== ctx_r111.clickedName));
} }
function LibProfitlossComponent_ng_template_17_ng_container_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵtemplate(1, LibProfitlossComponent_ng_template_17_ng_container_0_ng_container_6_td_1_Template, 6, 10, "td", 66);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const parentYears_r110 = ctx.$implicit;
    const ctx_r102 = ɵngcc0.ɵɵnextContext(3);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", !ctx_r102.selectedYear.includes("y" + parentYears_r110));
} }
function LibProfitlossComponent_ng_template_17_ng_container_0_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainer(0);
} }
const _c3 = function (a0) { return { list: a0 }; };
function LibProfitlossComponent_ng_template_17_ng_container_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵelementContainerStart(0, 75);
    ɵngcc0.ɵɵtemplate(1, LibProfitlossComponent_ng_template_17_ng_container_0_ng_container_9_ng_container_1_Template, 1, 0, "ng-container", 11);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r99 = ɵngcc0.ɵɵnextContext().$implicit;
    ɵngcc0.ɵɵnextContext(2);
    const _r6 = ɵngcc0.ɵɵreference(18);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(2, _c3, item_r99 == null ? null : item_r99.subitems));
} }
const _c4 = function (a0) { return { "sub-items-holder": a0 }; };
function LibProfitlossComponent_ng_template_17_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r144 = ɵngcc0.ɵɵgetCurrentView();
    ɵngcc0.ɵɵelementContainerStart(0);
    ɵngcc0.ɵɵelementStart(1, "tr", 60);
    ɵngcc0.ɵɵlistener("click", function LibProfitlossComponent_ng_template_17_ng_container_0_Template_tr_click_1_listener() { ɵngcc0.ɵɵrestoreView(_r144); const item_r99 = ctx.$implicit; const ctx_r143 = ɵngcc0.ɵɵnextContext(2); return ctx_r143.expandRow(item_r99); });
    ɵngcc0.ɵɵelementStart(2, "td", 0);
    ɵngcc0.ɵɵtemplate(3, LibProfitlossComponent_ng_template_17_ng_container_0_mat_checkbox_3_Template, 1, 4, "mat-checkbox", 61);
    ɵngcc0.ɵɵtemplate(4, LibProfitlossComponent_ng_template_17_ng_container_0_span_4_Template, 2, 1, "span", 62);
    ɵngcc0.ɵɵtext(5);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(6, LibProfitlossComponent_ng_template_17_ng_container_0_ng_container_6_Template, 2, 1, "ng-container", 10);
    ɵngcc0.ɵɵelementStart(7, "td");
    ɵngcc0.ɵɵtext(8);
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵelementEnd();
    ɵngcc0.ɵɵtemplate(9, LibProfitlossComponent_ng_template_17_ng_container_0_ng_container_9_Template, 2, 4, "ng-container", 63);
    ɵngcc0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r99 = ctx.$implicit;
    const ctx_r98 = ɵngcc0.ɵɵnextContext(2);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(10, _c4, item_r99.index >= 3));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵstyleProp("padding-left", item_r99.index * 20 + "px");
    ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(12, _c4, item_r99.index >= 3));
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", ctx_r98.filterJson == null ? null : ctx_r98.filterJson.rowSelection);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", (item_r99 == null ? null : item_r99.subitems == null ? null : item_r99.subitems.length) > 0);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵtextInterpolate1(" ", item_r99.name, " ");
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngForOf", ctx_r98.duration);
    ɵngcc0.ɵɵadvance(2);
    ɵngcc0.ɵɵtextInterpolate(item_r99.total);
    ɵngcc0.ɵɵadvance(1);
    ɵngcc0.ɵɵproperty("ngIf", item_r99.expansion);
} }
function LibProfitlossComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    ɵngcc0.ɵɵtemplate(0, LibProfitlossComponent_ng_template_17_ng_container_0_Template, 10, 14, "ng-container", 10);
    ɵngcc0.ɵɵpipe(1, "priceRange");
} if (rf & 2) {
    const itemLoop_r97 = ctx.list;
    const ctx_r7 = ɵngcc0.ɵɵnextContext();
    ɵngcc0.ɵɵproperty("ngForOf", ɵngcc0.ɵɵpipeBind4(1, 1, itemLoop_r97, ctx_r7.selectedValue, ctx_r7.minAmountRange, ctx_r7.maxAmountRange));
} }
const _c5 = function (a0, a1) { return { "button-align": a0, "button-end": a1 }; };
const _c6 = function (a0) { return { "table-height": a0 }; };
const _c7 = function (a0, a1, a2) { return { "sticky-first": a0, "non-sticky": a1, "sticky-last": a2 }; };
const _c8 = function (a0) { return { "header-stick": a0 }; };
const _c9 = ["resize", ""];
const _c10 = ["*"];
class NewLibDemoService {
    constructor(datePipe) {
        this.datePipe = datePipe;
        this.dataForXSLX = [];
        this.dummExcelDT = [];
    }
    // method to seperate subitems and make flat json
    getSeperation(dumData, startIndex = 0, forExcel = false, selectedExport = false) {
        startIndex == 0 ? this.dummExcelDT = [] : '';
        dumData.map((data) => {
            if (data['checked'] && forExcel && selectedExport) {
                this.dummExcelDT.push(data);
            }
            else {
                this.dummExcelDT.push(data);
            }
            if (data.hasOwnProperty("subitems")) {
                data['subitems'].length > 0 ? this.getSeperation(data['subitems'], 1, forExcel) : '';
            }
        });
        this.dataForXSLX = [];
        this.dataForXSLX = JSON.parse(JSON.stringify(this.dummExcelDT));
        forExcel ? this.removeGargabeKeyValue(this.dataForXSLX) : '';
        return this.dataForXSLX;
    }
    // remove unwanted json keys to avoid shown in excel 
    removeGargabeKeyValue(flattenFilter) {
        flattenFilter.map((dataToFilter) => {
            delete dataToFilter['subitems'];
            delete dataToFilter['expansion'];
            delete dataToFilter['checked'];
            delete dataToFilter['id'];
            delete dataToFilter['parentName'];
            delete dataToFilter['parentId'];
            delete dataToFilter['hasChild'];
        });
    }
    // method to generate excel and save as file .xlsx
    generateExcel(dataForExcel, titleForExcel, sheetNameForExcel, dataForValues) {
        return __awaiter(this, void 0, void 0, function* () {
            // Excel Title, Header, Data
            const title = titleForExcel;
            const header = Object.keys(dataForValues[0]).slice(0, -2);
            // Create workbook and worksheet
            const workbook = new Workbook();
            const worksheet = workbook.addWorksheet(sheetNameForExcel);
            // Add Row and formatting
            const titleRow = worksheet.addRow([title]);
            titleRow.font = { name: 'Comic Sans MS', family: 4, size: 16, underline: 'double', bold: true };
            worksheet.addRow([]);
            const subTitleRow = worksheet.addRow(['Date : ' + this.datePipe.transform(new Date(), 'medium')]);
            worksheet.mergeCells('A1:D2');
            // Blank Row
            worksheet.addRow([]);
            // Add Header Row
            const headerRow = worksheet.addRow(header);
            // Cell Style : Fill and Border
            headerRow.eachCell((cell, number) => {
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
            dataForExcel.forEach((d, index) => {
                if (dataForValues[index]['isParent']) {
                    worksheet.addRow([]);
                    let sub = d.slice(0, -2);
                    const row = worksheet.addRow(sub);
                    row.getCell(1).font = {
                        bold: true
                    };
                }
                else {
                    let sub1 = d.slice(0, -2);
                    const row = worksheet.addRow(sub1);
                    row.getCell(1).alignment = { indent: this.dummExcelDT[index]['index'] };
                }
            });
            worksheet.getColumn(1).width = 60;
            worksheet.getColumn(3).width = 30;
            worksheet.getColumn(4).width = 30;
            worksheet.addRow([]);
            // Footer Row
            const footerRow = worksheet.addRow(['Report Generated Using Master-Grid Angular Library']);
            footerRow.getCell(1).fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFCCFFE5' }
            };
            footerRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
            // Merge Cells
            worksheet.mergeCells(`A${footerRow.number}:F${footerRow.number}`);
            // Generate Excel File with given name
            workbook.xlsx.writeBuffer().then((data) => {
                const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                saveAs(blob, 'Profit Loss.xlsx');
            });
        });
    }
}
NewLibDemoService.ɵfac = function NewLibDemoService_Factory(t) { return new (t || NewLibDemoService)(ɵngcc0.ɵɵinject(ɵngcc1.DatePipe)); };
NewLibDemoService.ɵprov = ɵɵdefineInjectable({ factory: function NewLibDemoService_Factory() { return new NewLibDemoService(ɵɵinject(DatePipe)); }, token: NewLibDemoService, providedIn: "root" });
NewLibDemoService.ctorParameters = () => [
    { type: DatePipe }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NewLibDemoService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ɵngcc1.DatePipe }]; }, null); })();

class NewLibDemoComponent {
    constructor() { }
    ngOnInit() {
    }
}
NewLibDemoComponent.ɵfac = function NewLibDemoComponent_Factory(t) { return new (t || NewLibDemoComponent)(); };
NewLibDemoComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: NewLibDemoComponent, selectors: [["lib-new-lib-demo"]], decls: 2, vars: 0, template: function NewLibDemoComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "p");
        ɵngcc0.ɵɵtext(1, " new-lib-demo works! ");
        ɵngcc0.ɵɵelementEnd();
    } }, encapsulation: 2 });
NewLibDemoComponent.ctorParameters = () => [];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NewLibDemoComponent, [{
        type: Component,
        args: [{
                selector: 'lib-new-lib-demo',
                template: `
    <p>
      new-lib-demo works!
    </p>
  `
            }]
    }], function () { return []; }, null); })();

class LibProfitlossComponent {
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
LibProfitlossComponent.ɵfac = function LibProfitlossComponent_Factory(t) { return new (t || LibProfitlossComponent)(ɵngcc0.ɵɵdirectiveInject(NewLibDemoService)); };
LibProfitlossComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: LibProfitlossComponent, selectors: [["lib-lib-profitloss"]], inputs: { tableItems: "tableItems", headerName: "headerName", priceRangeData: "priceRangeData", numberOfDuration: "numberOfDuration", lastRowData: "lastRowData", isFirstSticky: "isFirstSticky", isLastSticky: "isLastSticky", editFields: "editFields", stickHeader: "stickHeader", filterJson: "filterJson", resizeColumn: "resizeColumn" }, outputs: { notifyDataChange: "notifyDataChange" }, decls: 19, vars: 24, consts: [[3, "ngClass"], ["class", "filter-holder", 4, "ngIf"], [1, "filter-holder"], ["mat-stroked-button", "", 1, "filter-button", 3, "click"], [1, "filter-icon"], [1, "table-container", 3, "ngClass"], ["cellspacing", "0", "cellpadding", "5", 1, "table-size", 3, "ngClass"], ["id", "head-item", 1, "header-align", "row-text-design", 3, "ngClass"], ["resize", "", "id", "resizeHeader", "class", "category-design", 4, "ngIf"], ["class", "category-design", 4, "ngIf"], [4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["recursiveListTmpl", ""], ["mat-stroked-button", "", 1, "filter-button", 3, "matMenuTriggerFor"], ["menu", "matMenu"], [1, "title-container"], [1, "panel-title"], ["class", "hide-holder horizontal-gap", 4, "ngIf"], ["class", "horizontal-gap", 4, "ngIf"], ["mat-button", "", "color", "warn", 3, "disabled", "click"], [1, "hide-holder", "horizontal-gap"], [1, "hide-filter-text-holder"], [1, "hide-show-text"], [3, "vertical"], ["id", "yearCheckbox", 1, "filter-boxes", 3, "click"], ["class", "move-checkbox", 3, "checked", "ngStyle", "change", 4, "ngFor", "ngForOf"], [1, "move-checkbox", 3, "checked", "ngStyle", "change"], [1, "horizontal-gap"], [3, "click"], [1, "filter-input"], [1, "label-text"], [1, "input_type_wrap"], ["floatLabel", "never", 3, "ngModel", "ngModelChange", "opened"], ["select", ""], [3, "disabled", "value", 4, "ngFor", "ngForOf"], ["class", "reset-drop", "mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["id", "rangeFilter", "matTooltipPosition", "above", 1, "slider-padding", 3, "matTooltip"], ["class", "range-button", "mat-stroked-button", "", 3, "disabled", "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "disabled", "value"], ["mat-button", "", "matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 1, "reset-drop", 3, "click"], ["matTooltip", "Reset"], ["mat-stroked-button", "", 1, "range-button", 3, "disabled", "ngClass", "click"], ["resize", "", "id", "resizeHeader", 1, "category-design"], ["data-order", "desc", "data-name", "name", "class", "sort-icon", 3, "appSort", "sortDetailsEvent", 4, "ngIf"], ["data-order", "desc", "data-name", "name", 1, "sort-icon", 3, "appSort", "sortDetailsEvent"], ["class", "hide icon-design", 4, "ngIf"], [4, "ngIf"], [1, "hide", "icon-design"], ["class", "icon-design", "title", "High to Low", 4, "ngIf"], ["class", "icon-design", "title", "Low to High", 4, "ngIf"], ["class", "close icon-design", "title", "Reset Filter", 3, "click", 4, "ngIf"], ["title", "High to Low", 1, "icon-design"], ["title", "Low to High", 1, "icon-design"], ["title", "Reset Filter", 1, "close", "icon-design", 3, "click"], [1, "category-design"], ["data-order", "desc", "class", "sort-icon", 3, "appSort", "sortDetailsEvent", 4, "ngIf"], ["data-order", "desc", 1, "sort-icon", 3, "appSort", "sortDetailsEvent"], ["resize", "", "id", "resizeHeader", 4, "ngIf"], ["resize", "", "id", "resizeHeader"], ["id", "lastRow", 1, "row-text-design"], ["id", "recursiveContainer", 3, "ngClass", "click"], ["class", "select-row", 3, "indeterminate", "checked", "ngStyle", "click", "change", 4, "ngIf"], ["class", "more-less-icon", 4, "ngIf"], ["id", "child", 4, "ngIf"], [1, "select-row", 3, "indeterminate", "checked", "ngStyle", "click", "change"], [1, "more-less-icon"], ["class", "data-edit", 3, "ngClass", 4, "ngIf"], [1, "data-edit", 3, "ngClass"], ["matInput", "", 3, "ngModel", "disabled", "value", "click", "ngModelChange", "focus", "input"], ["class", "icon-design save-icon", "title", "Save", 3, "click", 4, "ngIf"], ["class", "icon-design close-icon", "title", "close", 3, "click", 4, "ngIf"], ["class", "icon-design edit-icon", 3, "click", 4, "ngIf"], [1, "icon-design", "edit-icon", 3, "click"], ["title", "Save", 1, "icon-design", "save-icon", 3, "click"], ["title", "close", 1, "icon-design", "close-icon", 3, "click"], ["id", "child"]], template: function LibProfitlossComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵtemplate(1, LibProfitlossComponent_div_1_Template, 17, 8, "div", 1);
        ɵngcc0.ɵɵelementStart(2, "div", 2);
        ɵngcc0.ɵɵelementStart(3, "button", 3);
        ɵngcc0.ɵɵlistener("click", function LibProfitlossComponent_Template_button_click_3_listener() { return ctx.exportData(); });
        ɵngcc0.ɵɵtext(4, "Export ");
        ɵngcc0.ɵɵelementStart(5, "mat-icon", 4);
        ɵngcc0.ɵɵtext(6, "file_download");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(7, "div", 5);
        ɵngcc0.ɵɵelementStart(8, "table", 6);
        ɵngcc0.ɵɵelementStart(9, "thead", 7);
        ɵngcc0.ɵɵtemplate(10, LibProfitlossComponent_th_10_Template, 3, 1, "th", 8);
        ɵngcc0.ɵɵtemplate(11, LibProfitlossComponent_th_11_Template, 3, 1, "th", 9);
        ɵngcc0.ɵɵtemplate(12, LibProfitlossComponent_ng_container_12_Template, 3, 2, "ng-container", 10);
        ɵngcc0.ɵɵelementStart(13, "th");
        ɵngcc0.ɵɵtext(14, "Total");
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(15, LibProfitlossComponent_ng_container_15_Template, 1, 0, "ng-container", 11);
        ɵngcc0.ɵɵtemplate(16, LibProfitlossComponent_ng_container_16_Template, 7, 3, "ng-container", 10);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵtemplate(17, LibProfitlossComponent_ng_template_17_Template, 2, 6, "ng-template", null, 12, ɵngcc0.ɵɵtemplateRefExtractor);
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        const _r6 = ɵngcc0.ɵɵreference(18);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction2(11, _c5, ctx.filterJson == null ? null : ctx.filterJson.showFiltering, !(ctx.filterJson == null ? null : ctx.filterJson.showFiltering)));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.filterJson == null ? null : ctx.filterJson.showFiltering);
        ɵngcc0.ɵɵadvance(6);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(14, _c6, ctx.stickHeader));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction3(16, _c7, ctx.isFirstSticky, !ctx.isFirstSticky, ctx.isLastSticky));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngClass", ɵngcc0.ɵɵpureFunction1(20, _c8, ctx.stickHeader));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", ctx.resizeColumn);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngIf", !ctx.resizeColumn);
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.rowHeader);
        ɵngcc0.ɵɵadvance(3);
        ɵngcc0.ɵɵproperty("ngTemplateOutlet", _r6)("ngTemplateOutletContext", ɵngcc0.ɵɵpureFunction1(22, _c3, ctx.tableItems));
        ɵngcc0.ɵɵadvance(1);
        ɵngcc0.ɵɵproperty("ngForOf", ctx.lastRowData);
    } }, directives: function () { return [ɵngcc1.NgClass, ɵngcc1.NgIf, ɵngcc2.MatButton, ɵngcc3.MatIcon, ɵngcc1.NgForOf, ɵngcc1.NgTemplateOutlet, ɵngcc4.MatMenuTrigger, ɵngcc4.MatMenu, ɵngcc5.MatDivider, ɵngcc6.MatCheckbox, ɵngcc1.NgStyle, ɵngcc7.MatFormField, ɵngcc8.MatSelect, ɵngcc9.NgControlStatus, ɵngcc9.NgModel, ɵngcc10.MatTooltip, ɵngcc11.MatOption, ɵngcc7.MatSuffix, ResizeComponent, SortDirective, ɵngcc12.MatInput, ɵngcc9.DefaultValueAccessor]; }, pipes: function () { return [PricerangePipe]; }, styles: ["tr>td:last-of-type{background-color:#e6dcff;padding-left:1rem}tr:not(:last-child){cursor:pointer;box-shadow:0 1px 1px -2px rgba(0,0,0,.2),0 1px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);height:4.75rem;background-color:#fff}.table-container{overflow:auto;width:100%;width:95%;margin:2rem 2rem 0}table{table-layout:fixed;width:100%}.sticky-first td:first-child,.sticky-first th:first-child{position:sticky;left:0;z-index:2;background-color:#fff;box-shadow:0 1px 1px -2px rgba(0,0,0,.2),0 1px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);width:250px}.non-sticky td:first-child,.non-sticky th:first-child{width:250px}.sticky-last td:last-child,.sticky-last th:last-child{position:sticky;right:0;z-index:2;box-shadow:0 1px 1px -2px rgba(0,0,0,.2),0 1px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);width:250px}.sticky-last th:last-child{background-color:#460073}th:last-child{padding-left:1rem}thead tr th{position:sticky;top:0}tr:last-child{background-color:#e6dcff;height:4.75rem}tr:last-child td{background-color:#e6dcff;font-weight:600;font-size:1.2rem}tr:last-child td:last-child{background-color:#7500c0;color:#fff;font-weight:600;font-size:1.2rem;padding-left:1rem}.header-align{text-align:left;background:#460073;color:#fff;height:3.75rem}#lastRow td:first-child{background-color:#e6dcff}#head-item .category-design{background:#460073;padding:1rem}.more-less-icon{color:#004dff}#recursiveContainer .sub-items-holder{background-color:#e6e6dc}.table-size{width:100%;position:relative}.row-text-design td{color:#000;font-size:1.08rem;font-weight:400}.row-text-design th{font-size:1.08rem;font-weight:600}.row-text-design td:not(:first-child),.row-text-design th:not(:first-child){width:150px}td:nth-child(2),th:nth-child(2){padding-left:1.2rem}tr td:first-child{padding:1rem}tr td:last-child{font-weight:400}.close{font-size:.85rem}#head-item .hide,.close{font-style:normal;cursor:pointer}#head-item .hide{display:none;margin-left:10px}#head-item .sort-icon{display:inline-block;width:5rem;height:.75rem}#head-item .sort-icon:hover>.hide{display:block;cursor:pointer}#recursiveContainer .data-edit:hover>.edit-icon{display:inline-block}#recursiveContainer .edit-icon{display:none;color:#7500c0}.save-icon{color:#09cc09}.close-icon{color:#be0101}.icon-design{font-size:16px;position:relative;top:2px;cursor:pointer}th#resizeHeader:hover{background-color:#7500c0}th:hover .hide{display:block;cursor:pointer}.data-edit mat-form-field{width:100px}.mat-form-field-disabled .mat-form-field-underline{display:none}.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix:after,.mat-input-element:disabled{color:#000}.header-stick{position:sticky;top:0;z-index:5}.table-height{height:350px}.edit-hover:hover{border:1px solid #7500c0}.button-align{display:flex;justify-content:space-between}.button-end{display:flex;justify-content:end}.filter-boxes{display:flex;margin:1rem;flex-wrap:wrap}.filter-boxes .mat-checkbox-frame{border-color:#7500c0}.mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03;background-color:#7500c0}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#7500c0}.filter-holder{margin:2rem}.filter-holder .filter-button{border-radius:0}.filter-holder .filter-icon{color:#7500c0;font-size:22px;margin-left:.75rem}.mat-menu-panel.filter-menu-layout{max-width:33rem;border-radius:0}.move-checkbox{margin-left:1rem}.hide-holder{display:flex}.hide-holder .hide-filter-text-holder{display:flex;align-items:center;margin:1rem;min-width:8rem;justify-content:center}.hide-holder .hide-filter-text-holder .hide-show-text{font-weight:400;color:#6c6c6c}.horizontal-gap{margin-bottom:.5rem;margin-top:.5rem}.slider-padding{margin:1rem;display:flex;flex-wrap:wrap}.slider-padding .slider-gap{margin-left:1rem}#rangeFilter .range-button{border-radius:0;min-width:5rem;width:8rem;margin-left:10px;margin-bottom:10px}.filtered-button{background-color:#7500c0;color:#fff}.panel-title{font-size:1rem;color:#000;font-weight:500}.title-container{padding:1rem 1rem 0;border-bottom:4px solid #a100ff}.input_type_wrap .mat-form-field-flex{background:#fff 0 0 no-repeat padding-box;color:#000;border-radius:0;box-shadow:0 1px 5px rgba(158,164,186,.2);padding:0}.input_type_wrap .mat-form-field-infix{padding-top:0;padding-bottom:0}.input_type_wrap .mat-form-field-underline{display:none}.input_type_wrap .mat-select-value{padding-left:1rem;padding-bottom:.5rem}.input_type_wrap .mat-select-arrow{margin-bottom:.5rem!important}.input_type_wrap mat-form-field{width:150px!important}.filter-input{display:inline-flex;justify-content:center;flex-direction:column;align-items:center;margin-left:1.5rem}.label-text{color:#000;font-weight:500;margin-bottom:.25rem}.reset-drop mat-icon{margin-bottom:3px}th:first-child .wrapper .bar{margin-right:-16px}.no-data{display:flex;justify-content:center;min-width:65rem;padding:2rem 2rem 2rem 3rem;font-size:1.2rem}.select-row{margin-right:.5rem}"], encapsulation: 2 });
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
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(LibProfitlossComponent, [{
        type: Component,
        args: [{
                selector: 'lib-lib-profitloss',
                template: "<div  [ngClass]=\"{'button-align' : filterJson?.showFiltering, 'button-end' : !filterJson?.showFiltering}\">\r\n    <div class=\"filter-holder\" *ngIf=\"filterJson?.showFiltering\">\r\n        <button class=\"filter-button\" mat-stroked-button [matMenuTriggerFor]=\"menu\">Filter\r\n            <mat-icon class=\"filter-icon\">filter_list</mat-icon>\r\n        </button>\r\n        <mat-menu [class]=\"'filter-menu-layout'\" #menu=\"matMenu\">\r\n            <div class=\"title-container\">\r\n                <p class=\"panel-title\">Filter By</p>\r\n            </div>\r\n            <div class=\"hide-holder horizontal-gap\" *ngIf=\"filterJson?.hideShowFiltering\">\r\n                <div class=\"hide-filter-text-holder\">\r\n                    <p class=\"hide-show-text\">Hide/Show</p>\r\n                </div>\r\n                <mat-divider [vertical]=\"true\"></mat-divider>\r\n                <div id=\"yearCheckbox\" class=\"filter-boxes\" (click)=\"$event.stopPropagation()\">\r\n                    <mat-checkbox *ngFor=\"let yearNames of rowHeader;let yearIndex = index;\"\r\n                        [checked]=\"selectedYear.includes(sampleRow[yearIndex])\" class=\"move-checkbox\"\r\n                        (change)=\"valueChange(yearNames,$event, yearIndex)\" [ngStyle]=\"{'color': '#75003'}\">\r\n                        {{ yearNames }}\r\n                    </mat-checkbox>\r\n                </div>\r\n            </div>\r\n            <mat-divider class=\"horizontal-gap\" *ngIf=\"filterJson?.hideShowFiltering\"></mat-divider>\r\n            <div class=\"hide-holder horizontal-gap\" *ngIf=\"filterJson?.rangeFiltering\">\r\n                <div class=\"hide-filter-text-holder\">\r\n                    <p class=\"hide-show-text\">Range</p>\r\n                </div>\r\n                <mat-divider [vertical]=\"true\"></mat-divider>\r\n    \r\n                <div (click)=\"$event.stopPropagation()\">\r\n                    <div class=\"filter-input\">\r\n                        <label class=\"label-text\">Choose Year to Filter by Range</label>\r\n                        <mat-form-field class=\"input_type_wrap\">\r\n                            <mat-select #select [(ngModel)]=\"selectedValue\" (opened)=\"resetPlaceholder(select)\"\r\n                                floatLabel=\"never\">\r\n                                <mat-option [disabled]=\"selectedYear.includes(sampleRow[dropIndex])\"\r\n                                    *ngFor=\"let yearNames of rowHeader;let dropIndex = index;\"\r\n                                    [value]=\"sampleRow[dropIndex]\">\r\n                                    {{yearNames}}\r\n                                </mat-option>\r\n                            </mat-select>\r\n                            <button class=\"reset-drop\" mat-button matSuffix *ngIf=\"selectedValue\" mat-icon-button\r\n                                aria-label=\"Clear\" (click)=\"resetDropdown($event)\">\r\n                                <mat-icon matTooltip=\"Reset\">close</mat-icon>\r\n                            </button>\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div id=\"rangeFilter\" class=\"slider-padding\"\r\n                        [matTooltip]=\"selectedValue == undefined ? 'Choose a year in dropdown to filter by range' : ''\"\r\n                        matTooltipPosition=\"above\">\r\n                        <button class=\"range-button\" [disabled]=\"selectedValue == undefined\"\r\n                            [ngClass]=\"{'filtered-button' : buttonLoop.range == rangeSelection}\" mat-stroked-button\r\n                            *ngFor=\"let buttonLoop of priceRangeData\"\r\n                            (click)=\"priceFilter(buttonLoop.min,buttonLoop.max, buttonLoop.range)\">{{buttonLoop.range}}</button>\r\n                    </div>\r\n    \r\n                </div>\r\n            </div>\r\n            <mat-divider class=\"horizontal-gap\" *ngIf=\"filterJson?.rangeFiltering\"></mat-divider>\r\n            <div>\r\n                <button mat-button color=\"warn\" (click)=\"clearFilter()\"\r\n                    [disabled]=\"!selectedYear.length > 0 && selectedValue == undefined\">Clear all filters</button>\r\n            </div>\r\n    \r\n        </mat-menu>\r\n    </div>\r\n    \r\n    <div class=\"filter-holder\">\r\n        <button class=\"filter-button\" mat-stroked-button (click)=\"exportData()\">Export\r\n            <mat-icon class=\"filter-icon\">file_download</mat-icon>\r\n        </button>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"table-container\" [ngClass]=\"{'table-height': stickHeader}\">\r\n    <table class=\"table-size\"\r\n        [ngClass]=\"{ 'sticky-first' : isFirstSticky , 'non-sticky' : !isFirstSticky ,  'sticky-last': isLastSticky}\"\r\n        cellspacing=\"0\" cellpadding=\"5\">\r\n        <thead class=\"header-align row-text-design\" [ngClass]=\"{'header-stick': stickHeader}\" id=\"head-item\">\r\n            <th resize id=\"resizeHeader\" *ngIf=\"resizeColumn\" class=\"category-design\"> Category\r\n                <span *ngIf=\"filterJson?.showSorting\" [appSort]=\"tableItems\" data-order=\"desc\" data-name=\"name\"\r\n                    class=\"sort-icon\" (sortDetailsEvent)=\"getSortOrderDetails($event)\">\r\n                    <mat-icon *ngIf=\"(orderType == '' || columnName !== 'name')\" class=\"hide icon-design\">sort\r\n                    </mat-icon>\r\n                    <ng-container *ngIf=\"columnName == 'name'\">\r\n                        <mat-icon *ngIf=\"(orderType == 'desc' && columnName == 'name')\" class=\"icon-design\"\r\n                            title=\"High to Low\">south</mat-icon>\r\n                        <mat-icon *ngIf=\"(orderType == 'asc' && columnName == 'name')\" class=\"icon-design\"\r\n                            title=\"Low to High\">north</mat-icon>\r\n                        <mat-icon\r\n                            *ngIf=\"((orderType == 'asc' && columnName == 'name') || (orderType == 'desc' && columnName == 'name'))\"\r\n                            class=\"close icon-design\" (click)=\"restFilter()\" title=\"Reset Filter\">close</mat-icon>\r\n                    </ng-container>\r\n                </span>\r\n            </th>\r\n            <th *ngIf=\"!resizeColumn\" class=\"category-design\"> Category\r\n                <span *ngIf=\"filterJson?.showSorting\" [appSort]=\"tableItems\" data-order=\"desc\" data-name=\"name\"\r\n                    class=\"sort-icon\" (sortDetailsEvent)=\"getSortOrderDetails($event)\">\r\n                    <mat-icon *ngIf=\"(orderType == '' || columnName !== 'name')\" class=\"hide icon-design\">sort\r\n                    </mat-icon>\r\n                    <ng-container *ngIf=\"columnName == 'name'\">\r\n                        <mat-icon *ngIf=\"(orderType == 'desc' && columnName == 'name')\" class=\"icon-design\"\r\n                            title=\"High to Low\">south</mat-icon>\r\n                        <mat-icon *ngIf=\"(orderType == 'asc' && columnName == 'name')\" class=\"icon-design\"\r\n                            title=\"Low to High\">north</mat-icon>\r\n                        <mat-icon\r\n                            *ngIf=\"((orderType == 'asc' && columnName == 'name') || (orderType == 'desc' && columnName == 'name'))\"\r\n                            class=\"close icon-design\" (click)=\"restFilter()\" title=\"Reset Filter\">close</mat-icon>\r\n                    </ng-container>\r\n                </span>\r\n            </th>\r\n            <ng-container *ngFor=\"let yearHeader of rowHeader;let i = index;\">\r\n                <ng-container *ngIf=\"!resizeColumn\">\r\n                    <th *ngIf=\"!selectedYear.includes(sampleRow[i])\"> {{yearHeader}}\r\n                        <span *ngIf=\"filterJson?.showSorting\" [appSort]=\"tableItems\" data-order=\"desc\"\r\n                            [attr.data-name]=\"sampleRow[i]\" class=\"sort-icon\"\r\n                            (sortDetailsEvent)=\"getSortOrderDetails($event)\">\r\n                            <mat-icon *ngIf=\"(orderType == '' || columnName !== sampleRow[i])\" class=\"hide icon-design\">\r\n                                sort</mat-icon>\r\n                            <ng-container *ngIf=\"columnName == sampleRow[i]\">\r\n                                <mat-icon *ngIf=\"(orderType == 'desc' && columnName == sampleRow[i])\"\r\n                                    class=\"icon-design\" title=\"High to Low\">south</mat-icon>\r\n                                <mat-icon *ngIf=\"(orderType == 'asc' && columnName == sampleRow[i])\" class=\"icon-design\"\r\n                                    title=\"Low to High\">north</mat-icon>\r\n                                <mat-icon\r\n                                    *ngIf=\"((orderType == 'asc' && columnName == sampleRow[i]) || (orderType == 'desc' && columnName == sampleRow[i]))\"\r\n                                    class=\"close icon-design\" (click)=\"restFilter()\" title=\"Reset Filter\">close\r\n                                </mat-icon>\r\n                            </ng-container>\r\n                        </span>\r\n                    </th>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"resizeColumn\">\r\n                    <th resize id=\"resizeHeader\" *ngIf=\"!selectedYear.includes(sampleRow[i])\"> {{yearHeader}}\r\n                        <span *ngIf=\"filterJson?.showSorting\" [appSort]=\"tableItems\" data-order=\"desc\"\r\n                            [attr.data-name]=\"sampleRow[i]\" class=\"sort-icon\"\r\n                            (sortDetailsEvent)=\"getSortOrderDetails($event)\">\r\n                            <mat-icon *ngIf=\"(orderType == '' || columnName !== sampleRow[i])\" class=\"hide icon-design\">\r\n                                sort</mat-icon>\r\n                            <ng-container *ngIf=\"columnName == sampleRow[i]\">\r\n                                <mat-icon *ngIf=\"(orderType == 'desc' && columnName == sampleRow[i])\"\r\n                                    class=\"icon-design\" title=\"High to Low\">south</mat-icon>\r\n                                <mat-icon *ngIf=\"(orderType == 'asc' && columnName == sampleRow[i])\" class=\"icon-design\"\r\n                                    title=\"Low to High\">north</mat-icon>\r\n                                <mat-icon\r\n                                    *ngIf=\"((orderType == 'asc' && columnName == sampleRow[i]) || (orderType == 'desc' && columnName == sampleRow[i]))\"\r\n                                    class=\"close icon-design\" (click)=\"restFilter()\" title=\"Reset Filter\">close\r\n                                </mat-icon>\r\n                            </ng-container>\r\n                        </span>\r\n                    </th>\r\n                </ng-container>\r\n            </ng-container>\r\n            <th>Total</th>\r\n        </thead>\r\n        <ng-container *ngTemplateOutlet=\"recursiveListTmpl; context:{ list: tableItems }\"></ng-container>\r\n\r\n        <ng-container *ngFor=\"let lastData of lastRowData;let i = index;\">\r\n            <tr id=\"lastRow\" class=\"row-text-design\">\r\n                <td>\r\n                    {{lastData.name}}\r\n                </td>\r\n\r\n                <ng-container *ngFor=\"let parentYears of duration\">\r\n                    <td *ngIf=\"!selectedYear.includes('y'+parentYears) \"> {{lastData['y'+parentYears]}} </td>\r\n                </ng-container>\r\n                <td> {{lastData.total}} </td>\r\n            </tr>\r\n        </ng-container>\r\n    </table>\r\n\r\n    <ng-template #recursiveListTmpl let-itemLoop=\"list\">\r\n        <ng-container *ngFor=\"let item of itemLoop | priceRange : selectedValue : minAmountRange : maxAmountRange\">\r\n            <tr id=\"recursiveContainer\" (click)=\"expandRow(item)\" [ngClass]=\"{'sub-items-holder' : item.index >= 3}\">\r\n                <td  [ngClass]=\"{'sub-items-holder' : item.index >= 3}\"\r\n                    [style.padding-left]=\"item.index*20+'px'\"> <mat-checkbox *ngIf=\"filterJson?.rowSelection\"\r\n                    (click)=\"resetClick()\" \r\n                    (change)=\"exportSelect(item, $event.checked)\"\r\n                    [indeterminate]=\"someComplete(item)\"\r\n                    [checked]=\"item.checked\"\r\n                    [ngStyle]=\"{'color': '#75003'}\" class=\"select-row\"></mat-checkbox>\r\n                    <span class=\"more-less-icon\"\r\n                        *ngIf=\"item?.subitems?.length > 0\">{{ item.expansion ? '\u268A' : '\u271A'}}</span> {{ item.name }} </td>\r\n                <ng-container *ngFor=\"let parentYears of duration\">\r\n                    <td  class=\"data-edit\"\r\n                        [ngClass]=\"{'edit-hover' : editFields, 'sub-items-holder' : item.index >= 3}\"\r\n                        *ngIf=\"!selectedYear.includes('y'+parentYears) \">\r\n                        <mat-form-field>\r\n                            <input matInput (click)=\"resetClick()\" [(ngModel)]=\"item['y'+parentYears]\"\r\n                                (focus)=\"stopFocus()\"\r\n                                (input)=\"onSearchChange($event.target.value, item['y'+parentYears])\"\r\n                                [disabled]=\"((clickedYear !== 'y'+parentYears) || (item.name !== clickedName))\"\r\n                                [value]=\"item['y'+parentYears]\">\r\n                        </mat-form-field>\r\n                        <ng-container *ngIf=\"editFields\">\r\n                            <mat-icon *ngIf=\"((clickedYear !== 'y'+parentYears) || (item.name !== clickedName))\"\r\n                                class=\"icon-design edit-icon\"\r\n                                (click)=\"editData(item['y'+parentYears],item,parentYears,item.name)\">edit</mat-icon>\r\n                        </ng-container>\r\n                        <mat-icon *ngIf=\"!((clickedYear !== 'y'+parentYears) || (item.name !== clickedName))\"\r\n                            class=\"icon-design save-icon\" title=\"Save\" (click)=\"modifyData(item,parentYears)\">check\r\n                        </mat-icon>\r\n                        <mat-icon *ngIf=\"!((clickedYear !== 'y'+parentYears) || (item.name !== clickedName))\"\r\n                            class=\"icon-design close-icon\" title=\"close\" (click)=\"closeEdit(item,parentYears)\">close\r\n                        </mat-icon>\r\n                    </td>\r\n                </ng-container>\r\n                <td>{{item.total}}</td>\r\n            </tr>\r\n            <ng-container *ngIf=\"item.expansion\" id=\"child\">\r\n                <ng-container *ngTemplateOutlet=\"recursiveListTmpl; context:{ list: item?.subitems }\"></ng-container>\r\n            </ng-container>\r\n        </ng-container>\r\n        <!-- <div *ngIf=\"(itemLoop | priceRange : selectedValue : minAmountRange : maxAmountRange).length === 0\" \r\n               class=\"no-data\">No Item Matches your Filter...</div> -->\r\n    </ng-template>\r\n</div>",
                encapsulation: ViewEncapsulation.None,
                styles: ["tr>td:last-of-type{background-color:#e6dcff;padding-left:1rem}tr:not(:last-child){cursor:pointer;box-shadow:0 1px 1px -2px rgba(0,0,0,.2),0 1px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);height:4.75rem;background-color:#fff}.table-container{overflow:auto;width:100%;width:95%;margin:2rem 2rem 0}table{table-layout:fixed;width:100%}.sticky-first td:first-child,.sticky-first th:first-child{position:sticky;left:0;z-index:2;background-color:#fff;box-shadow:0 1px 1px -2px rgba(0,0,0,.2),0 1px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);width:250px}.non-sticky td:first-child,.non-sticky th:first-child{width:250px}.sticky-last td:last-child,.sticky-last th:last-child{position:sticky;right:0;z-index:2;box-shadow:0 1px 1px -2px rgba(0,0,0,.2),0 1px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);width:250px}.sticky-last th:last-child{background-color:#460073}th:last-child{padding-left:1rem}thead tr th{position:sticky;top:0}tr:last-child{background-color:#e6dcff;height:4.75rem}tr:last-child td{background-color:#e6dcff;font-weight:600;font-size:1.2rem}tr:last-child td:last-child{background-color:#7500c0;color:#fff;font-weight:600;font-size:1.2rem;padding-left:1rem}.header-align{text-align:left;background:#460073;color:#fff;height:3.75rem}#lastRow td:first-child{background-color:#e6dcff}#head-item .category-design{background:#460073;padding:1rem}.more-less-icon{color:#004dff}#recursiveContainer .sub-items-holder{background-color:#e6e6dc}.table-size{width:100%;position:relative}.row-text-design td{color:#000;font-size:1.08rem;font-weight:400}.row-text-design th{font-size:1.08rem;font-weight:600}.row-text-design td:not(:first-child),.row-text-design th:not(:first-child){width:150px}td:nth-child(2),th:nth-child(2){padding-left:1.2rem}tr td:first-child{padding:1rem}tr td:last-child{font-weight:400}.close{font-size:.85rem}#head-item .hide,.close{font-style:normal;cursor:pointer}#head-item .hide{display:none;margin-left:10px}#head-item .sort-icon{display:inline-block;width:5rem;height:.75rem}#head-item .sort-icon:hover>.hide{display:block;cursor:pointer}#recursiveContainer .data-edit:hover>.edit-icon{display:inline-block}#recursiveContainer .edit-icon{display:none;color:#7500c0}.save-icon{color:#09cc09}.close-icon{color:#be0101}.icon-design{font-size:16px;position:relative;top:2px;cursor:pointer}th#resizeHeader:hover{background-color:#7500c0}th:hover .hide{display:block;cursor:pointer}.data-edit mat-form-field{width:100px}.mat-form-field-disabled .mat-form-field-underline{display:none}.mat-form-field-type-mat-native-select.mat-form-field-disabled .mat-form-field-infix:after,.mat-input-element:disabled{color:#000}.header-stick{position:sticky;top:0;z-index:5}.table-height{height:350px}.edit-hover:hover{border:1px solid #7500c0}.button-align{display:flex;justify-content:space-between}.button-end{display:flex;justify-content:end}.filter-boxes{display:flex;margin:1rem;flex-wrap:wrap}.filter-boxes .mat-checkbox-frame{border-color:#7500c0}.mat-checkbox-checked.mat-accent .mat-checkbox-ripple .mat-ripple-element{opacity:.03;background-color:#7500c0}.mat-checkbox-checked.mat-accent .mat-checkbox-background,.mat-checkbox-indeterminate.mat-accent .mat-checkbox-background{background-color:#7500c0}.filter-holder{margin:2rem}.filter-holder .filter-button{border-radius:0}.filter-holder .filter-icon{color:#7500c0;font-size:22px;margin-left:.75rem}.mat-menu-panel.filter-menu-layout{max-width:33rem;border-radius:0}.move-checkbox{margin-left:1rem}.hide-holder{display:flex}.hide-holder .hide-filter-text-holder{display:flex;align-items:center;margin:1rem;min-width:8rem;justify-content:center}.hide-holder .hide-filter-text-holder .hide-show-text{font-weight:400;color:#6c6c6c}.horizontal-gap{margin-bottom:.5rem;margin-top:.5rem}.slider-padding{margin:1rem;display:flex;flex-wrap:wrap}.slider-padding .slider-gap{margin-left:1rem}#rangeFilter .range-button{border-radius:0;min-width:5rem;width:8rem;margin-left:10px;margin-bottom:10px}.filtered-button{background-color:#7500c0;color:#fff}.panel-title{font-size:1rem;color:#000;font-weight:500}.title-container{padding:1rem 1rem 0;border-bottom:4px solid #a100ff}.input_type_wrap .mat-form-field-flex{background:#fff 0 0 no-repeat padding-box;color:#000;border-radius:0;box-shadow:0 1px 5px rgba(158,164,186,.2);padding:0}.input_type_wrap .mat-form-field-infix{padding-top:0;padding-bottom:0}.input_type_wrap .mat-form-field-underline{display:none}.input_type_wrap .mat-select-value{padding-left:1rem;padding-bottom:.5rem}.input_type_wrap .mat-select-arrow{margin-bottom:.5rem!important}.input_type_wrap mat-form-field{width:150px!important}.filter-input{display:inline-flex;justify-content:center;flex-direction:column;align-items:center;margin-left:1.5rem}.label-text{color:#000;font-weight:500;margin-bottom:.25rem}.reset-drop mat-icon{margin-bottom:3px}th:first-child .wrapper .bar{margin-right:-16px}.no-data{display:flex;justify-content:center;min-width:65rem;padding:2rem 2rem 2rem 3rem;font-size:1.2rem}.select-row{margin-right:.5rem}"]
            }]
    }], function () { return [{ type: NewLibDemoService }]; }, { tableItems: [{
            type: Input
        }], headerName: [{
            type: Input
        }], notifyDataChange: [{
            type: Output
        }], priceRangeData: [{
            type: Input
        }], numberOfDuration: [{
            type: Input
        }], lastRowData: [{
            type: Input
        }], isFirstSticky: [{
            type: Input
        }], isLastSticky: [{
            type: Input
        }], editFields: [{
            type: Input
        }], stickHeader: [{
            type: Input
        }], filterJson: [{
            type: Input
        }], resizeColumn: [{
            type: Input
        }] }); })();

class Sort {
    constructor() {
        this.sortOrder = 1;
        this.collator = new Intl.Collator(undefined, {
            numeric: true,
            sensitivity: "base",
        });
    }
    startSort(property, order, type = "") {
        if (order === "desc") {
            this.sortOrder = -1;
        }
        return (a, b) => {
            if (a.hasOwnProperty('subitems')) {
                this.recursiveSort(a['subitems'], property, order);
            }
            if (b.hasOwnProperty('subitems')) {
                this.recursiveSort(a['subitems'], property, order);
            }
            return this.collator.compare(a[property], b[property]) * this.sortOrder;
        };
    }
    recursiveSort(listToSort, sortingProperty, sortOrder) {
        sortOrder == 'asc' ? listToSort.sort((firstBSubitem, secondfBSubitem) => firstBSubitem[sortingProperty] - secondfBSubitem[sortingProperty])
            : listToSort.sort((descFirstItem, descsecondItem) => descsecondItem[sortingProperty] - descFirstItem[sortingProperty]);
        if (listToSort.length > 0) {
            listToSort.map((listSort) => {
                if (listSort.hasOwnProperty('subitems')) {
                    this.recursiveSort(listSort['subitems'], sortingProperty, sortOrder);
                }
            });
        }
    }
}

class SortDirective {
    constructor(renderer, targetElem) {
        this.renderer = renderer;
        this.targetElem = targetElem;
        this.sortDetailsEvent = new EventEmitter();
    }
    sortData() {
        // Create Object of Sort Class
        const sort = new Sort();
        // Get Reference Of Current Clicked Element
        const elem = this.targetElem.nativeElement;
        // Get In WHich Order list should be sorted by default it should be set to desc on element attribute
        const order = elem.getAttribute("data-order");
        // Get The Property Type specially set [data-type=date] if it is date field
        const type = elem.getAttribute("data-type");
        // Get The Property Name from Element Attribute
        const property = elem.getAttribute("data-name");
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
    }
}
SortDirective.ɵfac = function SortDirective_Factory(t) { return new (t || SortDirective)(ɵngcc0.ɵɵdirectiveInject(ɵngcc0.Renderer2), ɵngcc0.ɵɵdirectiveInject(ɵngcc0.ElementRef)); };
SortDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: SortDirective, selectors: [["", "appSort", ""]], hostBindings: function SortDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵlistener("click", function SortDirective_click_HostBindingHandler() { return ctx.sortData(); });
    } }, inputs: { appSort: "appSort" }, outputs: { sortDetailsEvent: "sortDetailsEvent" } });
SortDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
SortDirective.propDecorators = {
    appSort: [{ type: Input }],
    sortDetailsEvent: [{ type: Output }],
    sortData: [{ type: HostListener, args: ["click",] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(SortDirective, [{
        type: Directive,
        args: [{
                selector: '[appSort]'
            }]
    }], function () { return [{ type: ɵngcc0.Renderer2 }, { type: ɵngcc0.ElementRef }]; }, { sortDetailsEvent: [{
            type: Output
        }], sortData: [{
            type: HostListener,
            args: ["click"]
        }], appSort: [{
            type: Input
        }] }); })();

const modules = [
    CdkTableModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatSelectModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatProgressBarModule
];
const ɵ0 = { verticalPosition: 'top', horizontalPosition: 'left' };
class MaterialModule {
}
MaterialModule.ɵfac = function MaterialModule_Factory(t) { return new (t || MaterialModule)(); };
MaterialModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: MaterialModule });
MaterialModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ providers: [
        { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: ɵ0 }
    ], imports: [[modules], CdkTableModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSelectModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatProgressBarModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(MaterialModule, { imports: [CdkTableModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSelectModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatProgressBarModule], exports: [CdkTableModule,
        MatAutocompleteModule,
        MatBadgeModule,
        MatBottomSheetModule,
        MatButtonModule,
        MatButtonToggleModule,
        MatCardModule,
        MatCheckboxModule,
        MatChipsModule,
        MatStepperModule,
        MatDatepickerModule,
        MatDialogModule,
        MatDividerModule,
        MatExpansionModule,
        MatGridListModule,
        MatIconModule,
        MatInputModule,
        MatListModule,
        MatMenuModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatSelectModule,
        MatRippleModule,
        MatSelectModule,
        MatSidenavModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatSnackBarModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        MatToolbarModule,
        MatTooltipModule,
        MatFormFieldModule,
        MatProgressBarModule] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(MaterialModule, [{
        type: NgModule,
        args: [{
                imports: [modules],
                exports: [modules],
                providers: [
                    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: ɵ0 }
                ]
            }]
    }], null, null); })();

class PricerangePipe {
    constructor() {
        this.searchedItems = [];
    }
    transform(value, columnName, minValue, maxValue, deepSearch = false) {
        // if (!deepSearch) {
        if (minValue !== undefined && maxValue !== undefined && columnName !== undefined) {
            if (typeof (maxValue) !== "string") {
                console.log(columnName, minValue, maxValue);
                let validatedData;
                validatedData = value.filter(itemList => {
                    return Number(itemList[columnName]) >= minValue && Number(itemList[columnName]) < maxValue;
                });
                return validatedData;
            }
            else {
                return value.filter(itemList => Number(itemList[columnName]) >= minValue);
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
PricerangePipe.ɵfac = function PricerangePipe_Factory(t) { return new (t || PricerangePipe)(); };
PricerangePipe.ɵpipe = ɵngcc0.ɵɵdefinePipe({ name: "priceRange", type: PricerangePipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(PricerangePipe, [{
        type: Pipe,
        args: [{
                name: 'priceRange'
            }]
    }], function () { return []; }, null); })();

class ResizeComponent {
    constructor() {
        this.width = null;
    }
    onResize(width) {
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
    }
    getClassData(className) {
        this.className = className['classIdentifier'];
        // if(className !== undefined && className['classIdentifier'] == 'category-design'){
        //   console.log('IF',className['classIdentifier'],this.tempWidth);
        //   this.tempWidth < 250 ? this.width = 250 : this.width = this.tempWidth
        // }
    }
}
ResizeComponent.ɵfac = function ResizeComponent_Factory(t) { return new (t || ResizeComponent)(); };
ResizeComponent.ɵcmp = ɵngcc0.ɵɵdefineComponent({ type: ResizeComponent, selectors: [["th", "resize", ""]], hostVars: 2, hostBindings: function ResizeComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵngcc0.ɵɵstyleProp("width", ctx.width, "px");
    } }, attrs: _c9, ngContentSelectors: _c10, decls: 4, vars: 0, consts: [[1, "wrapper"], [1, "content"], [1, "bar", 3, "resize", "expansionDetails"]], template: function ResizeComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵprojectionDef();
        ɵngcc0.ɵɵelementStart(0, "div", 0);
        ɵngcc0.ɵɵelementStart(1, "div", 1);
        ɵngcc0.ɵɵprojection(2);
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementStart(3, "div", 2);
        ɵngcc0.ɵɵlistener("resize", function ResizeComponent_Template_div_resize_3_listener($event) { return ctx.onResize($event); })("expansionDetails", function ResizeComponent_Template_div_expansionDetails_3_listener($event) { return ctx.getClassData($event); });
        ɵngcc0.ɵɵelementEnd();
        ɵngcc0.ɵɵelementEnd();
    } }, directives: function () { return [ResizableDirective]; }, styles: [".wrapper[_ngcontent-%COMP%]{display:flex;justify-content:flex-end}.content[_ngcontent-%COMP%]{flex:1}.bar[_ngcontent-%COMP%]{position:absolute;top:0;bottom:0;width:2px;height:60px;margin-right:-8px;justify-self:flex-end;border-left:2px solid transparent;border-right:2px solid transparent;background-clip:content-box;cursor:ew-resize;opacity:0;transition:opacity .3s}.bar[_ngcontent-%COMP%]:active, .bar[_ngcontent-%COMP%]:hover{opacity:1}"] });
ResizeComponent.propDecorators = {
    width: [{ type: HostBinding, args: ["style.width.px",] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ResizeComponent, [{
        type: Component,
        args: [{
                selector: 'th[resize]',
                template: "<div class=\"wrapper\">\r\n\t<div class=\"content\">\r\n\t\t<ng-content></ng-content>\r\n\t</div>\r\n\t<div class=\"bar\" (resize)=\"onResize($event)\" (expansionDetails)=\"getClassData($event)\"></div>\r\n</div>",
                styles: [".wrapper{display:flex;justify-content:flex-end}.content{flex:1}.bar{position:absolute;top:0;bottom:0;width:2px;height:60px;margin-right:-8px;justify-self:flex-end;border-left:2px solid transparent;border-right:2px solid transparent;background-clip:content-box;cursor:ew-resize;opacity:0;transition:opacity .3s}.bar:active,.bar:hover{opacity:1}"]
            }]
    }], function () { return []; }, { width: [{
            type: HostBinding,
            args: ["style.width.px"]
        }] }); })();

class ResizableDirective {
    constructor(documentRef, elementRef) {
        this.elementRef = elementRef;
        this.expansionDetails = new EventEmitter();
        this.resize = fromEvent(this.elementRef.nativeElement, "mousedown").pipe(tap(e => e.preventDefault()), switchMap(() => {
            const { width, right } = this.elementRef.nativeElement
                .closest("th")
                .getBoundingClientRect();
            console.log('right', this.elementRef.nativeElement.closest("th").classList);
            this.expansionDetails.emit({ classIdentifier: this.elementRef.nativeElement.closest("th").classList[0] });
            return fromEvent(this._document, "mousemove").pipe(map(({ clientX }) => width + clientX - right), distinctUntilChanged(), takeUntil(fromEvent(this._document, "mouseup")));
        }));
        this._document = documentRef;
    }
}
ResizableDirective.ɵfac = function ResizableDirective_Factory(t) { return new (t || ResizableDirective)(ɵngcc0.ɵɵdirectiveInject(DOCUMENT), ɵngcc0.ɵɵdirectiveInject(ElementRef)); };
ResizableDirective.ɵdir = ɵngcc0.ɵɵdefineDirective({ type: ResizableDirective, selectors: [["", "resize", ""]], outputs: { expansionDetails: "expansionDetails", resize: "resize" } });
ResizableDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] }
];
ResizableDirective.propDecorators = {
    expansionDetails: [{ type: Output }],
    resize: [{ type: Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ResizableDirective, [{
        type: Directive,
        args: [{
                selector: '[resize]'
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }, { type: ɵngcc0.ElementRef, decorators: [{
                type: Inject,
                args: [ElementRef]
            }] }]; }, { expansionDetails: [{
            type: Output
        }], resize: [{
            type: Output
        }] }); })();

class ResizableModule {
}
ResizableModule.ɵfac = function ResizableModule_Factory(t) { return new (t || ResizableModule)(); };
ResizableModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: ResizableModule });
ResizableModule.ɵinj = ɵngcc0.ɵɵdefineInjector({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(ResizableModule, { declarations: [ResizeComponent, ResizableDirective], exports: [ResizeComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(ResizableModule, [{
        type: NgModule,
        args: [{
                declarations: [ResizeComponent, ResizableDirective],
                exports: [ResizeComponent]
            }]
    }], null, null); })();

class NewLibDemoModule {
}
NewLibDemoModule.ɵfac = function NewLibDemoModule_Factory(t) { return new (t || NewLibDemoModule)(); };
NewLibDemoModule.ɵmod = ɵngcc0.ɵɵdefineNgModule({ type: NewLibDemoModule });
NewLibDemoModule.ɵinj = ɵngcc0.ɵɵdefineInjector({ providers: [DatePipe], imports: [[
            BrowserModule,
            CommonModule,
            FormsModule,
            MaterialModule,
            ResizableModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NewLibDemoModule, { declarations: function () { return [NewLibDemoComponent, LibProfitlossComponent, SortDirective, PricerangePipe]; }, imports: function () { return [BrowserModule,
        CommonModule,
        FormsModule, MaterialModule, ResizableModule]; }, exports: function () { return [NewLibDemoComponent, LibProfitlossComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NewLibDemoModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    NewLibDemoComponent,
                    LibProfitlossComponent,
                    SortDirective,
                    PricerangePipe
                ],
                imports: [
                    BrowserModule,
                    CommonModule,
                    FormsModule,
                    MaterialModule,
                    ResizableModule
                ],
                providers: [DatePipe],
                exports: [
                    NewLibDemoComponent,
                    LibProfitlossComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of new-lib-demo
 */

/**
 * Generated bundle index. Do not edit.
 */

export { LibProfitlossComponent, NewLibDemoComponent, NewLibDemoModule, NewLibDemoService, SortDirective, PricerangePipe as ɵa, MaterialModule as ɵb, ResizableModule as ɵc, ResizeComponent as ɵd, ResizableDirective as ɵe };

//# sourceMappingURL=new-lib-demo.js.map