import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  tableColumns: any;
  reportTableData: any;
  data: any;
  constructor(private api:ApiService){
    this.getData();
  }
  getData(){
    this.api.getPostData().subscribe((data:any)=>{
      this.data=data
    //   this.data = data.slice(0, data.length);
    // this.data=Object.keys(data[0]);
    // console.log(data)
      // console.log("Response",this.tableColumns);
    })
  }
}
