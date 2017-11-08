/**
 * Created by Herschbach.Stefan on 04.07.2017.
 */

import {Injectable} from '@angular/core';

import {USERS} from './mock-users';
import {User} from './user';
import {HttpClientModule} from '@angular/common/http';
import {MessageService} from '../message.service';

@Injectable()
export class UserService {

  constructor(
    private http: HttpClientModule,
    private messageService: MessageService) { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add('UserService: ' + message);
  }

  getUsers(): Promise<User[]> {
    this.messageService.add('UserService: fetched users');
    return Promise.resolve(USERS);
  }

  getUsersSlowly(): Promise<User[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getUsers()), 2000);
    });
  }

  getUser(id: number): Promise<User> {
    return this.getUsers()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}
