// Libraries Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Local Imports
import { OrderComponent } from './components/order/order.component';
import { OrderItemComponent } from './components/order-item/order-item.component';

@NgModule({
	declarations: [OrderComponent, OrderItemComponent],
	imports: [CommonModule],
	exports: [OrderComponent],
})
export class OrderModule {}
