import LoginPage from "pages/LoginPage/index";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "pages/HomePage";
import PaymentPage from "pages/PaymentPage";

function App() {
	return (
		<Routes>
			<Route path="/login" element={<LoginPage />}></Route>
			<Route path="/home" element={<HomePage />}></Route>
			<Route path="/payment" element={<PaymentPage />}></Route>
			<Route path="/" element={<LoginPage />}></Route>
		</Routes>
	);
}

export default App;
