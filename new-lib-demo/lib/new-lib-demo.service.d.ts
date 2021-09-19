import { DatePipe } from '@angular/common';
import * as ɵngcc0 from '@angular/core';
export declare class NewLibDemoService {
    private datePipe;
    dataForXSLX: any[];
    dummExcelDT: any[];
    constructor(datePipe: DatePipe);
    getSeperation(dumData: any, startIndex?: number, forExcel?: boolean, selectedExport?: boolean): any[];
    removeGargabeKeyValue(flattenFilter: any): void;
    generateExcel(dataForExcel: any, titleForExcel: any, sheetNameForExcel: any, dataForValues: any): Promise<void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<NewLibDemoService, never>;
}

//# sourceMappingURL=new-lib-demo.service.d.ts.map