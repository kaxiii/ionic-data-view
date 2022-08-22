import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() {
    let data = this.http.get('https://kustod.io/s/2LnBt3dhPKXK71OpKspTvF.json');
    console.log('Datos ' + data);
    console.log(data);
    return data;
  }
}
 