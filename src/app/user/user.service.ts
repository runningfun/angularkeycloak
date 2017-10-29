/**
 * Created by Herschbach.Stefan on 04.07.2017.
 */

import {Injectable} from '@angular/core';

import {UserDetailComponent} from './userdetail.component';
import {USERS} from './mock-users';

@Injectable()
export class UserService {
  getUsers(): UserDetailComponent[] {
    return USERS;
  }
}
