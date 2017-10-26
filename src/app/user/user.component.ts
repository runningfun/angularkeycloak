import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  id: number;
  accountName: string;
  email: string;
  firstName: string;
  lastName: string;


}
