import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }
  Get_New_Product(){
  return  this.http.get('https://fakestoreapi.com/products');
  }
}
