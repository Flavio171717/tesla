import { DisplayImageComponent } from './features/order/components/order/display-image/display-image.component';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {AsyncPipe, JsonPipe} from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, RouterOutlet,  RouterLink, RouterLinkActive, FormsModule, DisplayImageComponent],
  templateUrl :'./app.component.html'

})
export class AppComponent implements OnInit {
  name = 'Angular';

  constructor() { }
  ngOnInit(): void {
  }

}
