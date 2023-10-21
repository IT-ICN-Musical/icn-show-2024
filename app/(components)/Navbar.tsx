"use client";

import Image from "next/image";
import ICNLogo from "/public/ICN-logo.png";
import React, { useState, useEffect } from "react";
import Button from "./Button";

type Props = {
	transparent?: string;
}

export default function Navbar(props: Props) {
  return (
    <nav className="w-full z-50">
      <div className={`flex w-[77.5rem] mx-auto shadow-sm mt-10 px-16 py-4 rounded-full flex justify-between flex items-center ${props.transparent === 'transparent' ? 'backdrop-blur-[15px] bg-navbar-gradient border-1 border-white border-[1px]' : 'bg-white'}`}>
        <div className="p">
          <Image
            src={ICNLogo}
            alt="ICNLogo"
            width={67.399}
            height={60}
            quality={100}
            placeholder="blur"
          />
        </div>
        <div className="flex space-x-[1.5rem]">
          <Button url="home">Home</Button>
          <Button url="cast">Cast</Button>
          <Button url="about-us">About Us</Button>
		  <Button url="home" color="dark" animate="animate">Buy Tickets</Button>
        </div>
      </div>
    </nav>
  );
}
