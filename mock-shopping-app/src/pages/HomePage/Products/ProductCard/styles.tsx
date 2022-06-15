import { Button, styled, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { primaryColorMain, primaryColorLight } from "assets/data/color";

export const Container = styled(Box)`
	background-color: white;
	margin-left: 10px;
	margin-top: 10px;
	border: 1px solid white;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: calc(33% - 15px);
	:hover {
		border: 1px solid ${primaryColorMain};
		z-index: 2;
		box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
	}
	@media only screen and (min-width: 1200px) {
		min-height: 300px;
		width: calc(20% - 15px);
	}
`;
export const Image = styled("img")`
	width: 100%;
	min-height: 150px;
	object-fit: contain;
	margin-top: 10px;
`;
export const AddToCarButton = styled(Button)`
	justify-self: center;
	margin: 0;
	background-color: ${primaryColorMain};
	color: white;
	border-radius: 0;
	:hover {
		background-color: ${primaryColorLight};
		color: white;
	}
`;
export const ProductTitle = styled(Typography)`
	margin-left: 1rem;
`;
export const ProductPrice = styled(Typography)`
	margin-left: 1rem;
	color: ${primaryColorMain};
`;
