// Libraries Imports
import { Component } from '@angular/core';

// Project Imports
import { DishModel } from 'src/app/core/models';
import { dishesMock } from 'src/app/core/mocks';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
	public dishes: DishModel[] = dishesMock;

	constructor() {}
}
