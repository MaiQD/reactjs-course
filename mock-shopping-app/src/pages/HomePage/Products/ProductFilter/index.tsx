import Typography from "@mui/material/Typography";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import agent from "app/api/agent";
import { productsContext } from "app/contexts/products";
import Category from "app/models/categories";
import React, { useContext, useEffect } from "react";
import { Container, InputWrapper } from "./styles";

function ProductFilter() {
	const [sortBy, setSortBy] = React.useState("A");
	const [category, setCategory] = React.useState<number | undefined>(0);
	const [categories, setCatagories] = React.useState<Category[]>([]);
	const { filterProducts, filterCondition } = useContext(productsContext);

	useEffect(() => {
		(async () => {
			const res = await agent.Categories.list(new URLSearchParams());
			setCatagories(res);
		})();
	}, []);

	useEffect(() => {
		filterProducts(filterCondition.keyword, sortBy, category);
	}, [sortBy, category]);

	const handleSortSelectChange = (event: any) => {
		setSortBy(event.target.value);
	};
	const handleSelectCatalogChange = (event: any) => {
		setCategory(+event.target.value);
	};
	return (
		<Container>
			<InputWrapper>
				<Typography mr="1rem">Catalog</Typography>
				<Select
					value={category}
					onChange={handleSelectCatalogChange}
					inputProps={{ "aria-label": "Without label" }}
					sx={{
						backgroundColor: "white",
					}}
				>
					<MenuItem value={0}>All categories</MenuItem>
					{categories.map((category) => (
						<MenuItem key={category.id} value={category.id}>
							{category.name}
						</MenuItem>
					))}
				</Select>
			</InputWrapper>
			<InputWrapper>
				<Typography mr="1rem">Order by price</Typography>
				<Select
					value={sortBy}
					onChange={handleSortSelectChange}
					inputProps={{ "aria-label": "Without label" }}
					sx={{
						backgroundColor: "white",
					}}
				>
					<MenuItem value="A">Ascending</MenuItem>
					<MenuItem value="D">Descending</MenuItem>
				</Select>
			</InputWrapper>
		</Container>
	);
}

export default ProductFilter;
