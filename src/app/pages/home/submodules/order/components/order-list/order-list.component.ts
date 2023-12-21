// Libraries Imports
import { Component, Input } from '@angular/core';

// Project Imports
import { OrderModel } from 'src/app/core/models';

@Component({
	selector: 'app-order-list',
	templateUrl: './order-list.component.html',
	styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {
	@Input() orders: OrderModel[] = [
		{
			id: '123',
			name: 'Some name',
			price: 12,
			comment: 'Some Comment',
			portions: 1,
			imageUrl: '',
			available: 1,
		},
		{
			id: '123',
			name: 'Some name',
			price: 12,
			comment: 'Some Comment',
			portions: 1,
			imageUrl: '',
			available: 1,
		},
		{
			id: '123',
			name: 'Some name',
			price: 12,
			comment: 'Some Comment',
			portions: 1,
			imageUrl: '',
			available: 1,
		},
		{
			id: '123',
			name: 'Some name',
			price: 12,
			comment: 'Some Comment',
			portions: 1,
			imageUrl: '',
			available: 1,
		},
	];
}
