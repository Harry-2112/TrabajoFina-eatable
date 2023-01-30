import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private productSvc: ProductsService, private router: Router) {}
  products: any = [];
  productosFiltrados: any = [];
  categoris: any = [];
  borde = '';
  numeroCarrito = 0;
  ngOnInit(): void {
    localStorage.setItem('check', 'false');
    //carrito
    let carrito: any = localStorage.getItem('carrito');
    if (carrito !== null) {
      carrito = JSON.parse(carrito);
    }
    carrito !== null ? (this.numeroCarrito = carrito.length) : null;
    this.borde = 'all';
    this.productSvc.getProducts().subscribe((data) => {
      this.products = data;
      this.products.forEach((e: any) => {
        this.categoris.push(e.category);
      });
      this.eliminarRepetidos(this.categoris);
    });
  }
  eliminarRepetidos(arr: any) {
    let newArr = arr.filter(
      (item: any, index: any) => arr.indexOf(item) === index
    );
    this.categoris = newArr;
  }
  detalle(id: string) {
    localStorage.setItem('productId', id);
    localStorage.setItem('reload', 'false');
    this.router.navigate(['principal/product']);
  }
  contador = 0;
  datosR: string = '';
  search(data: string) {
    this.borde = 'all';
    this.productosFiltrados = [];
    this.datosR = '';
    this.datosR = data;
    this.products.filter((objeto: any) => {
      if (objeto.name.includes(data)) {
        this.productosFiltrados.push(objeto);
      }
    });
    this.contador = this.productosFiltrados.length;
  }
  filtrar(data: string) {
    this.borde = data;
    this.productosFiltrados = [];
    this.datosR = '';
    this.datosR = data;
    this.products.filter((objeto: any) => {
      if (objeto.category.includes(data)) {
        this.productosFiltrados.push(objeto);
      }
    });
    this.contador = this.productosFiltrados.length;
  }
  All() {
    this.borde = 'all';
    localStorage.setItem('filtro', 'all');
    this.productosFiltrados = [];
    this.datosR = '';
  }
}
