// Libraries Imports
import { Store } from '@ngrx/store';
import { Component } from '@angular/core';

// Project Imports
import { selectDishes, loadDishes } from 'src/app/pages/home/+store';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
	public dishes$ = this.store.select(selectDishes);

	constructor(private store: Store) {
		this.store.dispatch(loadDishes());
	}
}
