import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css'],
})
export class UpdateProfileComponent implements OnInit {
  userData = {
    name: '',
    email: '',
    phone: '',
    address: '',
  };
  constructor(
    private router: Router,
    private usuarioSrv: UsuarioService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.usuarioSrv.getProfile().subscribe((data) => {
      let uData: any = data;
      uData.name !== undefined ? (this.userData.name = uData.name) : null;
      uData.email !== undefined ? (this.userData.email = uData.email) : null;
      uData.phone !== undefined ? (this.userData.phone = uData.phone) : null;
      uData.address !== undefined
        ? (this.userData.address = uData.address)
        : null;
    });
  }
  guardar(name: string, email: string, phone: string, address: string) {
    let update = {
      name: name,
      email: email,
      phone: phone,
      address: address,
    };
    this.usuarioSrv.editarUser(update).subscribe(
      (data) => {
        this.toastr.success(
          'Usuario Actualizado Correctamente',
          'Felicidades!'
        );
        this.router.navigate(['/principal/profile']);
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
