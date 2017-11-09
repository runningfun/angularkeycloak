/**
 * Created by Herschbach.Stefan on 04.07.2017.
 */

import {Injectable} from '@angular/core';

import {User} from './user';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {MessageService} from '../message.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService  {


  private usersUrl = 'api/users';  // URL to web api

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {
    console.log('constructor');
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('UserService: ' + message);
  }

  getUsersFromApi(): Observable<HttpResponse<User[]>> {
    this.log('get all users')
    return this.http.get<User[]>(this.usersUrl, {observe: 'response'});
  }

  getUserFromApi(id: string): Observable<HttpResponse<User>> {
    this.log('get user for id ' + id);
    const url = this.usersUrl + '/' + id;
    console.log('url ' + url);
    return this.http.get<User>(url, {observe: 'response'});
  }


}
