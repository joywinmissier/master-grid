import { Component, HostBinding } from '@angular/core';
export class ResizeComponent {
    constructor() {
        this.width = null;
    }
    onResize(width) {
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
ResizeComponent.decorators = [
    { type: Component, args: [{
                selector: 'th[resize]',
                template: "<div class=\"wrapper\">\r\n\t<div class=\"content\">\r\n\t\t<ng-content></ng-content>\r\n\t</div>\r\n\t<div class=\"bar\" (resize)=\"onResize($event)\" (expansionDetails)=\"getClassData($event)\"></div>\r\n</div>",
                styles: [".wrapper{display:flex;justify-content:flex-end}.content{flex:1}.bar{position:absolute;top:0;bottom:0;width:2px;height:60px;margin-right:-8px;justify-self:flex-end;border-left:2px solid transparent;border-right:2px solid transparent;background-clip:content-box;cursor:ew-resize;opacity:0;transition:opacity .3s}.bar:active,.bar:hover{opacity:1}"]
            },] }
];
ResizeComponent.propDecorators = {
    width: [{ type: HostBinding, args: ["style.width.px",] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzaXplLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25ldy1saWItZGVtby9zcmMvbGliL3Jlc2l6ZS9yZXNpemUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsV0FBVyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBTy9ELE1BQU0sT0FBTyxlQUFlO0lBTDVCO1FBUUUsVUFBSyxHQUFrQixJQUFJLENBQUM7SUFnQzlCLENBQUM7SUExQkMsUUFBUSxDQUFDLEtBQWE7UUFDbEIsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFNBQVMsRUFBRTtZQUNoQyxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksaUJBQWlCLEVBQUU7Z0JBQ3ZDLEtBQUssSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQzthQUN0RDtpQkFDSTtnQkFDSCxLQUFLLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDdEQ7U0FDRjthQUNJO1lBQ0gsS0FBSyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1NBQ3REO1FBR0gsc0JBQXNCO0lBQ3hCLENBQUM7SUFFRCxZQUFZLENBQUMsU0FBUztRQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlDLG9GQUFvRjtRQUNwRixtRUFBbUU7UUFDbkUsMEVBQTBFO1FBQzFFLElBQUk7SUFDTixDQUFDOzs7WUFyQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2dCQUN0QixnT0FBc0M7O2FBRXZDOzs7b0JBR0UsV0FBVyxTQUFDLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBIb3N0QmluZGluZyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICd0aFtyZXNpemVdJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vcmVzaXplLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9yZXNpemUuY29tcG9uZW50LnNjc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVzaXplQ29tcG9uZW50IHtcclxuXHJcbiAgQEhvc3RCaW5kaW5nKFwic3R5bGUud2lkdGgucHhcIilcclxuICB3aWR0aDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcblxyXG4gIHRlbXBXaWR0aDtcclxuXHJcbiAgY2xhc3NOYW1lO1xyXG5cclxuICBvblJlc2l6ZSh3aWR0aDogbnVtYmVyKSB7XHJcbiAgICAgIGlmICh0aGlzLmNsYXNzTmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2xhc3NOYW1lID09ICdjYXRlZ29yeS1kZXNpZ24nKSB7XHJcbiAgICAgICAgICB3aWR0aCA8PSAyNTAgPyB0aGlzLndpZHRoID0gMjUwIDogdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHdpZHRoIDw9IDE1MCA/IHRoaXMud2lkdGggPSAxNTAgOiB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHdpZHRoIDw9IDE1MCA/IHRoaXMud2lkdGggPSAxNTAgOiB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgLy8gdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q2xhc3NEYXRhKGNsYXNzTmFtZSkge1xyXG4gICAgdGhpcy5jbGFzc05hbWUgPSBjbGFzc05hbWVbJ2NsYXNzSWRlbnRpZmllciddO1xyXG4gICAgLy8gaWYoY2xhc3NOYW1lICE9PSB1bmRlZmluZWQgJiYgY2xhc3NOYW1lWydjbGFzc0lkZW50aWZpZXInXSA9PSAnY2F0ZWdvcnktZGVzaWduJyl7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKCdJRicsY2xhc3NOYW1lWydjbGFzc0lkZW50aWZpZXInXSx0aGlzLnRlbXBXaWR0aCk7XHJcbiAgICAvLyAgIHRoaXMudGVtcFdpZHRoIDwgMjUwID8gdGhpcy53aWR0aCA9IDI1MCA6IHRoaXMud2lkdGggPSB0aGlzLnRlbXBXaWR0aFxyXG4gICAgLy8gfVxyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==