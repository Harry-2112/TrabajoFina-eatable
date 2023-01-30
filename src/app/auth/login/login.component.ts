import { Token } from '@angular/compiler';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(
    private toastr: ToastrService,
    private loginSrv: LoginService,
    private router: Router
  ) {
    localStorage.clear();
  }
  login(email: string, password: string) {
    if (email == '' || password == '') {
      this.toastr.error(
        'Porfavor complete todos los campos del formulario',
        'Error'
      );
      return;
    }
    let user = { email: email, password: password };
    this.loginSrv.login(user).subscribe(
      (data) => {
        if (data == 'Email not found') {
          this.toastr.error('Email no encontrado', 'Error');
          return;
        }
        if (data == 'Wrong password') {
          this.toastr.error('Contraseña Incorrecta', 'Error');
          return;
        }
        this.obtenerToken(data);
        this.router.navigate(['/principal']);
      },
      (error) => {
        console.log(error);
        this.toastr.error(error.message, error.name);
      }
    );
  }
  obtenerToken(data: any) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('id', data.id);
    localStorage.setItem('carrito', '[]');
    localStorage.setItem('email', data.email);
  }
}
