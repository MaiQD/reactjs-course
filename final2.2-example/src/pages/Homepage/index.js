import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import {
  Badge,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  SvgIcon,
} from "@mui/material";
import _debounce from "lodash/debounce";
import _isEmpty from "lodash/isEmpty";

import ProductFilter from "../../components/ProductFilter";
import { globalContext } from "../../contexts/global";
import { cartContext } from "../../contexts/cart";
import { productsContext } from "../../contexts/products";
import withAuth from "../../HOC/withAuth";
import ProductsContextProvider from "../../contexts/products";

import * as Styled from "./styles";
import useFilter from "../../hooks/useFilter";
import MainLayout from "../../Layout/MainLayout";

const Homepage = () => {
  const { signOut } = useContext(globalContext);
  const { addToCart, cart } = useContext(cartContext);
  const { fetchProducts, productsLoading, productsFiltered, filterProducts } =
    useContext(productsContext);
  const { filters, toggleSort } = useFilter();
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  const handleSearching = useCallback(
    _debounce((value) => {
      filterProducts({ searchValue: value });
    }, 500),
    []
  );

  const handleTyping = (e) => {
    const { value } = e.target;
    setSearchValue(value);
    handleSearching(value);
  };

  useEffect(() => {
    if (_isEmpty(productsFiltered) && !productsLoading) {
      fetchProducts();
    }
  }, []);

  useEffect(() => {
    filterProducts({
      searchValue,
      sort: filters.sort,
    });
  }, [filters.sort]);

  return (
    <Styled.Container>
      <MainLayout>
        <div className="body">
          <Typography variant="h2" component="h1" align="center" marginTop={2}>
            Welcome to my shop - Mua gì quẹo lựa
          </Typography>
          <TextField
            sx={{
              marginTop: 4,
              width: 240,
            }}
            onChange={handleTyping}
            label="Search by product name"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Box height={20} />
          <Box
            width="100%"
            display="flex"
            justifyContent={"flex-start"}
            sx={{
              padding: 4,
            }}
          >
            <ProductFilter sort={filters.sort} onClickSortButton={toggleSort} />
          </Box>
          <Box height={20} />
          {productsFiltered && !productsLoading && (
            <Grid container spacing={2}>
              {productsFiltered.map((product) => (
                <Grid item xs={12} lg={3}>
                  <Card key={`product--${product.id}`}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={product.thumbnail}
                      alt="green iguana"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {product.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {product.description}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {`${product.price} vnd`}
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small" onClick={() => addToCart(product)}>
                        Add to cart
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}
        </div>
      </MainLayout>
    </Styled.Container>
  );
};

export const HomeWrapper = () => {
  return (
    <ProductsContextProvider>
      <Homepage />
    </ProductsContextProvider>
  );
};

export default withAuth(HomeWrapper);
