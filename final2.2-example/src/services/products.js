import request from "../utils/request";

const ProductsService = {
  fetchProduct() {
    return request.get("/products").then(({ data }) => {
      return data;
    });
  },
};

export default ProductsService;
