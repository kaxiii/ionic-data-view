import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {
  datos;
  gag;
  id;
  current_data = 0;
  swipes = 0;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getData().subscribe(json => {
      console.log('JSON Data: ');
      console.log(json);
      this.datos = json;
      this.gag = (json['data'][this.current_data]['data']);
      this.id = this.datos['data'][this.current_data]['id'];
      //this.datos = json;
    })
  }

  prev() {
    console.log('Prev');
    if(this.current_data == 0) {
      this.current_data = this.datos['data'].length - 1;
    }
    else {
      this.current_data--;
    }

    this.gag = this.datos['data'][this.current_data]['data'];
    this.id = this.datos['data'][this.current_data]['id'];
  }

  next() {
    console.log('Next');
    if(this.current_data == this.datos['data'].length - 1) {
      this.current_data = 0
    }
    else {
      this.current_data++;
    }
    this.gag = this.datos['data'][this.current_data]['data'];
    this.id = this.datos['data'][this.current_data]['id'];
  }

}
