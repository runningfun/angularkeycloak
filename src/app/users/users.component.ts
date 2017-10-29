import {Component, OnInit} from '@angular/core';
import {UserService} from '../user/user.service';
import {UserComponent} from '../user/user.component';
import {Router} from '@angular/router';

@Component({
             selector: 'app-users',
             templateUrl: './users.component.html',
             styleUrls: ['./users.component.css'],
             providers: [UserService]
           })
export class UsersComponent implements OnInit {
  users: UserComponent[];
  selectedUser: UserComponent;

  constructor(private router: Router, private userService: UserService) {

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

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedUser.id]);
  }

 }
