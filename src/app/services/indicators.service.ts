import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Indicators } from '../modules/indicators';


@Injectable({
  providedIn: 'root'
})
export class IndicatorsService {
  apiUrl = "/assets/data/indicators.json";
  constructor(private http : HttpClient) { }

  findAll(){
    return this.http.get<Indicators>(this.apiUrl);
  }
}
