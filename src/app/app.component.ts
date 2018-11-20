import { Component } from '@angular/core';
import {DemandMockData, UserMockData} from '../mockData';
import { AuthorizationService } from './core/authorization/authorization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color = 'red';
  title = 'angular-agent';
  isLogin: boolean;
  constructor(private auth: AuthorizationService) {
    this.isLogin = this.auth.isLoggedIn;
    new DemandMockData();
    new UserMockData();
  }

  logout() {
    this.auth.logout();
  }

  getLogStatus(): boolean {
    return this.isLogin;
  }
}
