// Libraries Imports
import { Store } from '@ngrx/store';
import { Component, Input } from '@angular/core';

// Project Imports
import { OrderModel } from 'src/app/core/models';
import { removeFromOrder } from 'src/app/pages/home/+store';

@Component({
	selector: 'app-order-item',
	templateUrl: './order-item.component.html',
	styleUrls: ['./order-item.component.scss'],
})
export class OrderItemComponent {
	@Input() orderItem!: OrderModel;

	constructor(private store: Store) {}

	public updateOrderItem() {}

	public removeFromOrder() {
		this.store.dispatch(removeFromOrder({ orderItemId: this.orderItem.id }));
	}
}
