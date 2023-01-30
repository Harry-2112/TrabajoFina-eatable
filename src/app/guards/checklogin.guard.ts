import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CheckloginGuard implements CanActivate {
  constructor(private toastr: ToastrService, private router: Router) {}
  canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.hasUser()) {
      return true;
    }
    this.router.navigate(['/login']);
    this.toastr.error('Porfavor rellene el login para ingresar', 'Error');
    return false;
  }
  hasUser(): boolean {
    if (localStorage.getItem('token') !== null) {
      return true;
    } else {
      return false;
    }
  }
}
