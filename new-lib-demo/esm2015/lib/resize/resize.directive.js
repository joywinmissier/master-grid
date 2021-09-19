import { DOCUMENT } from "@angular/common";
import { Directive, ElementRef, Inject, Output, EventEmitter } from "@angular/core";
import { distinctUntilChanged, map, switchMap, takeUntil, tap } from "rxjs/operators";
import { fromEvent } from "rxjs";
export class ResizableDirective {
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
ResizableDirective.decorators = [
    { type: Directive, args: [{
                selector: '[resize]'
            },] }
];
ResizableDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] }] },
    { type: ElementRef, decorators: [{ type: Inject, args: [ElementRef,] }] }
];
ResizableDirective.propDecorators = {
    expansionDetails: [{ type: Output }],
    resize: [{ type: Output }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ldy1saWItZGVtby9zcmMvbGliL3Jlc2l6ZS9yZXNpemUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFDLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNuRixPQUFPLEVBQ0wsb0JBQW9CLEVBQ3BCLEdBQUcsRUFDSCxTQUFTLEVBQ1QsU0FBUyxFQUNULEdBQUcsRUFDSixNQUFNLGdCQUFnQixDQUFDO0FBQ3hCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFNakMsTUFBTSxPQUFPLGtCQUFrQjtJQW1DN0IsWUFDb0IsV0FBZ0IsRUFFakIsVUFBbUM7UUFBbkMsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFsQzlDLHFCQUFnQixHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBR3hELFdBQU0sR0FBRyxTQUFTLENBQ3pCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUM3QixXQUFXLENBQ1osQ0FBQyxJQUFJLENBQ0osR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDLEVBQzVCLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDYixNQUFNLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYTtpQkFDbkQsT0FBTyxDQUFDLElBQUksQ0FBQztpQkFDYixxQkFBcUIsRUFBRSxDQUFDO1lBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQ3hFLENBQUM7WUFHQSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUMsZUFBZSxFQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDO1lBSTdHLE9BQU8sU0FBUyxDQUFhLElBQUksQ0FBQyxTQUFTLEVBQUUsV0FBVyxDQUFDLENBQUMsSUFBSSxDQUM1RCxHQUFHLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsQ0FBQyxLQUFLLEdBQUcsT0FBTyxHQUFHLEtBQUssQ0FBQyxFQUM3QyxvQkFBb0IsRUFBRSxFQUN0QixTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FDaEQsQ0FBQztRQUdKLENBQUMsQ0FBQyxDQUNILENBQUM7UUFRQSxJQUFJLENBQUMsU0FBUyxHQUFHLFdBQXVCLENBQUM7SUFDM0MsQ0FBQzs7O1lBNUNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTthQUNyQjs7OzRDQXFDSSxNQUFNLFNBQUMsUUFBUTtZQWxEQSxVQUFVLHVCQW1EekIsTUFBTSxTQUFDLFVBQVU7OzsrQkFqQ3JCLE1BQU07cUJBRUosTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERPQ1VNRU5UIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vblwiO1xyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEluamVjdCwgT3V0cHV0LEV2ZW50RW1pdHRlciB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7XHJcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXHJcbiAgbWFwLFxyXG4gIHN3aXRjaE1hcCxcclxuICB0YWtlVW50aWwsXHJcbiAgdGFwXHJcbn0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IGZyb21FdmVudCB9IGZyb20gXCJyeGpzXCI7XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbcmVzaXplXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlc2l6YWJsZURpcmVjdGl2ZSB7XHJcblxyXG5wcml2YXRlIF9kb2N1bWVudD86IERvY3VtZW50O1xyXG5cclxuQE91dHB1dCgpIGV4cGFuc2lvbkRldGFpbHMgOkV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cclxuICBAT3V0cHV0KClcclxuICByZWFkb25seSByZXNpemUgPSBmcm9tRXZlbnQ8TW91c2VFdmVudD4oXHJcbiAgICB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudCxcclxuICAgIFwibW91c2Vkb3duXCJcclxuICApLnBpcGUoXHJcbiAgICB0YXAoZSA9PiBlLnByZXZlbnREZWZhdWx0KCkpLFxyXG4gICAgc3dpdGNoTWFwKCgpID0+IHtcclxuICAgICAgY29uc3QgeyB3aWR0aCwgcmlnaHQgfSA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50XHJcbiAgICAgICAgLmNsb3Nlc3QoXCJ0aFwiKVxyXG4gICAgICAgIC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zb2xlLmxvZygncmlnaHQnLHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoXCJ0aFwiKS5jbGFzc0xpc3RcclxuICAgICAgICApO1xyXG5cclxuXHJcbiAgICAgICAgICB0aGlzLmV4cGFuc2lvbkRldGFpbHMuZW1pdCh7Y2xhc3NJZGVudGlmaWVyIDogdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xvc2VzdChcInRoXCIpLmNsYXNzTGlzdFswXX0pO1xyXG5cclxuICAgIFxyXG5cclxuICAgICAgcmV0dXJuIGZyb21FdmVudDxNb3VzZUV2ZW50Pih0aGlzLl9kb2N1bWVudCwgXCJtb3VzZW1vdmVcIikucGlwZShcclxuICAgICAgICBtYXAoKHsgY2xpZW50WCB9KSA9PiB3aWR0aCArIGNsaWVudFggLSByaWdodCksXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgICB0YWtlVW50aWwoZnJvbUV2ZW50KHRoaXMuX2RvY3VtZW50LCBcIm1vdXNldXBcIikpXHJcbiAgICAgICk7XHJcblxyXG4gICAgICBcclxuICAgIH0pXHJcbiAgKTtcclxuICBcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBkb2N1bWVudFJlZjogYW55LFxyXG4gICAgQEluamVjdChFbGVtZW50UmVmKVxyXG4gICAgcHJpdmF0ZSByZWFkb25seSBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PlxyXG4gICkge1xyXG4gICAgdGhpcy5fZG9jdW1lbnQgPSBkb2N1bWVudFJlZiBhcyBEb2N1bWVudDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==