import React, { useContext } from "react";
import ProductCard from "pages/HomePage/Products/ProductCard";
import { productsContext } from "app/contexts/products";
import { Container, Spinner } from "./styles";

function ProductList() {
	const { productsLoading, productsFiltered } = useContext(productsContext);
	return (
		<Container>
			{!productsLoading ? (
				productsFiltered.map((item) => (
					<ProductCard product={item} key={item.id} />
				))
			) : (
				<Spinner />
			)}
		</Container>
	);
}

export default ProductList;
