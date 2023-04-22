import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CustomerListComponent } from './Customers/customer-list/customer-list.component';
import { CustomerAddComponent } from './Customers/customer-add/customer-add.component';
import { CustomerEditComponent } from './Customers/customer-edit/customer-edit.component';
import { CustomerViewComponent } from './Customers/customer-view/customer-view.component';
import { OrdersListComponent } from './Orders/orders-list/orders-list.component';
import { OrdersAddComponent } from './Orders/orders-add/orders-add.component';
import { OrdersEditComponent } from './Orders/orders-edit/orders-edit.component';
import { OrdersViewComponent } from './Orders/orders-view/orders-view.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputSwitchModule } from 'primeng/inputswitch'

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CustomerListComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    CustomerViewComponent,
    OrdersListComponent,
    OrdersAddComponent,
    OrdersEditComponent,
    OrdersViewComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    TableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CalendarModule,
		DropdownModule,
		ButtonModule,
    InputTextModule,
    FormsModule,
    DialogModule,
    ReactiveFormsModule,
    InputSwitchModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule


  ]
})
export class AppModule { }
