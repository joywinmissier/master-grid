import { Component } from '@angular/core';
import { LibProfitlossComponent } from 'new-lib-demo';
import { FilterConfiguration } from 'projects/new-lib-demo/src/lib/interface/plview.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = "Master-Grid";
  
  //stick first column
  stickColumn = true;

  //stick last column
  stickLastColumn = false;

  //show edit on table for column
  canEdit = false;

  //fix table header on scroll
  headerFix = false;

  //net savings data
  lastItem = [];

  //show sort option
  isFilter = true;

  //number of years
  noOfDuration = 10;

  //text to show on table th for each column
  headerText = 'Year';

  filterJSON : FilterConfiguration = {
    showSorting : true,
    showFiltering : true
  }

  oneTable = [
    {
      name: 'Target State',
      y1: '5020.00',
      y2: '10.00',
      y3: '220.00',
      y4: '2220.00',
      y5: '110.00',
      y6: '40.00',
      y7: '330.00',
      y8: '30.00',
      y9: '30.00',
      y10: '10.00',
      total: 22572.2
    },
    {
      name: 'Target State 1',
      y1: '5020.00',
      y2: '10.00',
      y3: '220.00',
      y4: '2220.00',
      y5: '110.00',
      y6: '40.00',
      y7: '330.00',
      y8: '30.00',
      y9: '30.00',
      y10: '10.00',
      total: 22572.2,
    },
    {
      name: 'Target State 2',
      y1: '5020.00',
      y2: '10.00',
      y3: '220.00',
      y4: '2220.00',
      y5: '110.00',
      y6: '40.00',
      y7: '330.00',
      y8: '30.00',
      y9: '30.00',
      y10: '10.00',
      total: 22572.2,
    },
    {
      name: 'Target State 3',
      y1: '5020.00',
      y2: '10.00',
      y3: '220.00',
      y4: '2220.00',
      y5: '110.00',
      y6: '40.00',
      y7: '330.00',
      y8: '30.00',
      y9: '30.00',
      y10: '10.00',
      total: 22572.2,
    }
  ]
  //pl view data
  data1 = [
    {
      name: 'Current State',
      y1: '1210.00',
      y2: '30.00',
      y3: '120.00',
      y4: '3110.00',
      y5: '23210.00',
      y6: '30.00',
      y7: '12340.00',
      y8: '54320.00',
      y9: '670.00',
      y10: '20.00',
      total: 94060,
      // 'expanded': false,
      subitems: [
        // {
        //   name: 'Mainframe',
        //   y1: '330.00',
        //   y2: '320.00',
        //   y3: '20.00',
        //   y4: '123789.00',
        //   y5: '230.00',
        //   y6: '20.00',
        //   y7: '10.00',
        //   y8: '10.00',
        //   y9: '20.00',
        //   y10: '30.00',
        //   total: 22572.2,
        //   // 'expanded': false,
        //   subitems: [
        //     {
        //       name: 'Hardware, Software and Data Center Facilities',
        //       y1: '230.00',
        //       y2: '120.00',
        //       y3: '87654.00',
        //       y4: '230.00',
        //       y5: '110.00',
        //       y6: '50.00',
        //       y7: '9876.00',
        //       y8: '20.00',
        //       y9: '670.00',
        //       y10: '0.00',
        //       total: 22572.2
        //       // 'expanded': false,
        //     },
        //     {
        //       name: 'Labour and Operations',
        //       y1: '54320.00',
        //       y2: '54320.00',
        //       y3: '2312.00',
        //       y4: '10.00',
        //       y5: '310.00',
        //       y6: '2220.00',
        //       y7: '10.00',
        //       y8: '340.00',
        //       y9: '20.00',
        //       y10: '0.00',
        //       total: 22572.2
        //       // 'expanded': false,
        //     },
        //     {
        //       name: 'Third Party',
        //       y1: '230.00',
        //       y2: '2320.00',
        //       y3: '1230.00',
        //       y4: '340.00',
        //       y5: '210.00',
        //       y6: '650.00',
        //       y7: '20.00',
        //       y8: '900.00',
        //       y9: '10.00',
        //       y10: '10.00',
        //       total: 22572.2
        //       // 'expanded': false,
        //     }
        //   ]
        // },
        // {
        //   name: 'Midrange',
        //   y1: '980.00',
        //   y2: '870.00',
        //   y3: '20.00',
        //   y4: '30.00',
        //   y5: '440.00',
        //   y6: '30.00',
        //   y7: '30.00',
        //   y8: '20.00',
        //   y9: '10.00',
        //   y10: '10.00',
        //   total: 22572.2,
        //   // 'expanded': false,
        //   subitems: []
        // }
      ]
    },
    {
      name: 'Target State',
      y1: '5020.00',
      y2: '10.00',
      y3: '220.00',
      y4: '2220.00',
      y5: '110.00',
      y6: '40.00',
      y7: '330.00',
      y8: '30.00',
      y9: '30.00',
      y10: '10.00',
      total: 22572.2,
      // 'expanded': false,
      subitems: [
        {
          name: 'Mainframe',
          y1: '10.00',
          y2: '10.00',
          y3: '20.00',
          y4: '330.00',
          y5: '340.00',
          y6: '40.00',
          y7: '30.00',
          y8: '20.00',
          y9: '10.00',
          y10: '20.00',
          total: 22572.2,
          // 'expanded': false,
          subitems: [
            {
              name: 'Hardware, Software and Data Center Facilities',
              y1: '10.00',
              y2: '20.00',
              y3: '340.00',
              y4: '330.00',
              y5: '20.00',
              y6: '10.00',
              y7: '10.00',
              y8: '30.00',
              y9: '440.00',
              y10: '30.00',
              total: 22572.2,
              // 'expanded': false,
              subitems:[
                {
                  name: 'Third Party',
                  y1: '10.00',
                  y2: '20.00',
                  y3: '30.00',
                  y4: '4440.00',
                  y5: '30.00',
                  y6: '220.00',
                  y7: '30.00',
                  y8: '20.00',
                  y9: '0.00',
                  y10: '10.00',
                  total: 22572.2
                  // 'expanded': false,
                },
                {
                  name: 'Third Party 1',
                  y1: '100.00',
                  y2: '20.00',
                  y3: '30.00',
                  y4: '4440.00',
                  y5: '30.00',
                  y6: '220.00',
                  y7: '30.00',
                  y8: '20.00',
                  y9: '0.00',
                  y10: '10.00',
                  total: 22572.2
                  // 'expanded': false,
                },
                {
                  name: 'Third Party 2',
                  y1: '20.00',
                  y2: '20.00',
                  y3: '30.00',
                  y4: '4440.00',
                  y5: '30.00',
                  y6: '220.00',
                  y7: '30.00',
                  y8: '20.00',
                  y9: '0.00',
                  y10: '10.00',
                  total: 22572.2
                  // 'expanded': false,
                },
                {
                  name: 'Third Party 3',
                  y1: '200.00',
                  y2: '20.00',
                  y3: '30.00',
                  y4: '4440.00',
                  y5: '30.00',
                  y6: '220.00',
                  y7: '30.00',
                  y8: '20.00',
                  y9: '0.00',
                  y10: '10.00',
                  total: 22572.2
                  // 'expanded': false,
                }
              ]
            },
            {
              name: 'Labour and Operations',
              y1: '120.00',
              y2: '20.00',
              y3: '3440.00',
              y4: '330.00',
              y5: '220.00',
              y6: '220.00',
              y7: '220.00',
              y8: '110.00',
              y9: '340.00',
              y10: '2220.00',
              total: 22572.2
              // 'expanded': false,
            },
            {
              name: 'Third Party',
              y1: '1.00',
              y2: '20.00',
              y3: '30.00',
              y4: '4440.00',
              y5: '30.00',
              y6: '220.00',
              y7: '30.00',
              y8: '20.00',
              y9: '0.00',
              y10: '10.00',
              total: 22572.2
              // 'expanded': false,
            }
          ]
        },
        {
          name: 'Midrange',
          y1: '310.00',
          y2: '220.00',
          y3: '220.00',
          y4: '330.00',
          y5: '3210.00',
          y6: '20.00',
          y7: '10.00',
          y8: '20.00',
          y9: '1.00',
          y10: '22.00',
          total: 22572.2,
          // 'expanded': false,
          subitems: []
        }
      ]
    },
    {
      name: 'Migration',
      y1: '12000.00',
      y2: '230.00',
      y3: '10.00',
      y4: '10.00',
      y5: '10.00',
      y6: '20.00',
      y7: '20.00',
      y8: '3330.00',
      y9: '30.00',
      y10: '30.00',
      total: 22572.2,
      // 'expanded': false,
      category: 'A',
      subitems: [
        {
          name: 'Migration Spend',
          y1: '1200.00',
          y2: '0.00',
          y3: '0.00',
          y4: '0.00',
          y5: '0.00',
          y6: '0.00',
          y7: '0.00',
          y8: '0.00',
          y9: '0.00',
          y10: '0.00',
          total: 22572.2,
          // 'expanded': false,
          subitems: []
        },
        {
          name: 'One Time Spend',
          y1: '16.00',
          y2: '50.00',
          y3: '10.00',
          y4: '1.00',
          y5: '30.00',
          y6: '10.00',
          y7: '20.00',
          y8: '40.00',
          y9: '50.00',
          y10: '60.00',
          total: 22572.2,
          // 'expanded': false,
          subitems: []
        },
        {
          name: 'Investment',
          y1: '4590.00',
          y2: '0.00',
          y3: '220.00',
          y4: '10.00',
          y5: '230.00',
          y6: '30.00',
          y7: '0.00',
          y8: '0.00',
          y9: '10.00',
          y10: '5.00',
          total: 22572.2,
          // 'expanded': false,
          subitems: []
        },
        {
          name: 'Penalty',
          y1: '10000.00',
          y2: '0.00',
          y3: '30.00',
          y4: '0.00',
          y5: '40.00',
          y6: '1.00',
          y7: '0.00',
          y8: '20.00',
          y9: '110.00',
          y10: '220.00',
          total: 22572.2,
          // 'expanded': false,
          subitems: []
        }
      ]
    },
    {
      name: 'Net Savings',
      total: 22572.2,
      y1: 5194.46,
      y2: 8560.45,
      y3: 8817.28,
      y4: 0,
      y5: 0,
      y6: 0,
      y7: 0,
      y8: 0,
      y9: 0,
      y10: 0,
      // 'expanded': false,
      subitems: []
    }
  ];

  constructor(){
   
  //poping last data from array as net savings
   this.lastItem.push(this.data1.pop());

  }

}
