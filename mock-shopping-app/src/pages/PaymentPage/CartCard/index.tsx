import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { cartContext } from "app/contexts/cart";
import { CartItem } from "app/models/cartitem";
import _ from "lodash";
import { useSnackbar } from "notistack";
import React, { ChangeEvent, useContext } from "react";
import { CartItemImage, CartItemWrapper, Container } from "./styles";

interface IProps {
	cartItem: CartItem;
}
function CartCard({ cartItem }: IProps) {
	const { removeProductFromCart, updateDirectNumberProduct } =
		useContext(cartContext);
	const { enqueueSnackbar } = useSnackbar();

	const deleteHandler = () => {
		removeProductFromCart(cartItem.productId);
		enqueueSnackbar("Remove product success", { variant: "success" });
	};
	const handleChangeQuantity = (event: ChangeEvent<HTMLInputElement>) => {
		const value = +event.target.value;
		if (_.isInteger(value) && _.inRange(value, 1, 10)) {
			updateDirectNumberProduct(cartItem.productId, value);
		}
	};
	return (
		<Container>
			<CartItemWrapper>
				<CartItemImage
					src={`${cartItem.productImage}?random=${cartItem.productId}`}
					alt={cartItem.productName}
				/>
				<Typography>{cartItem.productName}</Typography>
				<TextField
					value={cartItem.quantity}
					type="number"
					sx={{ width: "70px", padding: "5px 14px" }}
					onChange={handleChangeQuantity}
				></TextField>
				<Typography>{`${(cartItem.price * cartItem.quantity).toLocaleString(
					"vi-VN"
				)} đ`}</Typography>
				<Button onClick={deleteHandler} sx={{ textTransform: "none" }}>
					Delete
				</Button>
			</CartItemWrapper>
		</Container>
	);
}

export default CartCard;
