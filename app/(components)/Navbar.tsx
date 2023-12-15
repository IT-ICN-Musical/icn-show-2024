"use client";

import Image from "next/image";
import ICNLogo from "/public/ICN-logo.png";
import React, { useEffect, useState } from "react";
import Button from "./Button";
import ShoppingCart from "../store/(components)/ShoppingCart";
import { useShoppingCart } from "../store/(context)/ShoppingCartContext";
import DropdownMenu from "./DropdownMenu";

type Props = {
  attribute?: "shop" | "home";
  scrollable?: boolean;
};

export default function Navbar(props: Props) {
  const { cartQuantity } = useShoppingCart();
  const [shoppingCartQuantity, setShoppinggCartQuantity] = useState(0);
  useEffect(() => {
    setShoppinggCartQuantity(cartQuantity);
  }, [cartQuantity]);
  return (
    <div className="fixed w-full z-50 pt-10">
      <div
        className={`flex w-3/4 mx-auto lg:shadow-sm px-8 sm:px-16 py-4 rounded-full justify-between items-center bg-white transition-opacity ease-in-out duration-1000 ${
          props.attribute === "home"
            ? props.scrollable
              ? "opacity-100"
              : "opacity-0"
            : "opacity-100"
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
          <div className="lg:block hidden">
            <div className="flex flex-row h-fit">
              <Button url="">Home</Button>
              <Button url="cast">Cast</Button>
              <Button url="about_us">About Us</Button>
              <Button url="store" color="dark" animate="animate">
                Buy Tickets
              </Button>
            </div>
          </div>

          {shoppingCartQuantity > 0 && props.attribute === "shop" && (
            <div className="lg:block hidden">
              <ShoppingCart />
            </div>
          )}
        </div>
        <div className="lg:hidden">
          <DropdownMenu {...props} />
        </div>
      </div>
    </div>
  );
}
