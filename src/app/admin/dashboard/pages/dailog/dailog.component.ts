import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {ApiService} from 'src/app/api.service';
@Component({
  selector: 'app-dailog',
  templateUrl: './dailog.component.html',
  styleUrls: ['./dailog.component.scss']
})
export class DailogComponent implements OnInit  {
  surveyYearOption: any;
  
item: any;

constructor(private api:ApiService) { }

ngOnInit(): void {
  // console.log("inside report64");
this.loadSurveyYear();
    }
  loadSurveyYear(){
    this.api.getdatasurveyyear().subscribe((res: any)=>{
      console.log('survey year',res);
      this.surveyYearOption=res;
      this.surveyYearOption= this.surveyYearOption.slice();
    })
  }
}
