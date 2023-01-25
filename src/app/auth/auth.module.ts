import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [LoginComponent, RegisterComponent, NavegacionComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [LoginComponent, RegisterComponent],
})
export class AuthModule {}
