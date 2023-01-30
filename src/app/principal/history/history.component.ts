import { Component, OnInit } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  constructor(private orderSvc: OrdersService) {}
  history: any = [];
  ocultar = false;
  userHistory: any = [];
  userId = localStorage.getItem('id');
  ngOnInit(): void {
    localStorage.setItem('check', 'false');
    if (localStorage.getItem('reload') == 'false') {
      location.reload();
      localStorage.setItem('reload', 'true');
    }
    this.orderSvc.get().subscribe((data) => {
      this.history = data;
      this.history.forEach((e: any) => {
        if (e.user_id == this.userId) {
          this.userHistory.push(e);
        }
      });
    });
  }
  mostrar() {
    this.ocultar ? (this.ocultar = false) : (this.ocultar = true);
  }
}
