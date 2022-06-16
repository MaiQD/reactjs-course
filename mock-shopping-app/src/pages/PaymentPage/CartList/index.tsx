import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { cartContext } from "app/contexts/cart";
import { primaryColorLight, primaryColorMain } from "assets/data/color";
import { useSnackbar } from "notistack";
import React, { useContext } from "react";
import CartCard from "../CartCard";

const SubmitContainer = styled(Box)`
	display: flex;
	justify-content: flex-end;
	margin-right: 20px;
	margin-top: 1rem;
`;
const SubmitButton = styled(Button)`
	background-color: ${primaryColorMain};
	color: white;
	:hover {
		background-color: ${primaryColorLight};
	}
`;
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
