"use client";
import React from "react";
import items from "./data.json";
import { StoreItem } from "./(components)/StoreItem";
import Footer from "../(components)/Footer";
import Navbar from "../(components)/Navbar";

const Page: React.FC = () => {
  return (
    <main className="bg-[url('/batik-betawi.png')] min-h-screen bg-cover bg-center flex flex-col justify-between overflow-x-hidden">
      <div className="mb-24">
        <Navbar attribute="shop" />
        <div className="container mx-auto">
          <div className="mt-10 font-bold text-4xl mb-6 text-center md:text-left px-10 xl:px-0">
            Products
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-10 xl:px-0">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col justify-center items-center"
              >
                <StoreItem {...item} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
