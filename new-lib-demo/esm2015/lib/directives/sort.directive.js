import { Directive, Input, ElementRef, Renderer2, HostListener, Output, EventEmitter } from '@angular/core';
import { Sort } from '../utils/sort';
export class SortDirective {
    constructor(renderer, targetElem) {
        this.renderer = renderer;
        this.targetElem = targetElem;
        this.sortDetailsEvent = new EventEmitter();
    }
    sortData() {
        // Create Object of Sort Class
        const sort = new Sort();
        // Get Reference Of Current Clicked Element
        const elem = this.targetElem.nativeElement;
        // Get In WHich Order list should be sorted by default it should be set to desc on element attribute
        const order = elem.getAttribute("data-order");
        // Get The Property Type specially set [data-type=date] if it is date field
        const type = elem.getAttribute("data-type");
        // Get The Property Name from Element Attribute
        const property = elem.getAttribute("data-name");
        if (order === "desc") {
            this.appSort.sort(sort.startSort(property, order, type));
            elem.setAttribute("data-order", "asc");
        }
        else {
            this.appSort.sort(sort.startSort(property, order, type));
            elem.setAttribute("data-order", "desc");
        }
        console.log(property, order, type);
        this.sortDetailsEvent.emit({ property: property, order: order, type: type });
    }
}
SortDirective.decorators = [
    { type: Directive, args: [{
                selector: '[appSort]'
            },] }
];
SortDirective.ctorParameters = () => [
    { type: Renderer2 },
    { type: ElementRef }
];
SortDirective.propDecorators = {
    appSort: [{ type: Input }],
    sortDetailsEvent: [{ type: Output }],
    sortData: [{ type: HostListener, args: ["click",] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29ydC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZXctbGliLWRlbW8vc3JjL2xpYi9kaXJlY3RpdmVzL3NvcnQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBQyxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFM0csT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU1yQyxNQUFNLE9BQU8sYUFBYTtJQUl4QixZQUFvQixRQUFtQixFQUFVLFVBQXNCO1FBQW5ELGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRDdELHFCQUFnQixHQUFxQixJQUFJLFlBQVksRUFBRSxDQUFDO0lBQ1MsQ0FBQztJQUc1RSxRQUFRO1FBRU4sOEJBQThCO1FBQzlCLE1BQU0sSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDeEIsMkNBQTJDO1FBQzNDLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQzNDLG9HQUFvRztRQUNwRyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQzlDLDJFQUEyRTtRQUMzRSxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzVDLCtDQUErQztRQUMvQyxNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELElBQUksS0FBSyxLQUFLLE1BQU0sRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsQ0FBQztTQUN4QzthQUNJO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLFlBQVksQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDekM7UUFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFDLFFBQVEsRUFBRyxRQUFRLEVBQUUsS0FBSyxFQUFHLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQztJQUUvRSxDQUFDOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2FBQ3RCOzs7WUFQc0MsU0FBUztZQUFyQixVQUFVOzs7c0JBVWxDLEtBQUs7K0JBQ0wsTUFBTTt1QkFHTixZQUFZLFNBQUMsT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgSW5wdXQsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSG9zdExpc3RlbmVyLCBPdXRwdXQsRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTb3J0IH0gZnJvbSAnLi4vdXRpbHMvc29ydCc7XHJcblxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbYXBwU29ydF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb3J0RGlyZWN0aXZlIHtcclxuXHJcbiAgQElucHV0KCkgYXBwU29ydDogQXJyYXk8YW55PjtcclxuICBAT3V0cHV0KCkgc29ydERldGFpbHNFdmVudDpFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgdGFyZ2V0RWxlbTogRWxlbWVudFJlZikgeyB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoXCJjbGlja1wiKVxyXG4gIHNvcnREYXRhKCkge1xyXG4gICBcclxuICAgIC8vIENyZWF0ZSBPYmplY3Qgb2YgU29ydCBDbGFzc1xyXG4gICAgY29uc3Qgc29ydCA9IG5ldyBTb3J0KCk7XHJcbiAgICAvLyBHZXQgUmVmZXJlbmNlIE9mIEN1cnJlbnQgQ2xpY2tlZCBFbGVtZW50XHJcbiAgICBjb25zdCBlbGVtID0gdGhpcy50YXJnZXRFbGVtLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAvLyBHZXQgSW4gV0hpY2ggT3JkZXIgbGlzdCBzaG91bGQgYmUgc29ydGVkIGJ5IGRlZmF1bHQgaXQgc2hvdWxkIGJlIHNldCB0byBkZXNjIG9uIGVsZW1lbnQgYXR0cmlidXRlXHJcbiAgICBjb25zdCBvcmRlciA9IGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS1vcmRlclwiKTtcclxuICAgIC8vIEdldCBUaGUgUHJvcGVydHkgVHlwZSBzcGVjaWFsbHkgc2V0IFtkYXRhLXR5cGU9ZGF0ZV0gaWYgaXQgaXMgZGF0ZSBmaWVsZFxyXG4gICAgY29uc3QgdHlwZSA9IGVsZW0uZ2V0QXR0cmlidXRlKFwiZGF0YS10eXBlXCIpO1xyXG4gICAgLy8gR2V0IFRoZSBQcm9wZXJ0eSBOYW1lIGZyb20gRWxlbWVudCBBdHRyaWJ1dGVcclxuICAgIGNvbnN0IHByb3BlcnR5ID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJkYXRhLW5hbWVcIik7XHJcbiAgICBpZiAob3JkZXIgPT09IFwiZGVzY1wiKSB7XHJcbiAgICAgIHRoaXMuYXBwU29ydC5zb3J0KHNvcnQuc3RhcnRTb3J0KHByb3BlcnR5LCBvcmRlciwgdHlwZSkpO1xyXG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZShcImRhdGEtb3JkZXJcIiwgXCJhc2NcIik7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgdGhpcy5hcHBTb3J0LnNvcnQoc29ydC5zdGFydFNvcnQocHJvcGVydHksIG9yZGVyLCB0eXBlKSk7XHJcbiAgICAgIGVsZW0uc2V0QXR0cmlidXRlKFwiZGF0YS1vcmRlclwiLCBcImRlc2NcIik7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc29sZS5sb2cocHJvcGVydHksIG9yZGVyLCB0eXBlKTtcclxuICAgIHRoaXMuc29ydERldGFpbHNFdmVudC5lbWl0KHtwcm9wZXJ0eSA6IHByb3BlcnR5LCBvcmRlciA6IG9yZGVyLCB0eXBlOiB0eXBlfSk7XHJcbiAgIFxyXG4gIH1cclxuXHJcbn0iXX0=