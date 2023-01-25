import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.css'],
})
export class NavegacionComponent implements OnInit {
  login!: boolean;
  constructor(private router: Router) {}
  ngOnInit(): void {
    this.router.url == '/login' ? (this.login = true) : (this.login = false);
  }
}
