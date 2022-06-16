import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)`
	display: flex;
	flex-direction: column;
`;
export const ProductWrapper = styled(Box)`
	display: flex;

	min-width: 100vw;
	margin: 0 auto;
	flex-direction: column;
	@media only screen and (min-width: 1200px) {
		flex-direction: row;
		min-width: 1200px;
		width: 1200px;
		margin: 2rem auto 0px;
	}
`;
export const ProductFilterContainer = styled(Box)`
	background-color: red;
	min-height: 50vh;
	flex: 1 0;
	@media only screen and (min-width: 1200px) {
		margin: 0 1.25rem 1.25rem 0;
		flex: 1 0 11.875rem;
	}
`;
export const ProductListContainer = styled(Box)`
	flex: 5;
	width: 100%;
	@media only screen and (min-width: 1200px) {
		width: 55%;
	}
`;