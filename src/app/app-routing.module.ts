import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderStepOneComponent } from './features/order/components/order/order-step-one/order-step-one.component';
import { OrderStepThreeComponent } from './features/order/components/order/order-step-three/order-step-three.component';
import { OrderStepTwoComponent } from './features/order/components/order/order-step-two/order-step-two.component';

export const routes: Routes = [
  {path: '', loadChildren: () => import('./features/order/order.module').then(m => m.OrderModule)},
  // {path: 'order', loadChildren: () => import('./features/order/order.module').then(m => m.OrderModule)},
  // {path: 'order-step-one', component: OrderStepOneComponent},
  // {path: 'order-step-two', component: OrderStepTwoComponent},
  // {path: 'order-step-three', component: OrderStepThreeComponent},
  {path: '**', redirectTo: ''}
];

