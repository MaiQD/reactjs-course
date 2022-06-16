import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import { cartContext } from "app/contexts/cart";
import { CartItem } from "app/models/cartitem";
import { useSnackbar } from "notistack";
import React, { useContext, useState } from "react";

const Container = styled(Box)`
	border: 1px solid rgba(0, 0, 0, 0.09);
	border-radius: 2px;
	margin: 22px 20px;
	background-color: white;
`;
const CartItemWrapper = styled(Box)`
	margin-top: 0;
	padding: 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const CartItemImage = styled("img")`
	width: 80px;
	height: 80px;
	object-fit: contain;
	margin-right: 10px;
	border: 1px solid rgba(0, 0, 0, 0.09);
`;
interface IProps {
	cartItem: CartItem;
}
function CartCard({ cartItem }: IProps) {
	const { removeProductFromCart } = useContext(cartContext);
	const { enqueueSnackbar } = useSnackbar();
	
	const deleteHandler = () => {
		removeProductFromCart(cartItem.productId);
		enqueueSnackbar("Remove product success", { variant: "success" });
	};
	return (
		<Container>
			<CartItemWrapper>
				<CartItemImage
					src={`${cartItem.productImage}?random=${cartItem.productId}`}
					alt={cartItem.productName}
				/>
				<Typography>{cartItem.productName}</Typography>
				<Typography>{cartItem.quantity}</Typography>
				<Typography>{`${(cartItem.price * cartItem.quantity).toLocaleString(
					"vi-VN"
				)} đ`}</Typography>
				<Button onClick={deleteHandler} sx={{ textTransform: "none" }}>Delete</Button>
			</CartItemWrapper>
		</Container>
	);
}

export default CartCard;
