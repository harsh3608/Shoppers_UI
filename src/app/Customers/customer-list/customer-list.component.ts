import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Table } from 'primeng/table';
import { Customer } from '../shared/models/customer.model';
import { CustomerService } from '../shared/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  loading: boolean = true;


  constructor(private customerService: CustomerService,) { }

  ngOnInit(): void {
    this.getCustomerList();
    this.loading = false;

  }

  getConfirm(id: any): void {
    var val = confirm("Are you sure to DELETE the Customer Details ?")
    if(val == true){
      this.customerService.deleteCustomer(id)
      .subscribe({
        next: (response) => {
          console.log(val);
          this.getCustomerList();
        }
      })
    }else{
      console.log(val);
      this.getCustomerList();
    }
  }

  getCustomerList(): void {
    this.customerService.getAllCustomers()
    .subscribe({
      next: (obj) => {
        this.customers = obj;
      },
      error: (response) => {
        console.log(response)
      }
    })

  }

  clear(table: Table) {
    table.clear();
  }

}
