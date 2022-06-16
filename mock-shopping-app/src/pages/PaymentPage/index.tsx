import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import withAuth from "app/HOC/withAuth";
import Header from "app/layout/Header";
import React from "react";
import CartList from "./CartList";

const Container = styled(Box)`
	display: flex;
	flex-direction: column;
`;
const CartWrapper = styled(Box)`
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
const CartListContainer = styled(Box)`
	flex: 5;
	width: 100%;
	@media only screen and (min-width: 1200px) {
		width: 55%;
	}
`;
function PaymentPage() {
	return (
		<Container>
			<Header isShowSearchBox={false}></Header>
			<CartWrapper>
				<CartListContainer>
					<CartList />
				</CartListContainer>
			</CartWrapper>
		</Container>
	);
}

export default withAuth(PaymentPage);
