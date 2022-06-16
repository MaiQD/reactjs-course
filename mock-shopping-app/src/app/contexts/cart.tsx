import { CartItem, CartProductItem } from "app/models/cartitem";
import { Product } from "app/models/products";
import User from "app/models/user";
import React, { createContext, useEffect, useState } from "react";

export interface ICartContext {
	cart: CartItem[];
	addProductToCart: (product: Product, number?: number) => void;
	clearCart: () => void;
	removeProductFromCart: (productId: number) => void;
	updateDirectNumberProduct: (productId: number, number: number) => void;
	initDataCart: () => void;
}

const initCartContextValue: ICartContext = {
	cart: [],
	addProductToCart: () => {},
	clearCart: () => {},
	removeProductFromCart: () => {},
	updateDirectNumberProduct: () => {},
	initDataCart: () => {},
};

export const cartContext = createContext(initCartContextValue);

function CartContextProvider({ children }: { children: React.ReactNode }) {
	const [cart, setCart] = useState<CartItem[]>([]);

	const saveToLocalStorage = (nextCart: CartItem[]) => {
		const cartString = JSON.stringify(nextCart);
		const userString = sessionStorage.getItem("USER");
		if (userString) {
			const jsonUser: User = JSON.parse(userString);
			localStorage.setItem(`${jsonUser.username}_CART`, cartString);
		}
	};
	const addProductToCart = (product: Product, number = 1) => {
		//nếu giỏ hàng rỗng
		if (cart?.length === 0) {
			let cartItem = new CartProductItem(product);
			cartItem.quantity = number;
			setCart((pre) => {
				const nextCart = [...pre, cartItem];
				saveToLocalStorage(nextCart);
				return nextCart;
			});
		} else {
			setCart((pre) => {
				var cartItem = cart.filter((p) => p.productId === product.id);
				if (cartItem.length > 0) {
					for (var i in pre) {
						if (pre[i].productId === product.id) {
							const newQuatity = pre[i].quantity + number;
							if (newQuatity < 10) {
								pre[i].quantity += number;
							}
							break;
						}
					}
				} else {
					let item = new CartProductItem(product);
					item.quantity = number;
					pre.push(item);
				}
				const nextCart = [...pre];
				saveToLocalStorage(nextCart);
				return nextCart;
			});
		}
	};
	const updateDirectNumberProduct = (productId: number, number: number) => {
		setCart((pre) => {
			if (pre.length === 0) return [];
			var items = pre.filter((p) => p.productId === productId);
			if (items.length > 0) {
				for (var i in pre) {
					if (pre[i].productId === productId) {
						pre[i].quantity = number;
						break;
					}
				}
			}
			const nextCart = [...pre];
			saveToLocalStorage(nextCart);
			return nextCart;
		});
	};
	const removeProductFromCart = (productId: number) => {
		setCart((pre) => {
			if (pre.length === 0) return [];
			var items = pre.filter((p) => p.productId !== productId);
			saveToLocalStorage(items);
			return items;
		});
	};
	const initDataCart = () => {
		const userString = sessionStorage.getItem("USER");
		if (!userString) {
			return;
		}
		const jsonUser = JSON.parse(userString);
		const cartString = localStorage.getItem(`${jsonUser.username}_CART`);
		const cartJson: CartItem[] = JSON.parse("" + cartString);
		if (cartJson) {
			setCart(cartJson);
		}
	};
	const clearCart = () => {
		setCart([]);
		saveToLocalStorage([]);
	};

	return (
		<cartContext.Provider
			value={{
				cart,
				addProductToCart,
				clearCart,
				removeProductFromCart,
				updateDirectNumberProduct,
				initDataCart,
			}}
		>
			{children}
		</cartContext.Provider>
	);
}

export default CartContextProvider;
