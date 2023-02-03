// Local Imports
import { DishCategory } from '../models';
import { DishCategories } from '../enums';

export const dishCategoryMock: DishCategory[] = [
	{
		id: DishCategories.HotDishes,
		name: 'Hot Dishes',
	},
	{
		id: DishCategories.ColdDishes,
		name: 'Cold Dishes',
	},
	{
		id: DishCategories.Soup,
		name: 'Soup',
	},
	{
		id: DishCategories.Grill,
		name: 'Grill',
	},
	{
		id: DishCategories.Appetizer,
		name: 'Appetizer',
	},
	{
		id: DishCategories.Desert,
		name: 'Dessert',
	},
];
