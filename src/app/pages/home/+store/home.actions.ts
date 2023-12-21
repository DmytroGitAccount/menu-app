// Libraries Imports
import { createAction, props } from '@ngrx/store';

// Project Imports
import { DishModel, OrderModel } from 'src/app/core/models';

export const loadDishes = createAction('[Home] Load Dishes');
export const loadDishesSuccess = createAction(
	'[Home] Load Dishes Success',
	props<{ data: DishModel[] }>(),
);
export const loadDishesFailed = createAction('[Home] Load Dishes Failed', props<{ error: any }>());

export const addToOrder = createAction('[Home] Add To Order', props<{ orderItem: OrderModel }>());
export const updateOrderItem = createAction(
	'[Home] Update Order Item',
	props<{ orderItem: OrderModel }>(),
);
export const removeFromOrder = createAction(
	'[Home] Remove From Order',
	props<{ orderItemId: string }>(),
);
