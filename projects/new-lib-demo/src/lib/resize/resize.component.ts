import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'th[resize]',
  templateUrl: './resize.component.html',
  styleUrls: ['./resize.component.scss']
})
export class ResizeComponent {

  @HostBinding("style.width.px")
  width: number | null = null;

  tempWidth;

  className;

  onResize(width: number) {
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
