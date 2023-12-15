"use client";

import React, { useState, useEffect } from "react";
import AboutUsLogoDescription from "../(components)/AboutUsLogoDescription";
import Tickets from "../(components)/Tickets";

export default function aboutUsPage() {
  return (
    <main className="overflow-x-hidden">
      <AboutUsLogoDescription />
      <Tickets />
    </main>
  );
}
