import { PipeTransform } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export declare class PricerangePipe implements PipeTransform {
    private searchedItems;
    private key;
    private prop;
    private childrenPropName;
    transform(value: any, columnName: any, minValue: any, maxValue: any, deepSearch?: boolean): any;
    searchRecursive(value: any): any[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<PricerangePipe, never>;
    static ɵpipe: ɵngcc0.ɵɵPipeDefWithMeta<PricerangePipe, "priceRange">;
}

//# sourceMappingURL=pricerange.pipe.d.ts.map