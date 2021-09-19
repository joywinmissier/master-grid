export declare class Sort {
    private sortOrder;
    private collator;
    constructor();
    startSort(property: any, order: any, type?: string): (a: any, b: any) => number;
    recursiveSort(listToSort: any, sortingProperty: any, sortOrder: any): void;
}
