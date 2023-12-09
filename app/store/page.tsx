"use client";
import React from "react";
import NavbarShop from "./(components)/NavbarShop";
import items from "./data.json";
import { StoreItem } from "./(components)/StoreItem";

const Page: React.FC = () => {
  return (
    <main>
      <NavbarShop />
      <div className="container mx-auto">
        <div className="mt-10 font-bold text-4xl mb-6">Products</div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {items.map((item) => (
            <div key={item.id}>
              <StoreItem {...item} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
