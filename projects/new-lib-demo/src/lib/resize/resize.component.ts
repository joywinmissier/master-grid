import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'th[resize]',
  templateUrl: './resize.component.html',
  styleUrls: ['./resize.component.scss']
})
export class ResizeComponent {

  @HostBinding("style.width.px")
  width: number | null = null;

  onResize(width: number) {
    width <= 150 ? this.width = 150 : this.width = width;
    // this.width = width;
    console.log(width)
  }

}
