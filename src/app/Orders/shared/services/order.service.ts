import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Order } from "../models/order.model";

@Injectable({
  providedIn: 'root'
})

export class OrderService{
  constructor(private http: HttpClient) { }

  baseServerUrl = "https://localhost:7084/api/";

  getAllOrders( ) : Observable<Order[]>  {
    return this.http.get<Order[]>(this.baseServerUrl + 'Order/GetAll');
  }

  addOrder(order: Order) : Observable<Order>  {
    return this.http.post<Order>(this.baseServerUrl + 'Order/Add',order)
  }

  getOrderById(id:any) : Observable<Order> {
    return this.http.get<Order>(this.baseServerUrl + 'Order/GetById/'+ id);
  }

  updateCustomer(id:any, order: Order) : Observable<Order> {
    return this.http.put<Order>(this.baseServerUrl + 'Order/Update/'+ id, order);
  }

  deleteOrder(id:any): Observable<Order> {
    return this.http.delete<Order>(this.baseServerUrl + 'Order/Delete/'+ id);
  }

}
