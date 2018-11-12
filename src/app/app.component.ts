import { Component } from '@angular/core';
import {DemandMockData, UserMockData} from '../mockData'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  color = 'red'
  title = 'best-angular-experience';
  constructor(){
    new DemandMockData();
    new UserMockData();
  }
}
