import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import Payment from './pages/Payment'

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/home" element={<Homepage />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
    </Routes>
  );
}

export default App;
