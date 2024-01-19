import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  @Input() isEnabledStep2:boolean=true;
  @Input() isEnabledStep3:boolean=false;


  constructor() { }

  ngOnInit() {
  }

}
