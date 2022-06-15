import React, { useContext, useEffect } from "react";
import ProductCard from "pages/HomePage/Products/ProductCard";
import { Box, styled } from "@mui/material";
import products from "assets/data/product";
import { productsContext } from "app/contexts/products";
import _isEmpty from "lodash/isEmpty";
const Container = styled(Box)`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

function ProductList() {
	const { fetchProducts, productsLoading, productsFiltered, filterProducts } = useContext(productsContext);
	useEffect(() => {
		(async () => {
			if (_isEmpty(productsFiltered) && !productsLoading) {
				// debugger;
				await fetchProducts();
			}
		})()
	}, []);
	return (
		<Container>
			{productsFiltered &&
				!productsLoading &&
				productsFiltered.map((item) => (
					<ProductCard product={item} key={item.id} />
				))}
		</Container>
	);
}

export default ProductList;
