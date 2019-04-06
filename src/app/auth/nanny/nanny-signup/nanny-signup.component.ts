import { Component, OnInit} from '@angular/core';
import {AuthService} from "../../auth.service";
import {NgForm} from "@angular/forms";
import {PauthService} from "../../pauth.service";


@Component({
  selector: 'app-nanny-signup',
  templateUrl: './nanny-signup.component.html',
  styleUrls: ['./nanny-signup.component.scss']
})
export class NannySignupComponent implements OnInit {

  hide = false;
  maxDate;
  gender = ['Male', 'Female'];
  sgender = '';

  constructor(private authService: PauthService) {
  }

  ngOnInit() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 25);
  }

  onSubmit(form: NgForm) {
    //  console.log(form);
    this.authService.registerUser({
      name: form.value.name,
      address: form.value.address,
      number: form.value.number,
      email: form.value.email,
      password: form.value.password,
      birthdate: form.value.birthdate
    });
  }
}