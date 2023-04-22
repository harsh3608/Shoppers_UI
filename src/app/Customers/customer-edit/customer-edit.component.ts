import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Customer } from '../shared/models/customer.model';
import { CustomerService } from '../shared/services/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  displayModal: boolean = true;
  customer!: Customer;
  customerRequest! : Customer;
  editCustomerForm! : FormGroup;

  constructor(private primengConfig: PrimeNGConfig, private customerService: CustomerService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.editCustomerForm = this.fb.group({
      customerId: '',
      firstName : new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z]*")]),
      lastName : new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z]*")]),
      age : new FormControl('',[Validators.required,Validators.maxLength(2),Validators.pattern("[0-9]*")]),
      email : new FormControl('',[Validators.required,Validators.email,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}$")]),
      mobileNumber : new FormControl('',[Validators.required,Validators.pattern("[0-9]*.{4,10}")]),
      city : new FormControl('',[Validators.required]),
      isPrimeMember : new FormControl(false),
    })

    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if(id){
          this.customerService.getCustomerById(id).subscribe({
            next:(res)=>{
              this.customer = res;
              this.editCustomerForm.setValue(this.customer);
            }
          })
        }
      }
    })
  }

  updateCustomer(){
    this.customerRequest = this.editCustomerForm.value;
    if(this.editCustomerForm.valid){
      this.customerService.updateCustomer(
        this.customerRequest.customerId,
        this.customerRequest
      ).subscribe({
        next: (response) => {
          this.router.navigate(['customers']);
        }
      })
    }
  }

  onCancel(){
    this.router.navigate(['customers']);
  }


  get firstName(): FormControl {
    return this.editCustomerForm.get("firstName") as FormControl;
  }
  get lastName(): FormControl {
    return this.editCustomerForm.get("lastName") as FormControl;
  }
  get email(): FormControl {
    return this.editCustomerForm.get("email") as FormControl;
  }
  get Age(): FormControl {
    return this.editCustomerForm.get("age") as FormControl;
  }
  get city(): FormControl {
    return this.editCustomerForm.get("city") as FormControl;
  }
  get mobile(): FormControl {
    return this.editCustomerForm.get("mobileNumber") as FormControl;
  }
  get IsPrimeMember(): FormControl {
    return this.editCustomerForm.get("isPrimeMember") as FormControl;
  }

}
