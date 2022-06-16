import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "app/layout/App";
import reportWebVitals from "./reportWebVitals";
import GlobalContextProvider from "./app/contexts/global";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "app/contexts/cart";
import { SnackbarProvider } from "notistack";

const root = ReactDOM.createRoot(
	document.getElementById("root") as HTMLElement
);
root.render(
	// <React.StrictMode>
	<BrowserRouter>
		<GlobalContextProvider>
			<CartContextProvider>
				<SnackbarProvider
					maxSnack={3}
					anchorOrigin={{
						vertical: "bottom",
						horizontal: "right",
					}}
					hideIconVariant={false}
				>
					<App />
				</SnackbarProvider>
			</CartContextProvider>
		</GlobalContextProvider>
	</BrowserRouter>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
