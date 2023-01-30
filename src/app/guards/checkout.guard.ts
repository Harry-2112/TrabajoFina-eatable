import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckoutGuard implements CanActivate {
  constructor(private router: Router, private toastr: ToastrService) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.hasUser()) {
      return true;
    }
    this.router.navigate(['/principal/card']);
    this.toastr.error(
      'para realizar una compra tiene que pasar por el carrito',
      'Error'
    );
    return false;
  }
  hasUser(): boolean {
    if (localStorage.getItem('check') == 'false') {
      return false;
    } else {
      return true;
    }
  }
}
