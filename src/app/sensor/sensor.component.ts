import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SensorComponent implements OnInit {

  constructor(private http: HttpClient){
  }

  ngOnInit() {
    console.log("before request");
    this.http.get('http://localhost:8080/api/temperature').subscribe(data => {
      console.log(data);
    });
    console.log("after request");
  }

}

//this.http.get('https://test.stefan-herschbach.de:23438/api/temperature').pipe().subscribe(data =>
