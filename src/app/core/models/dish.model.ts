import { DishCategories } from '../enums';

export interface DishModel {
	id: string;
	name: string;
	price: number;
	available: number;
	category: DishCategories;
	imageUrl: string;
}
