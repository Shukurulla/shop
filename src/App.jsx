import "./App.css";
import BasketBox from "./components/basket-box";
import MenuBar from "./components/menu-bar";
import Navbar from "./components/navbar";
import SelectProducts from "./components/select-products";
import SideProducts from "./components/side-products";
import { Context } from "./context";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  useEffect(() => {
    localStorage.setItem('')
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("product", JSON.stringify(data.products));
      });
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => localStorage.setItem("category", JSON.stringify(data)));
  }, []);

  const value = {};
  return (
    <>
      <Context.Provider value={value}>
        <div className="container">
          <Navbar />
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-12 ">
              <MenuBar />
            </div>
            <div className="col-lg-9 col-md-8 col-sm-12">
              <Routes>
                <Route path="/" element={<SideProducts />} />
                <Route path="/category/:id" element={<SelectProducts />} />
                <Route path="/basket" element={<BasketBox />} />
              </Routes>
            </div>
          </div>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
