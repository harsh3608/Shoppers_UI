import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAddComponent } from './Customers/customer-add/customer-add.component';
import { CustomerEditComponent } from './Customers/customer-edit/customer-edit.component';
import { CustomerListComponent } from './Customers/customer-list/customer-list.component';
import { CustomerViewComponent } from './Customers/customer-view/customer-view.component';
import { OrdersAddComponent } from './Orders/orders-add/orders-add.component';
import { OrdersEditComponent } from './Orders/orders-edit/orders-edit.component';
import { OrdersListComponent } from './Orders/orders-list/orders-list.component';
import { OrdersViewComponent } from './Orders/orders-view/orders-view.component';

const routes: Routes = [
  {
    path: 'customers',
    component: CustomerListComponent
  },
  {
    path: 'customer/add',
    component: CustomerAddComponent
  },{
    path: 'customer/view/:id',
    component: CustomerViewComponent
  },{
    path: 'customer/edit/:id',
    component: CustomerEditComponent
  },
  {
    path: 'orders',
    component: OrdersListComponent
  },{
    path: 'order/add',
    component: OrdersAddComponent
  },{
    path: 'order/view/:id',
    component: OrdersViewComponent
  },{
    path: 'order/edit/:id',
    component: OrdersEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
