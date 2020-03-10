import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerReturns } from '../modules/customer-returns'

@Injectable({
  providedIn: 'root'
})

export class CustomerRetursService {
  apiUrl = "/assets/data/customer_returns.json";
  constructor(private http : HttpClient) { }

  findAll(){
    return this.http.get<CustomerReturns>(this.apiUrl);
  }
}
