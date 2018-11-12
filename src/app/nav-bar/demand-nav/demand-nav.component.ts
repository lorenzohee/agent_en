import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-demand-nav',
  templateUrl: './demand-nav.component.html',
  styleUrls: ['./demand-nav.component.css']
})
export class DemandNavComponent implements OnInit {

  isMouseEnter: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('mouseenter') onmouseenter(){
    this.isMouseEnter = true;
  }
  
  @HostListener('mouseleave') onmouseleave(){
    this.isMouseEnter = false;
  }
}
