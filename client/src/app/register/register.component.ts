import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email = '';
  password = '';
  confirmPassword = '';

  constructor() { }

  ngOnInit(): void {
  }

  onCreateAccount(){
    console.log('password', this.password);
    console.log('email', this.email);
    console.log('confirmPassword', this.confirmPassword);
  }

}
