import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApitestService {

  constructor(private http: HttpClient) { }

  getRandomApi(){
    return this.http.get('https://api.polygon.io/v2/aggs/grouped/locale/us/market/stocks/2021-07-20?adjusted=true&apiKey=pet0XSfSTp8dxNISh_aK0gvYJl4hQHD6');
  }
}
