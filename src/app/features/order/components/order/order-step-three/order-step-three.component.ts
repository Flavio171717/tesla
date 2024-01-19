import { OrderService } from './../../../../service/order.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-step-three',
  templateUrl: './order-step-three.component.html',
  styleUrls: ['./order-step-three.component.css']
})
export class OrderStepThreeComponent implements OnInit {
  totalCost: number = 0;
  isEnabledStep2:boolean=true;
  isEnabledStep3:boolean=true;

  constructor(public displayImageService:OrderService) { }

  ngOnInit() {
    if ((this.displayImageService.colPriceSelected != undefined) && (this.displayImageService.priceSelected!= undefined)){
      this.totalCost=this.displayImageService.colPriceSelected+this.displayImageService.priceSelected;
      if (this.displayImageService.yokeSelected){
        this.totalCost+=1000;
      }
      if (this.displayImageService.towHitchSelected){
        this.totalCost+=1000;
      }
    }
  }

}
