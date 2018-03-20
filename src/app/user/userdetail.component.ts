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
    const accountName = this.route.snapshot.paramMap.get('accountName');
    console.log('UserDetailComponent found accountName: '+accountName)
     this.getSelectedUserFromApi(accountName);
  }

  getSelectedUserFromApi(accountName: string): void {
    console.log('getSelectedUserFromApi for accountName'+accountName)
    this.userService.getUserFromApi(accountName).subscribe(
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

  save(): void {
    this.userService.updateUser(this.selectedUser)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }

}
