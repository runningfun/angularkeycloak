import {Component, OnInit} from '@angular/core';
import {UserService} from '../user/user.service';
import {User} from '../user/user';

@Component({
             selector: 'app-dashboard',
             templateUrl: './dashboard.component.html',
             styleUrls: ['./dashboard.component.css']
           })
export class DashboardComponent implements OnInit {

  users: User [] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getUserFromApi();
    this.users = this.users.slice(0, 5);
  //  this.userService.getUsers().toPromise().then(users => this.users = users.slice(0, 5));
  }

  getUserFromApi(): void {
    this.userService.getUsersFromApi().subscribe(
      data => {
        this.users = data.body;
        console.log('status ' + data.status);
        console.log(this.users);
      }
      ,
      err => {console.log('Error occurred'); }
    );
  }

}
