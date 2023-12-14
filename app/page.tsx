"use client";
import Image from "next/image";
import Synopsis from "./components/Synopsis";
import Window from "./components/Window";
import clsx from "clsx";
import { useState } from "react";
import LandingPage from "./components/LandingPage";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <LandingPage openWindow={isOpen} setOpenWindow={setIsOpen} />
      <Synopsis />
    </>
  );
}
