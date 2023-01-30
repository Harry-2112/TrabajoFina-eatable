import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:8000/api/orders';
  urlProducion = 'https://api-eatable-production.up.railway.app/api/orders/';
  get() {
    return this.http.get(this.urlProducion);
  }
  post(data: any) {
    return this.http.post(this.urlProducion, data);
  }
}
