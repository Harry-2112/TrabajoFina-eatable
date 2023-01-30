import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-profile-dates',
  templateUrl: './profile-dates.component.html',
  styleUrls: ['./profile-dates.component.css'],
})
export class ProfileDatesComponent implements OnInit {
  userData = {
    name: '',
    email: '',
    phone: '',
    address: '',
  };
  constructor(private router: Router, private usuarioSrv: UsuarioService) {}
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
  logoup() {
    this.router.navigate(['']);
  }
}
