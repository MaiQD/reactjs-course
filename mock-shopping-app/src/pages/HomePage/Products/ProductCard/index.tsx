import { cartContext } from "app/contexts/cart";
import { Product } from "app/models/products";
import { useSnackbar } from "notistack";
import React, { useContext } from "react";
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
	const { addProductToCart } = useContext(cartContext);
	const { enqueueSnackbar } = useSnackbar();

	const addToCartHandler = () => {
		addProductToCart(product);
		enqueueSnackbar("Add product to cart success!", { variant: "success" });
	};
	return (
		<Container>
			<Image src={`${product.image}?random=${product.id}`} alt="product" />
			<ProductTitle>{product.name}</ProductTitle>
			<ProductPrice>{`${product.price.toLocaleString('vi-VN')} đ`}</ProductPrice>
			<AddToCarButton onClick={addToCartHandler}>Add to cart</AddToCarButton>
		</Container>
	);
}

export default ProductCard;
