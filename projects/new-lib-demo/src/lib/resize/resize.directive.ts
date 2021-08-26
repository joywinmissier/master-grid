import { DOCUMENT } from "@angular/common";
import { Directive, ElementRef, Inject, Output } from "@angular/core";
import {
  distinctUntilChanged,
  map,
  switchMap,
  takeUntil,
  tap
} from "rxjs/operators";
import { fromEvent } from "rxjs";


@Directive({
  selector: '[resize]'
})
export class ResizableDirective {

private _document?: Document;

  @Output()
  readonly resize = fromEvent<MouseEvent>(
    this.elementRef.nativeElement,
    "mousedown"
  ).pipe(
    tap(e => e.preventDefault()),
    switchMap(() => {
      const { width, right } = this.elementRef.nativeElement
        .closest("th")
        .getBoundingClientRect();

      return fromEvent<MouseEvent>(this._document, "mousemove").pipe(
        map(({ clientX }) => width + clientX - right),
        distinctUntilChanged(),
        takeUntil(fromEvent(this._document, "mouseup"))
      );
    })
  );

  constructor(
    @Inject(DOCUMENT) documentRef: any,
    @Inject(ElementRef)
    private readonly elementRef: ElementRef<HTMLElement>
  ) {
    this._document = documentRef as Document;
  }

}
