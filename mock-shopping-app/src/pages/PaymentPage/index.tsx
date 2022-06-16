import withAuth from "app/HOC/withAuth";
import Header from "app/layout/Header";
import React from "react";
import CartList from "./CartList";
import { CartListContainer, CartWrapper, Container } from "./styles";

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
