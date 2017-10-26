import { Component, OnInit } from '@angular/core';
import {UserComponent} from '../user/user.component';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: UserComponent[]= [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  this.users = this.userService.getUsers().slice(1, 2);
  }

}
