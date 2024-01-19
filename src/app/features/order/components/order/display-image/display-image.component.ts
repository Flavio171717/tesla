import { OrderService } from '../../../../service/order.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-image',
  templateUrl: './display-image.component.html',
  styleUrls: ['./display-image.component.css'],
  standalone: true
})
export class DisplayImageComponent implements OnInit {
  @Input() modSelected: string = "";
  @Input() colSelected: string = "";
  constructor(public displayImageService: OrderService) { }

  ngOnInit() {
  }

}
