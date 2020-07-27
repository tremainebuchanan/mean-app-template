import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  email = '';
  password = '';
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onLogin(){
    console.log('email' + this.email + 'password' + this.password);
    this.authService.authenticate({email: this.email, password: this.password}).subscribe(next => {
      console.log('Authenticated')
    }, error => {
      console.log('failed to log in', error)
    })
  }

}
