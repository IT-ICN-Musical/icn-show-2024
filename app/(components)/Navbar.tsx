"use client";

import Image from "next/image";
import ICNLogo from "/public/ICN-logo.png";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import ShoppingCart from "../store/(components)/ShoppingCart";
import { useShoppingCart } from "../store/(context)/ShoppingCartContext";
type Props = {
  attribute?: "transparent" | "shop";
};

export default function Navbar(props: Props) {
  const { cartQuantity } = useShoppingCart();
  const [shoppingCartQuantity, setShoppinggCartQuantity] = useState(0);
  useEffect(() => {
    setShoppinggCartQuantity(cartQuantity);
  }, [cartQuantity]);
  return (
    <div className="w-full z-50 pt-10">
      <div
        className={`flex w-[77.5rem] mx-auto shadow-sm px-16 py-4 rounded-full justify-between items-center ${
          props.attribute === "transparent"
            ? "backdrop-blur-[15px] bg-navbar-gradient border-1 border-white border-[1px]"
            : "bg-white"
        }`}
      >
        <div className="p">
          <Image
            src={ICNLogo}
            alt="ICNLogo"
            width={67.399}
            height={60}
            quality={100}
          />
        </div>
        <div className="flex flex-row items-center space-x-[1.5rem]">
          <div className="flex flex-row h-fit">
            <Button url="home">Home</Button>
            <Button url="cast">Cast</Button>
            <Button url="about-us">About Us</Button>
            <Button url="home" color="dark" animate="animate">
              Buy Tickets
            </Button>
          </div>
          {shoppingCartQuantity > 0 && props.attribute === "shop" && (
            <div>
              <ShoppingCart />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
