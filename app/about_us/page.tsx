"use client";

import React, { useEffect } from "react";
import AboutUsLogoDescription from "./AboutUsLogoDescription";
import Tickets from "../(components)/Tickets";
import History from "./history";
import Navbar from "../(components)/Navbar";
import Footer from "../(components)/Footer";

export default function AboutUsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <History />
      <AboutUsLogoDescription />
      <Tickets />
      <Footer />
    </main>
  );
}
