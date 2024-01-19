import { AppComponent } from './../../app.component';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderStepOneComponent } from './components/order/order-step-one/order-step-one.component';
import { OrderStepThreeComponent } from './components/order/order-step-three/order-step-three.component';
import { OrderStepTwoComponent } from './components/order/order-step-two/order-step-two.component';
import { OrderComponent } from './pages/order/order.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'order' },
  { path: 'order-step-one', component: OrderStepOneComponent, outlet:'routerOrder'},
  { path: 'order-step-two', component: OrderStepTwoComponent, outlet:'routerOrder' },
  { path: 'order-step-three', component: OrderStepThreeComponent , outlet:'routerOrder'},
  { path: 'order', component: OrderComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
