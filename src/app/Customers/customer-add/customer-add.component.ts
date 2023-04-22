import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { Customer } from '../shared/models/customer.model';
import { CustomerService } from '../shared/services/customer.service';

@Component({
  selector: 'app-customer-add',
  templateUrl: './customer-add.component.html',
  styleUrls: ['./customer-add.component.css']
})
export class CustomerAddComponent {
  displayModal: boolean = true;
  customerRequest! : Customer;
  addCustomerForm! : FormGroup;
  age: any;
  isPrimeMember: any;
  membershipStatus: boolean = false;

  constructor(private primengConfig: PrimeNGConfig,private customerService: CustomerService, private router: Router, private fb: FormBuilder) {
    // this.addCustomerForm = this.fb.group({
    //   firstName: ['', [Validators.required,]],
    //   lastName: [''],
    //   age: [],
    //   email: [],
    //   city: [, [Validators.required]],
    //   mobileNumber: [],
    //   isPrimeMember: [true],
    // });
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    this.addCustomerForm = this.fb.group({
      firstName : new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z]*")]),
      lastName : new FormControl('',[Validators.required,Validators.minLength(3),Validators.pattern("[a-zA-Z]*")]),
      age : new FormControl('',[Validators.required,Validators.maxLength(2),Validators.pattern("[0-9]*")]),
      email : new FormControl('',[Validators.required,Validators.email,Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}$")]),
      mobileNumber : new FormControl('',[Validators.required,Validators.pattern("[0-9]*.{4,10}")]),
      city : new FormControl('',[Validators.required]),
      isPrimeMember : new FormControl(false),
    })

  }

  onCancel(){
    this.router.navigate(['customers']);
  }

  registerSubmitted(){
    this.addCustomerForm.markAllAsTouched();
    if(this.addCustomerForm.valid) {
      this.customerRequest = this.addCustomerForm.value;
      this.customerService.addCustomer(this.customerRequest).subscribe(res => {
        console.log(res);
        this.router.navigate(['customers'])
      })
    }
  }

  resetForm() {
    this.addCustomerForm.reset();
  }

  // onSubmit(addCustomerForm: { value: Customer; }) {
  //   this.customerRequest = addCustomerForm.value;
  //   this.customerService.addCustomer(this.customerRequest).subscribe(res => {
  //     console.log(res);
  //     this.router.navigate(['customers'])
  //   })
  // }

  showModalDialog() {
    this.displayModal = true;
  }

  get firstName(): FormControl {
    return this.addCustomerForm.get("firstName") as FormControl;
  }
  get lastName(): FormControl {
    return this.addCustomerForm.get("lastName") as FormControl;
  }
  get email(): FormControl {
    return this.addCustomerForm.get("email") as FormControl;
  }
  get Age(): FormControl {
    return this.addCustomerForm.get("age") as FormControl;
  }
  get city(): FormControl {
    return this.addCustomerForm.get("city") as FormControl;
  }
  get mobile(): FormControl {
    return this.addCustomerForm.get("mobileNumber") as FormControl;
  }
  get IsPrimeMember(): FormControl {
    return this.addCustomerForm.get("isPrimeMember") as FormControl;
  }


}
