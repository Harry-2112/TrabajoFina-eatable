import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private toastr: ToastrService) {}

  register(email: string, password: string) {
    if (email == '' || password == '') {
      this.toastr.error('Porfavor complete todos los campos', 'error');
      return;
    }
    console.log(email, password);
  }
}
