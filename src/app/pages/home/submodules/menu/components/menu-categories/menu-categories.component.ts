// Libraries Imports
import { Router } from '@angular/router';
import { Component } from '@angular/core';

// Project Imports
import { DishCategory } from 'src/app/core/models';
import { dishCategoryMock } from 'src/app/core/mocks';

@Component({
	selector: 'app-menu-categories',
	templateUrl: './menu-categories.component.html',
	styleUrls: ['./menu-categories.component.scss'],
})
export class MenuCategoriesComponent {
	public readonly categories = dishCategoryMock;
	public selectedCategory!: DishCategory;

	constructor(private router: Router) {}

	public selectCategory(category: DishCategory) {
		this.selectedCategory = category;
		this.router.navigate([], { queryParams: { category: category.id }, replaceUrl: true });
	}
}
