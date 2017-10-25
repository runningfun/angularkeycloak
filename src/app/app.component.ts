import {Component, OnInit} from '@angular/core';
import { UserComponent } from './user/user.component';
import {UserService} from './user/user.service';

@Component({
             selector: 'app-root',
             templateUrl: './app.component.html',
             styleUrls: ['./app.component.css'],
             providers: [UserService]
           })
export class AppComponent implements OnInit{


  title = 'Coffee list app works!';
  users: UserComponent[];
  selectedUser: UserComponent;
  constructor(private userService: UserService) { }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }

  ngOnInit(): void {
    this.getUsers();
  }
  // user: UserComponent = {
  //   id: 1,
  //   name: 'Stefan'
  // }
  // user2: UserComponent = {
  //   id: 2,
  //   name: 'Stefan2'
  // }

  onSelect(user: UserComponent): void {
    this.selectedUser = user;
  }
}
