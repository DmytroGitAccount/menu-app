// Libraries Imports
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

// Local Imports
import { MenuModule } from './submodules/menu/menu.module';
import { OrderModule } from './submodules/order/order.module';
import { PaymentModule } from './submodules/payment/payment.module';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

import { homeReducer, HOME_STATE_KEY, HomeEffects } from './+store';

@NgModule({
	imports: [
		CommonModule,
		HomeRoutingModule,
		MenuModule,
		OrderModule,
		PaymentModule,
		StoreModule.forFeature(HOME_STATE_KEY, homeReducer),
		EffectsModule.forFeature([HomeEffects]),
	],
	declarations: [HomeComponent],
})
export class HomeModule {}
