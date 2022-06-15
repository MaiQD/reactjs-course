import React, { useContext, useEffect } from "react";
import withAuth from "app/HOC/withAuth";
import Header from "app/layout/Header";
import { Box, styled } from "@mui/material";
import ProductList from "pages/HomePage/Products/ProductList";
import ProductsContextProvider, {
	productsContext,
} from "app/contexts/products";
import _isEmpty from "lodash/isEmpty";
import ProductFilter from "./Products/ProductFilter";

const Container = styled(Box)`
	display: flex;
	flex-direction: column;
`;
const ProductWrapper = styled(Box)`
	display: flex;

	min-width: 100vw;
	margin: 0 auto;
	flex-direction: column;
	@media only screen and (min-width: 1200px) {
		flex-direction: row;
		min-width: 1200px;
		width: 1200px;
		margin: 2rem auto 0px;
	}
`;
const ProductFilterContainer = styled(Box)`
	background-color: red;
	min-height: 50vh;
	flex: 1 0;
	@media only screen and (min-width: 1200px) {
		margin: 0 1.25rem 1.25rem 0;
		flex: 1 0 11.875rem;
	}
`;
const ProductListContainer = styled(Box)`
	flex: 5;
	width: 100%;
	@media only screen and (min-width: 1200px) {
		width: 55%;
	}
`;
function HomePage() {
	const { fetchProducts, productsLoading, productsFiltered} =
		useContext(productsContext);
	useEffect(() => {
		(async () => {
			if (_isEmpty(productsFiltered) && !productsLoading) {
				await fetchProducts();
			}
		})();
	}, []);
	return (
		<Container>
			<Header />
			<ProductWrapper>
				{/* <ProductFilterContainer>this is product filter</ProductFilterContainer> */}
				<ProductListContainer>
					<ProductFilter />
					<ProductList />
				</ProductListContainer>
			</ProductWrapper>
		</Container>
	);
}
export const HomeWrapper = () => {
	return (
		<ProductsContextProvider>
			<HomePage />
		</ProductsContextProvider>
	);
};
export default withAuth(HomeWrapper);
