import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sliderbar';
  constructor(private api:ApiService){
    this.getData()
  }
  getData(){
    this.api.getPostData().subscribe((data:any)=>{
      console.log(data)
    })
  }
}
