import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import LoginPage from "./pages/LoginPage";
import './App.css';
function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Homepage />}/>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/home" element={<Homepage />}></Route>
    </Routes>
  );
}

export default App;
