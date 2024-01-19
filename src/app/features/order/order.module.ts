import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { OrderRoutingModule } from './order-routing.module';
import { OrderComponent } from './pages/order/order.component';
import { OrderStepOneComponent } from './components/order/order-step-one/order-step-one.component';
import { OrderStepTwoComponent } from './components/order/order-step-two/order-step-two.component';
import { OrderStepThreeComponent } from './components/order/order-step-three/order-step-three.component';
import { DisplayImageComponent } from './components/order/display-image/display-image.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';

@NgModule({
  declarations: [
    OrderComponent,
    OrderStepOneComponent,
    OrderStepTwoComponent,
    OrderStepThreeComponent,
    NavMenuComponent
  ],
  imports: [
    CommonModule,
    OrderRoutingModule,
    FormsModule,
    DisplayImageComponent
  ],
  providers: [
  ]
})
export class OrderModule {
}
