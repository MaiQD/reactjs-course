import React, { useCallback, useContext, useState, ChangeEvent } from "react";
import { Button, InputAdornment, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { globalContext } from "app/contexts/global";
import { useNavigate } from "react-router-dom";
import _debounce from "lodash/debounce";
import {
	Container,
	NavBar,
	HeaderWithSearchWrapper,
	HeaderWithSearchContainer,
	HeaderLogo,
	HeaderSearch,
	HeaderCart,
} from "./styles";
import { productsContext } from "app/contexts/products";

function Header() {
	const { user, signOut } = useContext(globalContext);
	const { filterProducts, filterCondition } = useContext(productsContext);
	const navigate = useNavigate();
	const [searchValue, setSearchValue] = useState("");

	const LogOutHandler = () => {
		signOut();
		navigate("/login");
	};
	const GoToCart = () => {
		navigate("/payment");
	};
	const handleSearching = useCallback(
		_debounce((value) => {
			filterProducts(value, filterCondition.sortBy, filterCondition.categoryId);
		}, 300),
		[filterCondition.sortBy, filterCondition.categoryId]
	);

	const handleTyping = (e: ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setSearchValue(value);
		handleSearching(value);
	};

	return (
		<Container>
			<NavBar>
				<Typography>Hello {user?.name}</Typography>
				<Button onClick={LogOutHandler} sx={{ color: "white" }}>
					Log out
				</Button>
			</NavBar>
			<HeaderWithSearchWrapper>
				<HeaderWithSearchContainer>
					<HeaderLogo>
						<Typography
							variant="h4"
							component="h1"
							mb={1}
							sx={{ color: "white", fontWeight: "bold" }}
							display="block"
						>
							Lint Shop
						</Typography>
					</HeaderLogo>
					<HeaderSearch>
						<TextField
							sx={{
								width: "100%",
								backgroundColor: "white",
								borderRadius: "0.25rem",
							}}
							placeholder="Search"
							onChange={handleTyping}
							InputProps={{
								startAdornment: (
									<InputAdornment position="start">
										<SearchIcon />
									</InputAdornment>
								),
							}}
						/>
					</HeaderSearch>
					<HeaderCart>
						<Button onClick={GoToCart} sx={{ color: "white" }}>
							<ShoppingCartIcon />
						</Button>
					</HeaderCart>
				</HeaderWithSearchContainer>
			</HeaderWithSearchWrapper>
		</Container>
	);
}

export default Header;
