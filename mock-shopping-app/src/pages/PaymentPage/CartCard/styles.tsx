import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)`
	border: 1px solid rgba(0, 0, 0, 0.09);
	border-radius: 2px;
	margin: 22px 20px;
	background-color: white;
`;
export const CartItemWrapper = styled(Box)`
	margin-top: 0;
	padding: 16px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	@media only screen and (min-width: 1200px) {
		flex-direction: row;
	}
`;
export const CartItemImage = styled("img")`
	width: 80px;
	height: 80px;
	object-fit: contain;
	margin-right: 10px;
	border: 1px solid rgba(0, 0, 0, 0.09);
`;