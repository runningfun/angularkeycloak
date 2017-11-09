import 'rxjs/add/operator/switchMap';
import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {Location} from '@angular/common';

@Component({
             selector: 'app-user-detail',
             templateUrl: './userdetail.component.html',
             styleUrls: ['./userdetail.component.css']
           })
export class UserDetailComponent implements OnInit {

  selectedUser: User;

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
     this.getSelectedUserFromApi(id);
  }

  getSelectedUserFromApi(id: string): void {
    this.userService.getUserFromApi(id).subscribe(
      data => {
        this.selectedUser = data.body;
        console.log('status ' + data.status);
        console.log(this.selectedUser);
      }
      ,
      err => {
        console.log('Error occurred');
      });
  }

  goBack(): void {
    this.location.back();
  }

}
