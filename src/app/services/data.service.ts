import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http : HttpClient) { }

  // public getData(url :string) : Observable<any>{
  //   return this.http.get(url); both are same 
  // }

  public getData(url :string) {
    return this.http.get(url);
  }

  
}
