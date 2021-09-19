import { ElementRef, EventEmitter } from "@angular/core";
import * as ɵngcc0 from '@angular/core';
export declare class ResizableDirective {
    private readonly elementRef;
    private _document?;
    expansionDetails: EventEmitter<any>;
    readonly resize: import("rxjs").Observable<number>;
    constructor(documentRef: any, elementRef: ElementRef<HTMLElement>);
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ResizableDirective, never>;
    static ɵdir: ɵngcc0.ɵɵDirectiveDefWithMeta<ResizableDirective, "[resize]", never, {}, { "expansionDetails": "expansionDetails"; "resize": "resize"; }, never>;
}

//# sourceMappingURL=resize.directive.d.ts.map