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
	@Input() orders!: OrderModel[];
}
