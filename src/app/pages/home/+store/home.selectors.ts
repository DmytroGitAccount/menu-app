// Libraries Imports
import { createSelector, createFeatureSelector } from '@ngrx/store';

// Local Imports
import { HomeState, HOME_STATE_KEY } from './home.reducer';

export const selectDishesFeature = createFeatureSelector<HomeState>(HOME_STATE_KEY);

export const selectDishes = createSelector(selectDishesFeature, (state) => state.dishes);

export const selectOrders = createSelector(selectDishesFeature, (state) => state.orders);
