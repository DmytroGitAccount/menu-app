// Libraries Imports
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

// Project Imports
import { selectOrders } from 'src/app/pages/home/+store';

@Component({
	selector: 'app-payment-confirmation',
	templateUrl: './payment-confirmation.component.html',
	styleUrls: ['./payment-confirmation.component.scss'],
})
export class PaymentConfirmationComponent {
	public orders$ = this.store.select(selectOrders);

	constructor(private store: Store) {}
}
