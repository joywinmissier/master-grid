import { NgModule } from '@angular/core';
import { NewLibDemoComponent } from './new-lib-demo.component';
import { LibProfitlossComponent } from './lib-profitloss/lib-profitloss.component';
import { CommonModule, DatePipe } from '@angular/common';
import { SortDirective } from './directives/sort.directive';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { PricerangePipe } from './pipes/pricerange.pipe';
import { ResizableModule } from './resize/resize.module';
export class NewLibDemoModule {
}
NewLibDemoModule.decorators = [
    { type: NgModule, args: [{
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
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3LWxpYi1kZW1vLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25ldy1saWItZGVtby9zcmMvbGliL25ldy1saWItZGVtby5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMvRCxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNuRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBd0J6RCxNQUFNLE9BQU8sZ0JBQWdCOzs7WUFwQjVCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osbUJBQW1CO29CQUNuQixzQkFBc0I7b0JBQ3RCLGFBQWE7b0JBQ2IsY0FBYztpQkFDZjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsYUFBYTtvQkFDYixZQUFZO29CQUNaLFdBQVc7b0JBQ1gsY0FBYztvQkFDZCxlQUFlO2lCQUNoQjtnQkFDRCxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7Z0JBQ3JCLE9BQU8sRUFBRTtvQkFDUCxtQkFBbUI7b0JBQ25CLHNCQUFzQjtpQkFDdkI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5ld0xpYkRlbW9Db21wb25lbnQgfSBmcm9tICcuL25ldy1saWItZGVtby5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBMaWJQcm9maXRsb3NzQ29tcG9uZW50IH0gZnJvbSAnLi9saWItcHJvZml0bG9zcy9saWItcHJvZml0bG9zcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIERhdGVQaXBlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU29ydERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlcy9zb3J0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IEJyb3dzZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1hdGVyaWFsTW9kdWxlIH0gZnJvbSAnLi9tYXRlcmlhbC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBQcmljZXJhbmdlUGlwZSB9IGZyb20gJy4vcGlwZXMvcHJpY2VyYW5nZS5waXBlJztcclxuaW1wb3J0IHsgUmVzaXphYmxlTW9kdWxlIH0gZnJvbSAnLi9yZXNpemUvcmVzaXplLm1vZHVsZSc7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgZGVjbGFyYXRpb25zOiBbXHJcbiAgICBOZXdMaWJEZW1vQ29tcG9uZW50LFxyXG4gICAgTGliUHJvZml0bG9zc0NvbXBvbmVudCxcclxuICAgIFNvcnREaXJlY3RpdmUsXHJcbiAgICBQcmljZXJhbmdlUGlwZVxyXG4gIF0sXHJcbiAgaW1wb3J0czogW1xyXG4gICAgQnJvd3Nlck1vZHVsZSxcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgTWF0ZXJpYWxNb2R1bGUsXHJcbiAgICBSZXNpemFibGVNb2R1bGVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW0RhdGVQaXBlXSxcclxuICBleHBvcnRzOiBbXHJcbiAgICBOZXdMaWJEZW1vQ29tcG9uZW50LFxyXG4gICAgTGliUHJvZml0bG9zc0NvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE5ld0xpYkRlbW9Nb2R1bGUgeyB9XHJcbiJdfQ==