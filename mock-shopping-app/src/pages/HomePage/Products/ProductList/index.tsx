import React, { useContext } from "react";
import ProductCard from "pages/HomePage/Products/ProductCard";
import { Box, CircularProgress, styled } from "@mui/material";
import { productsContext } from "app/contexts/products";
const Container = styled(Box)`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;
const Spinner = styled(CircularProgress)`
	margin: 10rem auto;
`
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
