// Libraries Imports
import { createReducer, on } from '@ngrx/store';

// Project Imports
import { DishModel } from 'src/app/core/models';

// Local Imports
import { loadDishes, loadDishesSuccess, loadDishesFailed } from './home.actions';

export const HOME_STATE_KEY = 'dishes';

export interface HomeState {
	dishes: DishModel[] | null;
}

export const initialState: HomeState = {
	dishes: null,
};

export const homeReducer = createReducer(
	initialState,
	on(loadDishes, (state) => ({ ...state, dishes: null })),
	on(loadDishesSuccess, (state, action) => ({ ...state, dishes: action.data })),
	on(loadDishesFailed, (state) => ({ ...state, dishes: null })),
);
