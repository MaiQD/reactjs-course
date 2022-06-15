import { Product } from "app/models/products";
import React from "react";
import {
	AddToCarButton,
	Image,
	Container,
	ProductPrice,
	ProductTitle,
} from "./styles";

interface IProps {
	product: Product;
}
function ProductCard({ product }: IProps) {
	return (
		<Container>
			<Image src={`${product.image}?random=${product.id}`} alt="product" />
			<ProductTitle>{product.name}</ProductTitle>
			<ProductPrice>{`$${product.price}`}</ProductPrice>
			<AddToCarButton>Add to cart</AddToCarButton>
		</Container>
	);
}

export default ProductCard;
