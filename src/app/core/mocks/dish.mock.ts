// Local Imports
import { DishModel } from '../models';
import { DishCategories } from '../enums';

export const dishMock: DishModel = {
	id: '0e04cb',
	price: 2.29,
	available: 20,
	category: DishCategories.HotDishes,
	imageUrl: 'assets/images/image.png',
	name: 'Spicy seasoned seafood noodles',
};
