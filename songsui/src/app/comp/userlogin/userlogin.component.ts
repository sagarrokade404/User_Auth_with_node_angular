import { DataSerivces } from './../../services/data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
@ViewChild('loginform') logform: NgForm;
  constructor(private dataServ: DataSerivces) { }

  ngOnInit() {
  }

  loginSubmit() {
this.dataServ.loginuser(this.logform.value).subscribe(
  (res) => {
this.handlelogin(res);
  }
);


  }

  handlelogin(token) {
    this.dataServ.storelocaltoken(token.token);
    const user = this.dataServ.returnuserfromtoken();
    console.log(user);
  }
}
