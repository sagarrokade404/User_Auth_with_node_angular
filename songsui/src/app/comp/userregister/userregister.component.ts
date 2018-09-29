import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataSerivces } from '../../services/data.service';
@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css']
})
export class UserregisterComponent implements OnInit {

  @ViewChild('submitform') subfor: NgForm;
  constructor(private dataServ: DataSerivces) { }

  ngOnInit() {
  }

  onSubmit(submitform: NgForm) {
    console.log(submitform.value);
    this.dataServ.registeruser(submitform.value).subscribe(
      (res) => {
        this.handleResponse(res);
      }
    );
  }

  handleResponse(data) {
    console.log(data);
this.subfor.reset();
  }

}
