import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import Home from "./components/Home";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <div className="App">
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        </Routes>
        </div>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
