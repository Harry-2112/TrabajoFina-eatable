import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css'],
})
export class PrincipalComponent implements OnInit {
  orange!: string;
  color = '';
  constructor(private router: Router) {
    this.orange = this.router.url;
    this.validar();
  }
  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.orange = this.router.url;
        this.validar();
      }
    });
  }
  validar() {
    if (this.orange == '/principal/home') {
      this.color = 'home';
    }
    if (this.orange == '/principal') {
      this.color = 'home';
    }
    if (this.orange == '/principal/profile') {
      this.color = 'profile';
    }
    if (this.orange == '/principal/history') {
      this.color = 'history';
    }
  }
}
