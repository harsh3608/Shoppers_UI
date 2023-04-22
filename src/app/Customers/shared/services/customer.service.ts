import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Customer } from "../models/customer.model";

@Injectable({
  providedIn: 'root'
})

export class CustomerService{
  constructor(private http: HttpClient) { }

  baseServerUrl = "https://localhost:7084/api/";

  getAllCustomers( ) : Observable<Customer[]>  {
    return this.http.get<Customer[]>(this.baseServerUrl + 'Customer/GetAll');
  }

  addCustomer(customer: Customer) : Observable<Customer>  {
    return this.http.post<Customer>(this.baseServerUrl + 'Customer/Add',customer)
  }

  getCustomerById(id:any) : Observable<Customer> {
    return this.http.get<Customer>(this.baseServerUrl + 'Customer/GetById/'+ id);
  }

  updateCustomer(id:any, customer: Customer) : Observable<Customer> {
    return this.http.put<Customer>(this.baseServerUrl + 'Customer/Update/'+ id, customer);
  }

  deleteCustomer(id:any): Observable<Customer> {
    return this.http.delete<Customer>(this.baseServerUrl + 'Customer/Delete/'+ id);
  }

}
