import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-payment-menu',
	templateUrl: './payment-menu.component.html',
	styleUrls: ['./payment-menu.component.scss'],
})
export class PaymentMenuComponent {
	@Output() close = new EventEmitter();
}
