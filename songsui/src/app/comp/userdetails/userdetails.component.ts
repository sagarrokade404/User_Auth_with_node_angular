import { DataSerivces } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {

  constructor(private dataServ: DataSerivces, private router: Router) { }

  ngOnInit() {
    this.dataServ.getuserDetails().subscribe(
      (res) => { console.log(res); }
    );

  }
logout() {
  this.dataServ.logout();
this.router.navigate(['/login']);
}
}
