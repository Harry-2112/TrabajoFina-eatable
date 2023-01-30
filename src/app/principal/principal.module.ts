import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { HistoryComponent } from './history/history.component';
import { PrincipalComponent } from './principal/principal.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome/fontawesome.module';
import { RouterModule } from '@angular/router';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ProfileDatesComponent } from './profile-dates/profile-dates.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './card/card.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CheckoutDatesComponent } from './checkout-dates/checkout-dates.component';
import { UpdateCheckoutComponent } from './update-checkout/update-checkout.component';

@NgModule({
  declarations: [
    HomeComponent,
    ProfileComponent,
    HistoryComponent,
    PrincipalComponent,
    UpdateProfileComponent,
    ProfileDatesComponent,
    CardComponent,
    ProductComponent,
    CheckoutComponent,
    CheckoutDatesComponent,
    UpdateCheckoutComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    HomeComponent,
    ProfileComponent,
    HistoryComponent,
    PrincipalComponent,
    UpdateProfileComponent,
  ],
})
export class PrincipalModule {}
