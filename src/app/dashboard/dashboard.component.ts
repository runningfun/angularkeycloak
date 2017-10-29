import { Component, OnInit } from '@angular/core';
import {UserDetailComponent} from '../user/userdetail.component';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  users: UserDetailComponent []= [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  this.users = this.userService.getUsers().slice(1, 2);
  }

}
