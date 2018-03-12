import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {UserDetailComponent} from './user/userdetail.component';
import {UsersComponent} from './users/users.component';
import {HomeComponent} from './HomeComponent';
import {SensorComponent} from "./sensor/sensor.component";



const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: UserDetailComponent },
  { path: 'users',     component: UsersComponent },
  { path: 'login',     component: HomeComponent },
  { path: 'sensor',     component: SensorComponent }
];

@NgModule({
            imports: [ RouterModule.forRoot(routes) ],
            exports: [ RouterModule ]
          })
export class AppRoutingModule {}
