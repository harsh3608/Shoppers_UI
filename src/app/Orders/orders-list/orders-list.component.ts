import { Component } from '@angular/core';
import { Table } from 'primeng/table';
import { Order } from '../shared/models/order.model';
import { OrderService } from '../shared/services/order.service';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent {
  orders: Order[] = [];
  loading: boolean = true;


  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.getOrderList();
    this.loading = false;
  }

  getConfirm(id: any): void {
    var val = confirm("Are you sure to DELETE the Customer Details ?")
    if(val == true){
      this.orderService.deleteOrder(id)
      .subscribe({
        next: (response) => {
          console.log(val);
          this.getOrderList();
        }
      })
    }else{
      console.log(val);
      this.getOrderList();
    }
  }

  getOrderList(): void {
    this.orderService.getAllOrders()
    .subscribe({
      next: (obj) => {
        this.orders = obj;
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
