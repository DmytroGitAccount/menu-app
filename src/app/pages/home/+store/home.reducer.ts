// Libraries Imports
import { createReducer, on } from '@ngrx/store';

// Project Imports
import { DishModel, OrderModel } from 'src/app/core/models';

// Local Imports
import {
	loadDishes,
	loadDishesSuccess,
	loadDishesFailed,
	addToOrder,
	updateOrderItem,
	removeFromOrder,
} from './home.actions';

export const HOME_STATE_KEY = 'dishes';

export interface HomeState {
	dishes: DishModel[] | null;
	orders: OrderModel[];
}

export const initialState: HomeState = {
	dishes: null,
	orders: [],
};

export const homeReducer = createReducer(
	initialState,
	on(loadDishes, (state) => ({ ...state, dishes: null })),
	on(loadDishesSuccess, (state, action) => ({ ...state, dishes: action.data })),
	on(loadDishesFailed, (state) => ({ ...state, dishes: null })),

	on(addToOrder, (state, action) => ({
		...state,
		orders: addToOrderUpdateState(state.orders, action.orderItem),
	})),
	on(removeFromOrder, (state, action) => ({
		...state,
		orders: state.orders.filter((order) => order.id !== action.orderItemId),
	})),
);

function addToOrderUpdateState(orders: OrderModel[], orderItem: OrderModel): OrderModel[] {
	const existingItem = orders.find((order) => order.id === orderItem.id);

	if (existingItem) {
		const restOrders = orders.filter((order) => order.id !== existingItem.id);

		return [
			{
				...orderItem,
				portions:
					existingItem.available > existingItem.portions
						? existingItem.portions + 1
						: existingItem.portions,
			},
			...restOrders,
		];
	}

	return [...orders, orderItem];
}
