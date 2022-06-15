
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const Container = styled(Box)`
	top: 0;
	left: 0;
	right: 0;
	transform: translateZ(0);
	z-index: 100;
	background: linear-gradient(-180deg, #f53d2d, #f63);
	transition: transform 0.2s cubic-bezier(0.4, 0, 0.2, 1);
	min-height: 64px;
`;
export const NavBar = styled(Box)`
	height: 2.125rem;
	z-index: 400;
	background: transparent;
	position: relative;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	color: white;
`;
export const HeaderWithSearchWrapper = styled(Box)`
	background: transparent;
	box-shadow: 0 1px 1px 0 rgb(0 0 0 / 5%);
	margin-right: auto;
	margin-left: auto;
	width: 100vw;
	padding-bottom: 1rem;
	// for medium and up
	@media only screen and (min-width: 992px) {
		flex-direction: row;
		min-width: 1200px;
	}
`;
export const HeaderWithSearchContainer = styled(Box)`
	margin-right: auto;
	margin-left: auto;
	display: flex;
	justify-content: space-around;
	flex-direction: row;

	// for medium and up
	@media only screen and (min-width: 992px) {
		width: 1200px;
	}
`;
export const HeaderLogo = styled(Box)`
	position: relative;
	padding-right: 2.5rem;
	align-items: center;
	text-align: center;
`;
export const HeaderSearch = styled(Box)`
	align-items: center;
	text-align: center;
	justify-content: center;
	justify-items: center;
	width: 60%;
`;
export const HeaderCart = styled(Box)`
	align-items: center;
	text-align: center;
	justify-content: center;
	justify-items: center;
`;