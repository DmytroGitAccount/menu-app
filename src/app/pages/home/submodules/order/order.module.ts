// Libraries Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Project Imports
import { SharedModule } from 'src/app/shared/shared.module';
import { PaymentModule } from 'src/app/pages/home/submodules/payment/payment.module';

// Local Imports
import { OrderComponent } from './components/order/order.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { OrderListComponent } from './components/order-list/order-list.component';

@NgModule({
	declarations: [OrderComponent, OrderItemComponent, OrderListComponent],
	imports: [CommonModule, SharedModule, PaymentModule],
	exports: [OrderComponent],
})
export class OrderModule {}
