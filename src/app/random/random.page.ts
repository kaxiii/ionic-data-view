import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {

  constructor(private http: HttpClient) { 
    let data = this.http.get('https://kustod.io/s/2LnBt3dhPKXK71OpKspTvF.json');
    console.log('Datos ' + data);
    console.log(data);
  }

  ngOnInit() {
  }

}
