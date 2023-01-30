import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CheckloginGuard } from './guards/checklogin.guard';
import { CheckoutGuard } from './guards/checkout.guard';
import { CardComponent } from './principal/card/card.component';
import { CheckoutDatesComponent } from './principal/checkout-dates/checkout-dates.component';
import { CheckoutComponent } from './principal/checkout/checkout.component';
import { HistoryComponent } from './principal/history/history.component';
import { HomeComponent } from './principal/home/home.component';
import { PrincipalComponent } from './principal/principal/principal.component';
import { ProductComponent } from './principal/product/product.component';
import { ProfileDatesComponent } from './principal/profile-dates/profile-dates.component';
import { ProfileComponent } from './principal/profile/profile.component';
import { UpdateCheckoutComponent } from './principal/update-checkout/update-checkout.component';
import { UpdateProfileComponent } from './principal/update-profile/update-profile.component';
import { CargandoComponent } from './share/cargando/cargando.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'principal',
    component: PrincipalComponent,
    canActivate: [CheckloginGuard],
    children: [
      { path: '', component: HomeComponent },
      { path: 'home', component: HomeComponent },
      { path: 'card', component: CardComponent },
      { path: 'product', component: ProductComponent },
      {
        path: 'profile',
        component: ProfileComponent,
        children: [
          { path: '', component: ProfileDatesComponent },
          { path: 'update', component: UpdateProfileComponent },
        ],
      },
      {
        path: 'checkout',
        component: CheckoutComponent,
        canActivate: [CheckoutGuard],
        children: [
          { path: '', component: CheckoutDatesComponent },
          { path: 'checkoutUpdate', component: UpdateCheckoutComponent },
        ],
      },
      { path: 'history', component: HistoryComponent },
    ],
  },
  { path: '**', redirectTo: 'principal', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
