import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import './App.css';
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import Features from "./Components/Features";
import Footer from "./Components/Footer";
import UserHome from "./Components/UserHome";
import Login from "./Components/Login";
import Register from "./Components/Register";
import PredictForm from "./Components/PredictForm";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route path="/" element={isLoggedIn ? <UserHome /> : <Main />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/predict" element={<PredictForm />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
