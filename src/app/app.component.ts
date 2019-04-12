import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { map } from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  myData: any;

  constructor(private http: HttpClient) {

    this.http.get('https://jsonplaceholder.typicode.com/photos')
      .subscribe(
        data => {
          this.myData = data;
          console.log(data);
        },
        error => {
          alert('ERROR');
        });
  }
}
