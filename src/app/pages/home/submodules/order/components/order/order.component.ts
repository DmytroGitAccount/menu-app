// Libraries Imports
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

// Project Imports
import { selectOrders } from 'src/app/pages/home/+store';

@Component({
	selector: 'app-order',
	templateUrl: './order.component.html',
	styleUrls: ['./order.component.scss'],
})
export class OrderComponent {
	public orders$ = this.store.select(selectOrders);

	public optionsBtns = [
		{ id: 1, name: 'Dine In', value: 'dine_in' },
		{ id: 2, name: 'To Go', value: 'to_go' },
		{ id: 3, name: 'Delivery', value: 'delivery' },
	];

	constructor(private store: Store) {}
}
