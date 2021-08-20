export class Sort {

    private sortOrder = 1;
    private collator = new Intl.Collator(undefined, {
        numeric: true,
        sensitivity: "base",
    });
  
  
    constructor() {
    }
  
    public startSort(property, order, type = "") {
        if (order === "desc") {
            this.sortOrder = -1;
        }
        return (a, b) => {
          
                 if(a.hasOwnProperty('subitems') ){
                      this.recursiveSort(a['subitems'],property,order)
                    }
                 if(b.hasOwnProperty('subitems')) {
                      this.recursiveSort(a['subitems'],property,order)
                    }
                return this.collator.compare(a[property], b[property]) * this.sortOrder;
    
        }
    }

    recursiveSort(listToSort, sortingProperty,sortOrder){
            sortOrder == 'asc' ?   listToSort.sort((firstBSubitem, secondfBSubitem) => firstBSubitem[sortingProperty] - secondfBSubitem[sortingProperty])
                               :   listToSort.sort((descFirstItem, descsecondItem) => descsecondItem[sortingProperty] - descFirstItem[sortingProperty]);
     
                if(listToSort.length > 0){
                    listToSort.map((listSort)=>{
                        if(listSort.hasOwnProperty('subitems')){
                         this.recursiveSort(listSort['subitems'],sortingProperty,sortOrder);
                        }
                    });
                }
            }
  }