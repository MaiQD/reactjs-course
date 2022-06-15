import { createContext, useEffect, useState } from "react";
import _sortBy from "lodash/sortBy";
import { Product, ProductFilter } from "app/models/products";
import agent from "app/api/agent";
import _isEmpty from "lodash/isEmpty";
export interface IProductContext {
	productsFiltered: Product[];
	filterCondition: ProductFilter;
	productsLoading: boolean;
	fetchProducts: () => Promise<void>;
	filterProducts: (keyword?: string, sortBy?: string, categoryId?: number) => Promise<void>;
}
const initProductFilter: ProductFilter = {
	sortBy: "A",
	keyword: "",
	categoryId: 0,
};
const initProductContextValue: IProductContext = {
	productsFiltered: [],
	filterCondition: initProductFilter,
	productsLoading: false,
	fetchProducts: () => Promise.resolve(),
	filterProducts: () => Promise.resolve(),
};
export const productsContext = createContext(initProductContextValue);

function ProductsContextProvider({ children }: { children: React.ReactNode }) {
	const [productsFiltered, setDataFiltered] = useState<Product[]>([]);
	const [productsLoading, setProductLoading] = useState(false);
	const [productFilter, setProductFilter] =
		useState<ProductFilter>(initProductFilter);
	useEffect(() => {
		(async () => {
			const params = new URLSearchParams();
			if (!_isEmpty(productFilter.keyword)) {
				params.append("name", "" + productFilter.keyword);
			}
			const products = await agent.Products.list(params);
			let newProducts = [];
			if(productFilter.categoryId !== 0){
				newProducts = products.filter((p) => p.categoryId === productFilter.categoryId)
			}
			else{
				newProducts = products;
			}
			newProducts =
				productFilter.sortBy === "D"
					? _sortBy(newProducts, ["price"]).reverse()
					: _sortBy(newProducts, ["price"]);
			setDataFiltered(newProducts);
		})();
	}, [productFilter.keyword, productFilter.sortBy, productFilter.categoryId]);

	const fetchProducts = async () => {
		setProductLoading(true);
		const fetchedProducts = await agent.Products.list(new URLSearchParams());
		setDataFiltered(_sortBy(fetchedProducts, ["price"]));
		setProductLoading(false);
	};

	const filterProducts = async (
		keyword?: string,
		sortBy = "A",
		categoryId = 0
	) => {
		setProductFilter((pre) => {
			return {
				...pre,
				keyword: keyword,
				sortBy: sortBy,
				categoryId: categoryId,
			};
		});
	};

	return (
		<productsContext.Provider
			value={{
				productsFiltered,
				filterCondition: productFilter,
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
