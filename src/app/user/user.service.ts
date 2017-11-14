/**
 * Created by Herschbach.Stefan on 04.07.2017.
 */

import {Injectable} from '@angular/core';

import {User} from './user';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {MessageService} from '../message.service';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class UserService {

  private usersUrl = 'api/users';  // URL to web api
  private userFromRealServiceUrl = 'https://test.stefan-herschbach.de:23438/api/coffeegroups/dummy';

  constructor(private http: HttpClient,
              private messageService: MessageService) {
    console.log('constructor');
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('UserService: ' + message);
  }

  getUsersFromApi(): Observable<HttpResponse<User[]>> {
    this.log('get all users');
    return this.http.get<User[]>(this.usersUrl, {observe: 'response'});
  }

  getUserFromApi(id: string): Observable<HttpResponse<User>> {
    this.log('get user for id ' + id);
    const url = this.usersUrl + '/' + id;
    console.log('url ' + url);
    return this.http.get<User>(url, {observe: 'response'});
  }

  updateUser(selectedUser: User): Observable<HttpResponse<Object>> {
    return this.http.put(this.usersUrl, selectedUser, {observe: 'response'});
  }

  addUser(accountName: String, email: string, firstName: string, lastName: string): Observable<HttpResponse<User>> {
    return this.http.post<User>(this.usersUrl,
                                {accountName: accountName, email: email, firstName: firstName, lastName: lastName},
                                {observe: 'response'});
  }

  deleteUser(user: User): Observable<HttpResponse<User>> {
    this.log('delete user for id ' + user.id);
    const url = this.usersUrl + '/' + user.id;
    return this.http.delete<User>(url, {observe: 'response'});
  }

  /* GET users whose name contains search term */
  searchUsers(term: string): Observable<HttpResponse<User[]>> {
    return this.http.get<User[]>(`api/users/?accountName=${term}`, {observe: 'response'});
  }

}
