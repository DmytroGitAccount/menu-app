export interface OrderModel {
	id: string;
	name: string;
	dishPrice: number;
	totalPrice: number;
	portions: number;
	available: number;
	imageUrl: string;
	comment: string;
}
