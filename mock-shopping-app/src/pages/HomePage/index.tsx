import React, { useContext, useEffect } from "react";
import withAuth from "app/HOC/withAuth";
import Header from "app/layout/Header";
import ProductList from "pages/HomePage/Products/ProductList";
import ProductsContextProvider, {
	productsContext,
} from "app/contexts/products";
import _isEmpty from "lodash/isEmpty";
import ProductFilter from "./Products/ProductFilter";
import { Container, ProductListContainer, ProductWrapper } from "./styles";


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
			<Header isShowSearchBox={true} />
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
