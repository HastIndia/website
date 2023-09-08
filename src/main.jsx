import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import Payment from "./pages/Payment.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/login" element={<Login/>}/>
    </Routes>
  </Router>
);
