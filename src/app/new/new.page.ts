import { Component, OnInit } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})

export class NewPage implements OnInit {

  constructor(private http: HTTP) { }

  ngOnInit() {
    //this.getJSON();
  }

  public getJSON() {
    this.http.get('http://ionic.io', {}, {})
    .then(data => {

      console.log(data.status);
      console.log(data.data); // data received by server
      console.log(data.headers);

    })
    .catch(error => {

      console.log(error.status);
      console.log(error.error); // error message as string
      console.log(error.headers);

    });
  }
}
