import { DatePipe } from '@angular/common';
import { Injectable } from '@angular/core';

import { Workbook } from 'exceljs';
import * as fs from 'file-saver';

@Injectable({
  providedIn: 'root'
})
export class NewLibDemoService {

  dataForXSLX = [];

  dummExcelDT = [];

  constructor(private datePipe: DatePipe) { }

  // method to seperate subitems and make flat json
  getSeperation(dumData, startIndex = 0){
    startIndex == 0 ? this.dummExcelDT = [] : '';
    dumData.map((data)=>{
     
      if(data['checked']){
        this.dummExcelDT.push(data);
      }
      if(data.hasOwnProperty("subitems")){
        data['subitems'].length > 0 ? this.getSeperation(data['subitems'], 1) : '';
      }
    })
    this.dataForXSLX = [];
    this.dataForXSLX = JSON.parse(JSON.stringify(this.dummExcelDT));
    this.removeGargabeKeyValue(this.dataForXSLX);
    return this.dataForXSLX;
  }

  // remove unwanted json keys to avoid shown in excel 
  removeGargabeKeyValue(flattenFilter){
    flattenFilter.map((dataToFilter)=>{
      delete dataToFilter['subitems'];
      delete dataToFilter['expansion'];
      delete dataToFilter['checked'];
      delete dataToFilter['id'];
      delete dataToFilter['parentName'];
      delete dataToFilter['parentId'];
      delete dataToFilter['hasChild'];
    });
  }

  // method to generate excel and save as file .xlsx
  async generateExcel(dataForExcel, titleForExcel, sheetNameForExcel, dataForValues) {

      // Excel Title, Header, Data
      const title = titleForExcel;
      const header = Object.keys(dataForValues[0]).slice(0,-2);

      // Create workbook and worksheet
      const workbook = new Workbook();
      const worksheet = workbook.addWorksheet(sheetNameForExcel);

      // Add Row and formatting
      const titleRow = worksheet.addRow([title]);
      titleRow.font = { name: 'Comic Sans MS', family: 4, size: 16, underline: 'double', bold: true };
      worksheet.addRow([]);
      const subTitleRow = worksheet.addRow(['Date : ' + this.datePipe.transform(new Date(), 'medium')]);

      worksheet.mergeCells('A1:D2');

      // Blank Row
      worksheet.addRow([]);

      // Add Header Row
      const headerRow = worksheet.addRow(header);
    
      // Cell Style : Fill and Border
      headerRow.eachCell((cell, number) => {
        cell.font = {
          color: {argb: "ffffff"}
        }
        cell.fill = {
          type: 'pattern',
          pattern: 'solid',
          fgColor: { argb: '460073' },
          // bgColor: { argb: '460073' }
        };
        cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    });

    // Add Data and Conditional Formatting
    dataForExcel.forEach((d,index) => {

      if(dataForValues[index]['isParent']){
        worksheet.addRow([]);
        let sub = d.slice(0, -2);
        const row = worksheet.addRow(sub);
        row.getCell(1).font = {
          bold: true
        }
      }
      else{
        let sub1 = d.slice(0, -2);
        const row = worksheet.addRow(sub1);
        row.getCell(1).alignment = { indent: this.dummExcelDT[index]['index'] };

      }

    });

    worksheet.getColumn(1).width = 60;
    worksheet.getColumn(3).width = 30;
    worksheet.getColumn(4).width = 30;
    worksheet.addRow([]);


    // Footer Row
    const footerRow = worksheet.addRow(['Report Generated Using Master-Grid Angular Library']);
    footerRow.getCell(1).fill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFCCFFE5' }
    };
    footerRow.getCell(1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };

    // Merge Cells
    worksheet.mergeCells(`A${footerRow.number}:F${footerRow.number}`);

    // Generate Excel File with given name
    workbook.xlsx.writeBuffer().then((data: any) => {
      const blob = new Blob([data], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      fs.saveAs(blob, 'Profit Loss.xlsx');
    });
  }

}
