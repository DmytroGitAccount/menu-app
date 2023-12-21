// Libraries Imports
import { Store } from '@ngrx/store';
import { Component, Input } from '@angular/core';

// Project Imports
import { DishModel } from 'src/app/core/models';
import { addToOrder } from 'src/app/pages/home/+store';
import { OrderModel } from 'src/app/core/models';

@Component({
	selector: 'app-menu-item',
	templateUrl: './menu-item.component.html',
	styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
	@Input() dish!: DishModel;

	constructor(private sotre: Store) {}

	public addToOrder() {
		const orderItem: OrderModel = {
			id: this.dish.id,
			name: this.dish.name,
			dishPrice: this.dish.price,
			totalPrice: this.dish.price,
			available: this.dish.available,
			imageUrl: this.dish.imageUrl,
			portions: 1,
			comment: '',
		};

		this.sotre.dispatch(addToOrder({ orderItem }));
	}
}
