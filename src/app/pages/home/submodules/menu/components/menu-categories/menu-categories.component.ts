// Libraries Imports
import { Router } from '@angular/router';
import { Component } from '@angular/core';

// Project Imports
import { dishCategoryMock } from 'src/app/core/mocks';

@Component({
	selector: 'app-menu-categories',
	templateUrl: './menu-categories.component.html',
	styleUrls: ['./menu-categories.component.scss'],
})
export class MenuCategoriesComponent {
	public readonly categories = dishCategoryMock;

	constructor(private router: Router) {}

	public selectCategory(id: number) {
		this.router.navigate([], { queryParams: { category: id }, replaceUrl: true });
	}
}
