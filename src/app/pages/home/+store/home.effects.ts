// Libraries Imports
import { Injectable } from '@angular/core';
import { mergeMap, map, catchError, of } from 'rxjs';
import { Actions, createEffect, ofType } from '@ngrx/effects';

// Local Imports
import { DishesService } from '../services/dishes.service';
import { loadDishes, loadDishesSuccess, loadDishesFailed } from './home.actions';

@Injectable()
export class HomeEffects {
	public loadDishes$ = createEffect(() =>
		this.actions$.pipe(
			ofType(loadDishes),
			mergeMap(() =>
				this.dishesService.getDishes().pipe(
					map((dishes) => loadDishesSuccess({ data: dishes })),
					catchError((error) => of(loadDishesFailed({ error }))),
				),
			),
		),
	);

	constructor(private actions$: Actions, private dishesService: DishesService) {}
}
