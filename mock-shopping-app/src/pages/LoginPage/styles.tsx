import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import backgroundImage from "assets/images/wallpaperflare-cropped.jpg";

export const CustomBox = styled(Box)`
	background-image: url(${backgroundImage});
	background-size: cover;
	height: 100vh;
	width: 100vw;
`;
export const LoginBox = styled(Box)`
	padding: 4rem 2rem 4rem 2rem;
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: rgb(253, 253, 253);
`;
