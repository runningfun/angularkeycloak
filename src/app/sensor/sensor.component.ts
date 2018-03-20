import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SensorService} from "./sensor.service";

@Component({
  selector: 'app-sensor',
  templateUrl: './sensor.component.html',
  styleUrls: ['./sensor.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SensorComponent implements OnInit {

  currentTemperature: number;

  constructor(private http: HttpClient, private  sensorService: SensorService) {
  }

  ngOnInit() {
    this.getTemperatureFromApi();
  }

  getTemperatureFromApi(): void {
    console.log('getTemperatureFromApi')
    this.sensorService.getTemperatureFromApi().subscribe(
      data => {
        this.currentTemperature = data.body;
        console.log('status ' + data.status);
        console.log(this.currentTemperature);
      }
      ,
      err => {
        console.log('Error occurred');
      });
  }

}

//this.http.get('https://test.stefan-herschbach.de:23438/api/temperature').pipe().subscribe(data =>
