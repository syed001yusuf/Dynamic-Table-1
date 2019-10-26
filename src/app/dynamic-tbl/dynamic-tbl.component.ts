import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-tbl',
  templateUrl: './dynamic-tbl.component.html',
  styleUrls: ['./dynamic-tbl.component.css']
})
export class DynamicTblComponent implements OnInit {
  columnNum: number = null;
  rowNum: number = null;
  testData: any = [
    {
      "Wafer": "Test2",
      "ProcessSpec": "A",
      "ToWorkflow": "DRUBR123",
      "ToSpec": "1",
      "ToSpecDescription": "Spec out of range"
    }, {
      "Wafer": "Test2",
      "ProcessSpec": "B",
      "ToWorkflow": "DRUBR456",
      "ToSpec": "1",
      "ToSpecDescription": "Spec in range"
    }, {
      "Wafer": "Test3",
      "ProcessSpec": "C",
      "ToWorkflow": "DRUBR789",
      "ToSpec": "1",
      "ToSpecDescription": "Spec out of range"
    }, {
      "Wafer": "Test4",
      "ProcessSpec": "D",
      "ToWorkflow": "DRUBR101112",
      "ToSpec": "1",
      "ToSpecDescription": "Spec in range"
    }
  ];
  testJSONData: any = [];
  extraColumnsData: any = [
    {
      "Equipment": "EQP123",
      "HoldReason": "reason1",
      "ReworkReason": "reason2",
      "DisplayTransactionDate": "22-02-2019",
      "Transaction": "Test121",
      "Employee": "zaid@123"
    },
    {
      "Equipment": "EQP123",
      "HoldReason": "reason3",
      "ReworkReason": "reason4",
      "DisplayTransactionDate": "22-02-2019",
      "Transaction": "Test654",
      "Employee": "birbal@333"
    }, {
      "Equipment": "EQP123",
      "HoldReason": "reason5",
      "ReworkReason": "reason6",
      "DisplayTransactionDate": "22-02-2019",
      "Transaction": "Test12355",
      "Employee": "karan@888"
    }, {
      "Equipment": "EQP123",
      "HoldReason": "reason7",
      "ReworkReason": "reason8",
      "DisplayTransactionDate": "22-02-2019",
      "Transaction": "Test999",
      "Employee": "vijay@321"
    }
  ];
  tblObj: any = {
    tblColumns: [],
    tblBody: []
  };

  constructor() { }

  ngOnInit() {
  }

  generateJSONObject() {
    debugger;
    this.testJSONData = this.testData;
    for (let key in this.testJSONData[0])
      this.tblObj.tblColumns.push(key);
    for (var index in this.testJSONData)
      this.tblObj.tblBody.push(Object.values(this.testJSONData[index]));
  }

  addSomeMoreColumns() {
    debugger;
    for (let key in this.extraColumnsData[0])
      this.tblObj.tblColumns.push(key);
    for (var index in this.extraColumnsData)
      for (let i of Object.values(this.extraColumnsData[index]))
        this.tblObj.tblBody[index].push(i);
  }

  clear() {
    this.testJSONData = [];
    this.tblObj.tblColumns = [];
    this.tblObj.tblBody = [];
  }
}
