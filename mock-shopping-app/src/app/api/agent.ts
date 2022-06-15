import axios, { AxiosResponse } from "axios";
import User from "app/models/user";
import { Product } from "app/models/products";

axios.defaults.baseURL = "https://629195c79d159855f07d4183.mockapi.io/api/v1";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;
const requests = {
	get: <T>(url: string) => axios.get<T>(url).then(responseBody),
	post: <T>(url: string, body: {}) =>
		axios.post<T>(url, body).then(responseBody),
	put: <T>(url: string, body: {}) => axios.put<T>(url, body).then(responseBody),
	del: <T>(url: string) => axios.delete<T>(url).then(responseBody),
};

const Users = {
	list: (params: URLSearchParams) =>
		axios.get<User[]>("/users", { params }).then(responseBody),
	details: (id: string) => requests.get<User>(`/users/${id}`),
	create: (user: User) => requests.post<void>("/users", user),
	update: (user: User) => requests.put<void>(`/users/${user.id}`, user),
	delete: (id: string) => requests.del<void>(`/users/${id}`),
};
const Products = {
	list: (params: URLSearchParams) =>
		axios.get<Product[]>("/products", { params }).then(responseBody),
	details: (id: string) => requests.get<Product>(`/products/${id}`),
	create: (product: Product) => requests.post<void>("/products", product),
	update: (product: Product) =>
		requests.put<void>(`/products/${product.id}`, product),
	delete: (id: string) => requests.del<void>(`/products/${id}`),
};
const agent = {
	Users,
	Products,
};

export default agent;
