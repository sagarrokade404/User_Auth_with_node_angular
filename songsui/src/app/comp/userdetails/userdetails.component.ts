import { DataSerivces } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../utility/user.model';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
user: User = null;
  constructor(private dataServ: DataSerivces, private router: Router) { }

  ngOnInit() {
    this.dataServ.getuserDetails().subscribe(
      (res) => { this.handleResponse(res); }
    );

  }


  handleResponse(res) {
    this.user = res;
   // console.log(this.user);
  }
logout() {
  this.dataServ.logout();
this.router.navigate(['/login']);
}
}
