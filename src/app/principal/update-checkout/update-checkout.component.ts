import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-checkout',
  templateUrl: './update-checkout.component.html',
  styleUrls: ['./update-checkout.component.css'],
})
export class UpdateCheckoutComponent implements OnInit {
  userData: any = localStorage.getItem('pedido');
  constructor(private tostr: ToastrService, private router: Router) {}
  ngOnInit(): void {
    this.userData !== null ? (this.userData = JSON.parse(this.userData)) : null;
  }
  submit(phone: string, delivery_address: string) {
    if (
      phone == '' ||
      phone == null ||
      delivery_address == '' ||
      delivery_address == null
    ) {
      this.tostr.error('porfavor complete los datos', 'error');
      return;
    }
    let newData = this.userData;
    (newData.phone = phone), (newData.delivery_address = delivery_address);
    localStorage.setItem('pedido', JSON.stringify(newData));
    this.router.navigate(['principal/checkout']);
  }
}
