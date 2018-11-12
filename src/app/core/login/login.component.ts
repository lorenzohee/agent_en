import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../authorization/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string;
  constructor(public authService: AuthorizationService, public router: Router) {
    this.setMessage();
   }

  ngOnInit() {
  }

  setMessage(){
    this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
  }

  login(){
    this.message = 'Tring to log in ...';
    this.authService.login().subscribe(()=>{
      this.setMessage();
      if(this.authService.isLoggedIn) {
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/demands';
        this.router.navigate([redirect]);
      }
    })
  }

  logout(){
    this.authService.logout();
    this.setMessage();
  }

}
