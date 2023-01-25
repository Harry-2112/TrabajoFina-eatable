import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private toastr: ToastrService) {}
  login(email: string, password: string) {
    if (email == '' || password == '') {
      this.toastr.error(
        'Porfavor complete todos los campos del formulario',
        'Error'
      );
      return;
    }
    console.log(email, password);
  }
}
