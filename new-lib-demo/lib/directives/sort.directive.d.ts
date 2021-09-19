import { ElementRef, Renderer2, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class SortDirective {
    private renderer;
    private targetElem;
    appSort: Array<any>;
    sortDetailsEvent: EventEmitter<any>;
    constructor(renderer: Renderer2, targetElem: ElementRef);
    sortData(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SortDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<SortDirective, "[appSort]", never, { "appSort": "appSort"; }, { "sortDetailsEvent": "sortDetailsEvent"; }, never>;
}

//# sourceMappingURL=sort.directive.d.ts.map