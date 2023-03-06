// Libraries Imports
import { createAction, props } from '@ngrx/store';

// Project Imports
import { DishModel } from 'src/app/core/models';

export const loadDishes = createAction('[Home] Load Dishes');
export const loadDishesSuccess = createAction(
	'[Home] Load Dishes Success',
	props<{ data: DishModel[] }>(),
);
export const loadDishesFailed = createAction('[Home] Load Dishes Failed', props<{ error: any }>());
