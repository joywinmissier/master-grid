import { NgModule } from '@angular/core';
import { NewLibDemoComponent } from './new-lib-demo.component';
import { LibProfitlossComponent } from './lib-profitloss/lib-profitloss.component';
import { CommonModule } from '@angular/common';
import { SortDirective } from './directives/sort.directive';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';



@NgModule({
  declarations: [
    NewLibDemoComponent,
    LibProfitlossComponent,
    SortDirective
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    NewLibDemoComponent,
    LibProfitlossComponent
  ]
})
export class NewLibDemoModule { }
