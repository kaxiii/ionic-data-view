import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from '../data.service';

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {
  datos;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(json => {
      console.log('JSON Data: ');
      console.log(json);
      this.datos = JSON.stringify(json);
    })
  }

}
