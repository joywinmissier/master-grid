import { NgModule } from '@angular/core';
import { NewLibDemoComponent } from './new-lib-demo.component';
import { LibProfitlossComponent } from './lib-profitloss/lib-profitloss.component';
import { CommonModule } from '@angular/common';
import { SortDirective } from './directives/sort.directive';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { PricerangePipe } from './pipes/pricerange.pipe';
import { ResizableModule } from './resize/resize.module';



@NgModule({
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
  exports: [
    NewLibDemoComponent,
    LibProfitlossComponent
  ]
})
export class NewLibDemoModule { }
