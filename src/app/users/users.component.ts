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


  ngOnInit(): void {
    this.getUserFromApi();
  }

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedUser.id]);
  }

 }
