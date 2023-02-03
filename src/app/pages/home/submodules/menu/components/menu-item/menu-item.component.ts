// Libraries Imports
import { Component, Input } from '@angular/core';

// Project Imports
import { DishModel } from 'src/app/core/models';

@Component({
	selector: 'app-menu-item',
	templateUrl: './menu-item.component.html',
	styleUrls: ['./menu-item.component.scss'],
})
export class MenuItemComponent {
	@Input() dish!: DishModel;

	public selectDish() {
		console.log('Dish selected');
	}
}
