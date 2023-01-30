import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productData!: any;
  carrito: any = [];
  disable: boolean = false;
  constructor(private productoSrv: ProductsService, private router: Router) {}
  ngOnInit(): void {
    if (localStorage.getItem('reload') == 'false') {
      location.reload();
      localStorage.setItem('reload', 'true');
    }
    this.productoSrv.obtenerProducto().subscribe((data) => {
      this.productData = data;
      //Ver si el producto ya esta en el carrito
      this.carrito.forEach((element: any) => {
        if (element.id == this.productData.id) {
          this.disable = true;
        }
      });
    });

    //carrito de compras
    let compras = localStorage.getItem('carrito');
    let objCompras!: any;
    if (compras !== null) {
      objCompras = JSON.parse(compras);
    }
    this.carrito = objCompras;
  }
  agregarProducto() {
    this.disable = true;
    let cantidad = 1;
    let total = cantidad * parseFloat(this.productData.price);
    let producto = {
      picture_url: this.productData.picture_url,
      name: this.productData.name,
      quantity: cantidad,
      price: parseFloat(this.productData.price),
      id: this.productData.id,
      total: total,
    };
    this.carrito.push(producto);
    localStorage.setItem('carrito', JSON.stringify(this.carrito));
  }
}
