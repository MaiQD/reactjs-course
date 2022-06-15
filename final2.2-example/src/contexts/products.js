import { createContext, useState } from "react";
import request from "../utils/request";
import ProductService from "../services/products";
import _sortBy from "lodash/sortBy";

export const productsContext = createContext();

function ProductsContextProvider({ children }) {
  const [products, setProduct] = useState([]);
  const [productsFiltered, setDataFiltered] = useState([]);
  const [productsLoading, setProductLoading] = useState(false);

  const fetchProducts = () => {
    setProductLoading(true);
    ProductService.fetchProduct()
      .then((data) => {
        setProduct(data);
        setDataFiltered(data);
      })
      .finally(() => {
        setProductLoading(false);
      });
  };

  const filterProducts = ({ searchValue, sort }) => {
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
