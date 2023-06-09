import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./components/RootLayout";
import Products from "./pages/Products/Products";
import AddProduct from "./pages/Products/AddProduct";
import Login from "./pages/Auth/Login";
import ProductDetails from "./pages/Products/ProductDetails";
import EditProduct from "./pages/Products/EditProduct";
const App = () => {
  return (
    <Router>
      <RootLayout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add_product" element={<AddProduct />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/products/:productId/edit" element={<EditProduct />} />
        </Routes>
      </RootLayout>
    </Router>
  );
};

export default App;
