import {Component, OnInit} from '@angular/core';
import {UserService} from '../user/user.service';
import {Router} from '@angular/router';
import {User} from '../user/user';

@Component({
             selector: 'app-users',
             templateUrl: './users.component.html',
             styleUrls: ['./users.component.css'],
             providers: [UserService]
           })
export class UsersComponent implements OnInit {
  users: User [];
  selectedUser: User;

  constructor(private router: Router, private userService: UserService) {

     }

  getUsers(): void {
    this.userService.getUsers().then(users => this.users = users);
  }

  ngOnInit(): void {
    this.getUsers();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedUser.id]);
  }

 }
