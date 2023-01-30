import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  userData = {
    name: '',
    email: '',
    phone: '',
    location: '',
  };
  constructor(private router: Router, private usuarioSrv: UsuarioService) {}
  ngOnInit(): void {
    this.usuarioSrv.getProfile().subscribe((data) => {
      let uData: any = data;
      uData.name !== undefined ? (this.userData.name = uData.name) : null;
      uData.email !== undefined ? (this.userData.email = uData.email) : null;
      uData.phone !== undefined ? (this.userData.phone = uData.phone) : null;
      uData.location !== undefined
        ? (this.userData.location = uData.location)
        : null;
    });
  }
}
