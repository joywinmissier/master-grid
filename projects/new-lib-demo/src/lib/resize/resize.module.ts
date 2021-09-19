import {NgModule} from '@angular/core';
import {ResizeComponent} from './resize.component';
import {ResizableDirective} from './resize.directive';

@NgModule({
    declarations: [ResizeComponent, ResizableDirective],
    exports: [ResizeComponent],
})
export class ResizableModule {}
