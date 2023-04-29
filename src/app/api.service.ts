import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { 
  }
  getPostData(){
    let url = 'https://jsonplaceholder.typicode.com/posts';
    return this.http.get(url);
  }
  getdatasurveyyear():Observable<any>{
    let url ='https://api1.he.nic.in/aishereports/getSurveyYear';
    return this.http.get(url);
      }
}
