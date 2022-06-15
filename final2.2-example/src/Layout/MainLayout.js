import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useContext, useEffect } from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../contexts/cart";
import { globalContext } from "../contexts/global";

export default function MainLayout({ children }) {
  const navigate = useNavigate();
  const { addToCart, cart, initDataCart } = useContext(cartContext);
  const { signOut } = useContext(globalContext);

  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={() => navigate("/payment")}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Badge badgeContent={cart.length} color="secondary">
                <ShoppingCartOutlinedIcon />
              </Badge>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Cuonghn2 - Online shop
            </Typography>
            <Button
              color="inherit"
              onClick={() => {
                signOut();
                navigate("/login");
              }}
            >
              Sign out
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      {children}
    </Box>
  );
}
