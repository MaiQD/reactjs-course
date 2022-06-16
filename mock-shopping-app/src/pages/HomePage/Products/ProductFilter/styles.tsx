import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const Container = styled(Box)`
	font-weight: 400;
	background: rgba(0, 0, 0, 0.03);
	padding: 0.8125rem 1.25rem;
	border-radius: 2px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	@media screen and (min-width: 1200px) {
		justify-content: flex-end;
	}
`;
export const InputWrapper = styled(Box)`
	display: flex;
	align-items: center;
	margin-left: 1rem;
	flex-direction: column;
	@media screen and (min-width: 1200px) {
		flex-direction: row;
	}
`;