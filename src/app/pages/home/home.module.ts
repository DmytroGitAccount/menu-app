// Libraries Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Local Imports
import { MenuModule } from './submodules/menu/menu.module';
import { OrderModule } from './submodules/order/order.module';
import { PaymentModule } from './submodules/payment/payment.module';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
	imports: [CommonModule, HomeRoutingModule, MenuModule, OrderModule, PaymentModule],
	declarations: [HomeComponent],
})
export class HomeModule {}
