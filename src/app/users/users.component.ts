import {Component, OnInit} from '@angular/core';
import {UserService} from '../user/user.service';
import {UserComponent} from '../user/user.component';

@Component({
             selector: 'app-users',
             templateUrl: './users.component.html',
             styleUrls: ['./users.component.css'],
             providers: [UserService]
           })
export class UsersComponent implements OnInit {
  users: UserComponent[];
  selectedUser: UserComponent;

  constructor(private userService: UserService) {

     }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: UserComponent): void {
    this.selectedUser = user;
  }

 }
