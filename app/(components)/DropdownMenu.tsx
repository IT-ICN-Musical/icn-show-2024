"use client";

import { useState, useEffect } from "react";
import Button from "./Button";
import ShoppingCart from "../store/(components)/ShoppingCart";
import { useShoppingCart } from "../store/(context)/ShoppingCartContext";

type Props = {
  attribute?: "transparent" | "shop";
};

export default function DropdownMenu(props: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
  const { cartQuantity } = useShoppingCart();
  const [shoppingCartQuantity, setShoppinggCartQuantity] = useState(0);
  useEffect(() => {
    setShoppinggCartQuantity(cartQuantity);
  }, [cartQuantity]);

  return (
    <div className="relative">
      <button
        className="flex flex-col h-12 w-12 border-2 border-black justify-center items-center group bg-white rounded-xl"
        onClick={() => {
          setIsOpen(!isOpen);
          console.log("abc");
        }}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute right-0 bg-white shadow-md p-4 rounded-lg w-44 flex flex-col justify-center items-center">
          <Button url="">Home</Button>
          <Button url="cast">Cast</Button>
          <Button url="about-us">About Us</Button>
          <Button url="store" color="dark" animate="animate">
            Buy Tickets
          </Button>
          {shoppingCartQuantity > 0 && props.attribute === "shop" && (
            <div className="mt-4">
              <ShoppingCart />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
