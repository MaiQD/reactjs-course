export interface Product {
	id: number;
	name: string;
	price: number;
	description: string;
	image: string;
	categoryId: number;
	createdAt: Date,
}

export interface ProductFilter {
	sortBy: string;
	keyword?: string;
	categoryId?: number;
}