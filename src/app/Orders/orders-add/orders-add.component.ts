import { Component, OnChanges, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Customer } from 'src/app/Customers/shared/models/customer.model';
import { CustomerService } from 'src/app/Customers/shared/services/customer.service';
import { Order } from '../shared/models/order.model';
import { OrderService } from '../shared/services/order.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-orders-add',
  templateUrl: './orders-add.component.html',
  styleUrls: ['./orders-add.component.css']
})
export class OrdersAddComponent implements OnInit, OnChanges {
  displayModal: boolean = true;
  orderRequest!: Order;
  addOrderForm!: FormGroup;
  customers: Customer[] = [];
  selectedCustomer!: Customer;

  selectedCountry!: [name: string];
  countries!: any[];

  constructor(
    private customerService: CustomerService,
    private primengConfig: PrimeNGConfig,
    private orderService: OrderService,
    private router: Router,
    private fb: FormBuilder,
    public dialog: MatDialog
  ) { }

  ngOnChanges() { }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.addOrderForm = this.fb.group({
      orderName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z]*")]),
      orderDate: new FormControl('', [Validators.required]),
      customerId: new FormControl('', [Validators.required,]),
      amount: new FormControl('', [Validators.required]),
    })
    this.getCustomerNames();

  }

  onCancel() {
    this.router.navigate(['orders']);
  }

  registerSubmitted() {
    this.addOrderForm.markAllAsTouched();
    if (this.addOrderForm.valid) {
      this.addOrderForm = this.addOrderForm.value;
      this.orderService.addOrder(this.orderRequest).subscribe(res => {
        console.log(res);
        this.router.navigate(['orders'])
      })
    }
  }

  showModalDialog() {
    this.displayModal = true;
  }



  getCustomerNames() {
    this.customerService.getAllCustomers()
      .subscribe({
        next: (response) => {
          this.customers = response;
        }
      })
  }

  get orderName(): FormControl {
    return this.addOrderForm.get("orderName") as FormControl;
  }
  get orderDate(): FormControl {
    return this.addOrderForm.get("orderDate") as FormControl;
  }
  get customerId(): FormControl {
    return this.addOrderForm.get("customerId") as FormControl;
  }
  get amount(): FormControl {
    return this.addOrderForm.get("amount") as FormControl;
  }

}
