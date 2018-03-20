/**
 * Created by Herschbach.Stefan on 20.03.2017.
 */

import {Injectable} from '@angular/core';

import {HttpClient, HttpResponse} from '@angular/common/http';
import {MessageService} from '../message.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class SensorService{

  //private usersUrl = 'api/users';  // URL to web api
  private temperatureUrl = 'http://localhost:8080/api/temperature';

  constructor(private http: HttpClient,
              private messageService: MessageService) {
    console.log('constructor');
  }

  /** Log a SensorService message with the MessageService */
  private log(message: string) {
    this.messageService.add('SensorService: ' + message);
  }

  getTemperatureFromApi(): Observable<HttpResponse<number>> {
    console.log('get temperature');
    this.log('get temperature');
    const url = this.temperatureUrl;
    console.log('url ' + url);
    return this.http.get<number>(url, {observe: 'response'});
  }


}
