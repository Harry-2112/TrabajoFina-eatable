import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  constructor(private usuarioSvc: UsuarioService, private router: Router) {}
  carrito: any = [];
  pedido: any = [];
  total = 0;
  delivery_address = '';
  userId = '';
  name = '';
  phone = '';
  ngOnInit(): void {
    this.usuarioSvc.getProfile().subscribe((data: any) => {
      this.delivery_address = data.address;
      this.userId = data._id;
      this.name = data.name;
      this.phone = data.phone;
    });
    let compras = localStorage.getItem('carrito');
    let objCompras!: any;
    if (compras !== null) {
      objCompras = JSON.parse(compras);
    }
    this.carrito = objCompras;
    this.pedido = this.carrito;
    //pedido
    this.pedido.forEach((e: any) => {
      this.total = this.total + parseFloat(e.price);
    });
  }
  mas(id: string) {
    this.total = 0;
    this.pedido.forEach((e: any) => {
      if (e.id == id) {
        e.quantity++;
        e.total = parseFloat(e.quantity) * parseFloat(e.price);
      }
      this.total = this.total + e.total;
    });
    localStorage.setItem('carrito', JSON.stringify(this.pedido));
  }
  menos(id: string) {
    this.total = 0;
    /*this.pedido.forEach((e: any) => {

    });*/
    for (let i = 0; this.pedido.length > i; i++) {
      let element = this.pedido[i];

      //codigo
      if (element.id == id) {
        element.quantity--;
        element.total =
          parseFloat(element.quantity) * parseFloat(element.price);
      }
      this.total = this.total + element.total;
      if (element.quantity == 0) {
        this.pedido.splice(i, 1);
      }
      this.total = 0;
      this.pedido.forEach((e: any) => {
        let t = e.quantity * e.price;
        this.total = this.total + t;
      });
    }
    localStorage.setItem('carrito', JSON.stringify(this.pedido));
  }
  check() {
    let items: {}[] = [];
    this.pedido.forEach((element: any) => {
      let pedido = {
        product_id: element.id,
        quantity: element.quantity,
        price: element.price,
        name: element.name,
      };
      items.push(pedido);
    });
    let check = {
      name: this.name,
      phone: this.phone,
      delivery_address: this.delivery_address,
      user_id: this.userId,
      items: items,
      total: this.total,
    };
    localStorage.setItem('check', 'true');
    localStorage.setItem('pedido', JSON.stringify(check));
    this.router.navigate(['principal/checkout']);
  }
}
