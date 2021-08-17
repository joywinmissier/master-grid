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
          
            if (type === "date") {
                return this.sortData(new Date(a[property]), new Date(b[property]));
            }
  
            else {
                if(a.hasOwnProperty('subitems') ){
                  
                    if (order === "asc") {
                       
                        a['subitems'].sort((firstItem, secondItem) => firstItem[property] - secondItem[property]);
                        if(a['subitems'].length > 0){
                            a['subitems'].map((list)=>{
                                if(list.hasOwnProperty('subitems') && list['subitems'].length>0){
                                    list['subitems'].sort((firstItem, secondItem) => firstItem[property] - secondItem[property]);
                                }
                            });
                        }
                    }
                    else {

                        a['subitems'].sort((descFirstItem, descsecondItem) => descsecondItem[property] - descFirstItem[property]);
                        if(a['subitems'].length > 0){
                            a['subitems'].map((list)=>{
                                if(list.hasOwnProperty('subitems') && list['subitems'].length>0){
                                    list['subitems'].sort((descFirstItem, descsecondItem) => descsecondItem[property] - descFirstItem[property]);
                                }
                            });
                        }
                    }
                }
                if(b.hasOwnProperty('subitems') ){
         
                    if (order === "asc") {
                        
                        b['subitems'].sort((firstBSubitem, secondfBSubitem) => firstBSubitem[property] - secondfBSubitem[property]);

                        if(b['subitems'].length > 0){
                            b['subitems'].map((list)=>{
                                if(list.hasOwnProperty('subitems') && list['subitems'].length>0){
                                    list['subitems'].sort((firstBSubitem, secondfBSubitem) => firstBSubitem[property] - secondfBSubitem[property]);
                                }
                            });
                        }
                    }
                    else {
                        b['subitems'].sort((descfirstBSubitem, descsecondfBSubitem) => descsecondfBSubitem[property] - descfirstBSubitem[property]);
                        if(b['subitems'].length > 0){
                            b['subitems'].map((list)=>{
                                if(list.hasOwnProperty('subitems') && list['subitems'].length>0){
                                    list['subitems'].sort((descfirstBSubitem, descsecondfBSubitem) => descsecondfBSubitem[property] - descfirstBSubitem[property]);
                                }
                            });
                        }
                    }
                }
                return this.collator.compare(a[property], b[property]) * this.sortOrder;
                
                
            }
        }
    }
  
    private sortData(a, b) {
      console.log(a,b);
        if (a < b) {
            return -1 * this.sortOrder;
        } else if (a > b) {
            return 1 * this.sortOrder;
        } else {
            return 0 * this.sortOrder;
        }
    }
  }