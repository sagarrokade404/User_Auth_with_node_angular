import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
 import { RouterModule, Routes } from '@angular/router';
import { UserloginComponent } from '../../comp/userlogin/userlogin.component';
import { UserregisterComponent } from '../../comp/userregister/userregister.component';
import { UserdetailsComponent } from '../../comp/userdetails/userdetails.component';
import { AuthGuard } from '../../services/auth.guard';

const appRoutes: Routes = [
  { path: 'login', component: UserloginComponent },
  { path: 'register' , component: UserregisterComponent},
  { path: 'userdata' , component: UserdetailsComponent, canActivate: [AuthGuard]},
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RouteModule { }
