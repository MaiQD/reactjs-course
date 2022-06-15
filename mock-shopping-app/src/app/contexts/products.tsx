import { createContext, useState } from "react";
import _sortBy from "lodash/sortBy";
import { Product } from "app/models/products";
import agent from "app/api/agent";
export interface IProductContext {
	products: Product[];
	productsFiltered: Product[];
	productsLoading: boolean;
	fetchProducts: () => Promise<void>;
	filterProducts: (searchValue?: string, sort?: string) => void;
}
const initProductContextValue: IProductContext = {
	products: [],
	productsFiltered: [],
	productsLoading: false,
	fetchProducts: () => Promise.resolve(),
	filterProducts: () => null,
};
export const productsContext = createContext(initProductContextValue);

function ProductsContextProvider({ children }: { children: React.ReactNode }) {
	const [products, setProduct] = useState<Product[]>([]);
	const [productsFiltered, setDataFiltered] = useState<Product[]>([]);
	const [productsLoading, setProductLoading] = useState(false);

	const fetchProducts = async () => {
		setProductLoading(true);
		const fetchedProducts = await agent.Products.list(new URLSearchParams());
		setProduct(fetchedProducts);
		setDataFiltered([...fetchedProducts]);
		setProductLoading(false);
	};

	const filterProducts = (searchValue: string| undefined, sort = "A") => {
		console.log(products);
		console.log(productsFiltered);
		let newProducts = !searchValue
			? products
			: products.filter(({ name }) => name.includes(searchValue));
		newProducts =
			sort === "D"
				? _sortBy(newProducts, ["price"]).reverse()
				: _sortBy(newProducts, ["price"]);
		setDataFiltered(newProducts);
	};

	return (
		<productsContext.Provider
			value={{
				products,
				productsFiltered,
				productsLoading,
				fetchProducts,
				filterProducts,
			}}
		>
			{children}
		</productsContext.Provider>
	);
}

export default ProductsContextProvider;
