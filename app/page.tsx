"use client";

import Navbar from "./(components)/Navbar";
import Tickets from "./(components)/Tickets";
import React, { useEffect } from "react";
import Synopsis from "./(components)/Synopsis";
import Loading from "./(components)/loading";
import Footer from "./(components)/Footer";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Loading interval={1500} />
      <Navbar />
      <Tickets />
      <Synopsis />
      <Footer />
    </main>
  );
}
