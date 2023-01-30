import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SignupService } from 'src/app/services/signup.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(
    private toastr: ToastrService,
    private signupSrv: SignupService,
    private router: Router
  ) {}

  register(email: string, password: string) {
    if (email == '' || password == '') {
      this.toastr.error('Porfavor complete todos los campos', 'error');
      return;
    }
    let newUser = { email: email, password: password };
    this.signupSrv.signup(newUser).subscribe((data) => {
      let keis = Object.keys(data);
      if (keis[0] == 'error') {
        this.toastr.error('Este email ya se encuentra registraso', 'Error');
        return;
      }
      this.toastr.success(
        'El usuario se reguistro correctamente',
        'Usuario reguistrado'
      );
      this.router.navigate(['/login']);
    });
  }
}
