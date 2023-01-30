import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { OrdersService } from 'src/app/services/orders.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-checkout-dates',
  templateUrl: './checkout-dates.component.html',
  styleUrls: ['./checkout-dates.component.css'],
})
export class CheckoutDatesComponent implements OnInit {
  userData: any = localStorage.getItem('pedido');
  constructor(
    private tostr: ToastrService,
    private orderSrv: OrdersService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.userData !== null ? (this.userData = JSON.parse(this.userData)) : null;
  }

  completar() {
    if (
      this.userData.delivery_address == null ||
      this.userData.delivery_address == ''
    ) {
      this.tostr.error('Porfavor ingrese su direccion de envio', 'Error');
      return;
    }
    if (this.userData.phone == null || this.userData.phone == '') {
      this.tostr.error('Porfavor ingrese su numero de tellefono', 'Error');
      return;
    }

    this.orderSrv.post(this.userData).subscribe(
      (data) => {
        this.tostr.success(
          'Su pedido se completo correctamente',
          'Felicidades!'
        );
        localStorage.setItem('pedido', '[]');
        localStorage.setItem('carrito', '[]');
        localStorage.setItem('reload', 'false');
        this.router.navigate(['principal/history']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
