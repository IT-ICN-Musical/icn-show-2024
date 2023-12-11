"use client";

import React from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import ShoppingCart from "./ShoppingCart";

const NavbarShop = () => {
  const { cartQuantity } = useShoppingCart();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center h-11">
        <div className="text-white text-2xl font-bold">ICN Ticketing</div>
        {cartQuantity > 0 && <ShoppingCart />}
      </div>
    </nav>
  );
};

export default NavbarShop;
