import { Pipe } from '@angular/core';
export class PricerangePipe {
    constructor() {
        this.searchedItems = [];
    }
    transform(value, columnName, minValue, maxValue, deepSearch = false) {
        // if (!deepSearch) {
        if (minValue !== undefined && maxValue !== undefined && columnName !== undefined) {
            if (typeof (maxValue) !== "string") {
                console.log(columnName, minValue, maxValue);
                let validatedData;
                validatedData = value.filter(itemList => {
                    return Number(itemList[columnName]) >= minValue && Number(itemList[columnName]) < maxValue;
                });
                return validatedData;
            }
            else {
                return value.filter(itemList => Number(itemList[columnName]) >= minValue);
            }
        }
        else {
            return value;
        }
    }
    //   else {
    //     if (minValue !== undefined && maxValue !== undefined && columnName !== undefined) {
    //       this.searchedItems = [];
    //       this.key = minValue;
    //       this.prop = columnName;
    //       this.childrenPropName = 'subitems';
    //       let searchResult = this.searchRecursive(value);
    //       return searchResult;
    //     }
    //     return value;
    //   }
    // }
    searchRecursive(value) {
        for (var i = 0; i < value.length; i++) {
            if (Number(value[i][this.prop]) >= Number(this.key)) {
                this.searchedItems.push(value[i]);
            }
            else if (value[i][this.childrenPropName]) {
                if (value[i][this.childrenPropName].length > 0) {
                    this.searchRecursive(value[i][this.childrenPropName]);
                }
            }
        }
        return this.searchedItems;
    }
}
PricerangePipe.decorators = [
    { type: Pipe, args: [{
                name: 'priceRange'
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJpY2VyYW5nZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmV3LWxpYi1kZW1vL3NyYy9saWIvcGlwZXMvcHJpY2VyYW5nZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BELE1BQU0sT0FBTyxjQUFjO0lBSDNCO1FBTVUsa0JBQWEsR0FBZSxFQUFFLENBQUM7SUF3RHpDLENBQUM7SUFuREMsU0FBUyxDQUFDLEtBQVUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxhQUFzQixLQUFLO1FBRS9FLHFCQUFxQjtRQUNuQixJQUFJLFFBQVEsS0FBSyxTQUFTLElBQUksUUFBUSxLQUFLLFNBQVMsSUFBSSxVQUFVLEtBQUssU0FBUyxFQUFFO1lBQ2hGLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFDbEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLGFBQWEsQ0FBQztnQkFDbEIsYUFBYSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBRXRDLE9BQU8sTUFBTSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFBO2dCQUM1RixDQUFDLENBQUMsQ0FBQztnQkFDSCxPQUFPLGFBQWEsQ0FBQzthQUN0QjtpQkFDSTtnQkFDSCxPQUFPLEtBQUssQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDLElBQUksUUFBUSxDQUFDLENBQUE7YUFDMUU7U0FDRjthQUNJO1lBQ0gsT0FBTyxLQUFLLENBQUM7U0FDZDtJQUNILENBQUM7SUFDSCxXQUFXO0lBQ1gsMEZBQTBGO0lBQzFGLGlDQUFpQztJQUNqQyw2QkFBNkI7SUFDN0IsZ0NBQWdDO0lBQ2hDLDRDQUE0QztJQUM1Qyx3REFBd0Q7SUFDeEQsNkJBQTZCO0lBQzdCLFFBQVE7SUFDUixvQkFBb0I7SUFDcEIsTUFBTTtJQUdOLElBQUk7SUFFSixlQUFlLENBQUMsS0FBSztRQUNuQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNyQyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbkQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkM7aUJBQ0ksSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEVBQUU7Z0JBQ3hDLElBQUksS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQzlDLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7aUJBQ3ZEO2FBQ0Y7U0FDRjtRQUVELE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM1QixDQUFDOzs7WUE1REYsSUFBSSxTQUFDO2dCQUNKLElBQUksRUFBRSxZQUFZO2FBQ25CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUGlwZSwgUGlwZVRyYW5zZm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQFBpcGUoe1xyXG4gIG5hbWU6ICdwcmljZVJhbmdlJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUHJpY2VyYW5nZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuXHJcblxyXG4gIHByaXZhdGUgc2VhcmNoZWRJdGVtczogQXJyYXk8YW55PiA9IFtdO1xyXG4gIHByaXZhdGUga2V5OiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBwcm9wOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBjaGlsZHJlblByb3BOYW1lOiBzdHJpbmc7XHJcblxyXG4gIHRyYW5zZm9ybSh2YWx1ZTogYW55LCBjb2x1bW5OYW1lLCBtaW5WYWx1ZSwgbWF4VmFsdWUsIGRlZXBTZWFyY2g6IGJvb2xlYW4gPSBmYWxzZSk6IGFueSB7XHJcblxyXG4gICAgLy8gaWYgKCFkZWVwU2VhcmNoKSB7XHJcbiAgICAgIGlmIChtaW5WYWx1ZSAhPT0gdW5kZWZpbmVkICYmIG1heFZhbHVlICE9PSB1bmRlZmluZWQgJiYgY29sdW1uTmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiAobWF4VmFsdWUpICE9PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhjb2x1bW5OYW1lLCBtaW5WYWx1ZSwgbWF4VmFsdWUpO1xyXG4gICAgICAgICAgbGV0IHZhbGlkYXRlZERhdGE7XHJcbiAgICAgICAgICB2YWxpZGF0ZWREYXRhID0gdmFsdWUuZmlsdGVyKGl0ZW1MaXN0ID0+IHtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBOdW1iZXIoaXRlbUxpc3RbY29sdW1uTmFtZV0pID49IG1pblZhbHVlICYmIE51bWJlcihpdGVtTGlzdFtjb2x1bW5OYW1lXSkgPCBtYXhWYWx1ZVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICByZXR1cm4gdmFsaWRhdGVkRGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gdmFsdWUuZmlsdGVyKGl0ZW1MaXN0ID0+IE51bWJlcihpdGVtTGlzdFtjb2x1bW5OYW1lXSkgPj0gbWluVmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIC8vICAgZWxzZSB7XHJcbiAgLy8gICAgIGlmIChtaW5WYWx1ZSAhPT0gdW5kZWZpbmVkICYmIG1heFZhbHVlICE9PSB1bmRlZmluZWQgJiYgY29sdW1uTmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgLy8gICAgICAgdGhpcy5zZWFyY2hlZEl0ZW1zID0gW107XHJcbiAgLy8gICAgICAgdGhpcy5rZXkgPSBtaW5WYWx1ZTtcclxuICAvLyAgICAgICB0aGlzLnByb3AgPSBjb2x1bW5OYW1lO1xyXG4gIC8vICAgICAgIHRoaXMuY2hpbGRyZW5Qcm9wTmFtZSA9ICdzdWJpdGVtcyc7XHJcbiAgLy8gICAgICAgbGV0IHNlYXJjaFJlc3VsdCA9IHRoaXMuc2VhcmNoUmVjdXJzaXZlKHZhbHVlKTtcclxuICAvLyAgICAgICByZXR1cm4gc2VhcmNoUmVzdWx0O1xyXG4gIC8vICAgICB9XHJcbiAgLy8gICAgIHJldHVybiB2YWx1ZTtcclxuICAvLyAgIH1cclxuXHJcblxyXG4gIC8vIH1cclxuXHJcbiAgc2VhcmNoUmVjdXJzaXZlKHZhbHVlKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGlmIChOdW1iZXIodmFsdWVbaV1bdGhpcy5wcm9wXSkgPj0gTnVtYmVyKHRoaXMua2V5KSkge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoZWRJdGVtcy5wdXNoKHZhbHVlW2ldKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmICh2YWx1ZVtpXVt0aGlzLmNoaWxkcmVuUHJvcE5hbWVdKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlW2ldW3RoaXMuY2hpbGRyZW5Qcm9wTmFtZV0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgdGhpcy5zZWFyY2hSZWN1cnNpdmUodmFsdWVbaV1bdGhpcy5jaGlsZHJlblByb3BOYW1lXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuc2VhcmNoZWRJdGVtcztcclxuICB9XHJcblxyXG59XHJcbiJdfQ==