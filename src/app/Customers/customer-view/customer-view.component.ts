import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../shared/models/customer.model';
import { CustomerService } from '../shared/services/customer.service';

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.css']
})
export class CustomerViewComponent implements OnInit{
  displayModal: boolean = true;
  customer!: Customer;

  constructor(private customerService: CustomerService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if(id){
          this.customerService.getCustomerById(id).subscribe({
            next:(res)=>{
              this.customer = res;
            }
          })
        }
      }
    })
  }

}
