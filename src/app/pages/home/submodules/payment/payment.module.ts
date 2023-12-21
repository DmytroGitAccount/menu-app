// Libraries Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project Imports
import { SharedModule } from 'src/app/shared/shared.module';

// Local Imports
import { PaymentComponent } from './components/payment/payment.component';
import { PaymentFormComponent } from './/components/payment-form/payment-form.component';
import { PaymentMenuComponent } from './components/payment-menu/payment-menu.component';
import { PaymentConfirmationComponent } from './components/payment-confirmation/payment-confirmation.component';

@NgModule({
	declarations: [
		PaymentComponent,
		PaymentFormComponent,
		PaymentMenuComponent,
		PaymentConfirmationComponent,
	],
	imports: [CommonModule, SharedModule],
	exports: [PaymentMenuComponent],
})
export class PaymentModule {}
