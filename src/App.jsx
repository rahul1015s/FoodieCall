import React from "react";
import Header from "./components/Header.jsx";
import Meals from "./components/Meals.jsx";
import { CartContextProvider } from "./store/CartContext.jsx";

export default function App() {
  return (
    <CartContextProvider>
        <Header />
        <Meals />
    </CartContextProvider>

  )
}