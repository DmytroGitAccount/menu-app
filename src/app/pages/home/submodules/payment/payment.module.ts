// Libraries Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Local Imports
import { PaymentComponent } from './payment.component';
import { PaymentFormComponent } from './/components/payment-form/payment-form.component';

@NgModule({
	declarations: [PaymentComponent, PaymentFormComponent],
	imports: [CommonModule],
})
export class PaymentModule {}
