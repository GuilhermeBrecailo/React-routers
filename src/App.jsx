import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

//components
import Navbar from "./components/Navbar";
import Product from "./pages/Product";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";
import SearchForm from "./components/SearchForm";
import Search from "./pages/Search";

function App() {
  // 1 config react router
  return (
    <>
      <div className="root">
        <h1>React Router</h1>
        <BrowserRouter>
          <Navbar />
          {/* search */}
          <SearchForm />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* 6 nested route */}
            <Route path="/product/:id/info" element={<Info />} />c
            {/* ROta dinamica */}
            <Route path="/product/:id" element={<Product />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/company" element={<Navigate to="/about/" />} />
            {/* 7 no math route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
