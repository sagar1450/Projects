import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductListing from "./container/productListing";
import Header from "./container/Header";
import "./App.css";
import ProductDetails from "./container/productDetails";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>       
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" element={<ProductDetails />} />
          <Route>404 Not Found!</Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;