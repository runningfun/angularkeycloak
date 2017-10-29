import { Component } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './userdetail.component.html',
  styleUrls: ['./userdetail.component.css']
})
export class UserDetailComponent {

  id: number;
  accountName: string;
  email: string;
  firstName: string;
  lastName: string;


}
