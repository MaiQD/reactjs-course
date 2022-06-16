import { cartContext } from "app/contexts/cart";
import { useSnackbar } from "notistack";
import React, { useContext } from "react";
import CartCard from "../CartCard";
import { SubmitButton, SubmitContainer } from "./styles";

function CartList() {
	const { cart, clearCart } = useContext(cartContext);
	const { enqueueSnackbar } = useSnackbar();
	const submitHandler = () => {
		clearCart();
		enqueueSnackbar("Submit cart success", { variant: "success" });
	};
	return (
		<div>
			<SubmitContainer>
				<SubmitButton onClick={submitHandler}>Submit</SubmitButton>
			</SubmitContainer>
			{cart.map((item) => (
				<CartCard key={item.productId} cartItem={item} />
			))}
		</div>
	);
}

export default CartList;
