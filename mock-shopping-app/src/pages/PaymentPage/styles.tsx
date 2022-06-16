import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)`
	display: flex;
	flex-direction: column;
`;
export const CartWrapper = styled(Box)`
	display: flex;

	min-width: 100vw;
	flex-direction: column;
	@media only screen and (min-width: 1200px) {
		margin: 0 auto;
		flex-direction: row;
		min-width: 1200px;
		width: 1200px;
		margin: 2rem auto 0px;
	}
`;
export const CartListContainer = styled(Box)`
	flex: 5;
	width: 100%;
	@media only screen and (min-width: 1200px) {
		width: 55%;
	}
`;