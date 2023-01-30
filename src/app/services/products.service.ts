import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:8000/api/products/';
  urlProducion = 'https://api-eatable-production.up.railway.app/api/products/';
  id = localStorage.getItem('productId');
  getProducts() {
    return this.http.get(this.urlProducion);
  }

  obtenerProducto() {
    return this.http.get(this.urlProducion + this.id);
  }
}
