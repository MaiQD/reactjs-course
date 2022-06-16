import { Product } from "./products";

export interface CartItem {
	productId: number;
	price: number;
	quantity: number;

	//display prop
	productName: string;
	productImage: string;
}
export class CartProductItem implements CartItem {
	productId: number;
	price: number;
	quantity: number;

	//display prop
	productName: string;
	productImage: string;
	constructor(product: Product) {
		this.productId = product.id;
		this.quantity = 1;
		this.price = product.price;
		this.productName = product.name;
		this.productImage = product.image;
	}
}
