import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { primaryColorLight, primaryColorMain } from "assets/data/color";

export const SubmitContainer = styled(Box)`
	display: flex;
	justify-content: flex-end;
	margin-right: 20px;
	margin-top: 1rem;
`;
export const SubmitButton = styled(Button)`
	background-color: ${primaryColorMain};
	color: white;
	:hover {
		background-color: ${primaryColorLight};
	}
`;
