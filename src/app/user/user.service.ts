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

  //private usersUrl = 'api/users';  // URL to web api
  private userFromRealServiceUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient,
              private messageService: MessageService) {
    console.log('constructor');
  }

  /** Log a UserService message with the MessageService */
  private log(message: string) {
    this.messageService.add('UserService: ' + message);
  }

  getUsersFromApi(): Observable<HttpResponse<User[]>> {
    this.log('get all users');
    console.log('getUsersFromApi');
    return this.http.get<User[]>(this.userFromRealServiceUrl, {observe: 'response'});
  }

  getUserFromApi(accountName: string): Observable<HttpResponse<User>> {
    console.log('get user for accountName ' + accountName);
    this.log('get user for accountName ' + accountName);
    const url = this.userFromRealServiceUrl + '/' + accountName;
    console.log('url ' + url);
    return this.http.get<User>(url, {observe: 'response'});
  }

  updateUser(selectedUser: User): Observable<HttpResponse<Object>> {
    return this.http.put(this.userFromRealServiceUrl, selectedUser, {observe: 'response'});
  }

  addUser(accountName: String, email: string, firstName: string, lastName: string): Observable<HttpResponse<User>> {
    return this.http.post<User>(this.userFromRealServiceUrl,
                                {accountName: accountName, email: email, firstName: firstName, lastName: lastName},
                                {observe: 'response'});
  }

  deleteUser(user: User): Observable<HttpResponse<User>> {
    this.log('delete user with account name' + user.accountName);
    const url = this.userFromRealServiceUrl + '/' + user.accountName;
    return this.http.delete<User>(url, {observe: 'response'});
  }

  /* GET users whose name contains search term */
  searchUsers(term: string): Observable<HttpResponse<User[]>> {
    return this.http.get<User[]>(`api/users/?accountName=${term}`, {observe: 'response'});
  }

}
