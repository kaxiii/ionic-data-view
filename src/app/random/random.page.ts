import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-random',
  templateUrl: './random.page.html',
  styleUrls: ['./random.page.scss'],
})
export class RandomPage implements OnInit {

  constructor(public http: HttpClientModule) { 
    /*let url = "https://www.reddit.com/r/gifs/new/.json?limit=10";

    this.http.get(url).map(res => res.json()).subscribe(data => {

        console.log(data);

    });*/
  }

  ngOnInit() {
  }

}
