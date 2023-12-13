"use client";
import React from "react";
import items from "./data.json";
import { StoreItem } from "./(components)/StoreItem";
import Footer from "../(components)/Footer";
import Navbar from "../(components)/Navbar";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./(components)/(utils)/HoverCard";

const Page: React.FC = () => {
  return (
    <main className="bg-[url('/batik-betawi.png')] min-h-screen bg-cover bg-center flex flex-col justify-between">
      <div className="mb-14">
        <Navbar attribute="shop" />

        <div className="container mx-auto mb-7">
          <div className="mt-10 font-bold text-4xl mb-6 text-center md:text-left px-10 xl:px-0">
            Products
          </div>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 md:px-10 xl:px-0">
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
        <HoverCard>
          <HoverCardTrigger asChild>
            <button className="border border-[#092054] rounded-full p-2.5 transition-all duration-300 w-16 h-16 bg-[#092054] text-white sticky bottom-10 2xl:left-16 xl:left-8 left-4">
              <i className="fa fa-comment fa-lg " />
            </button>
          </HoverCardTrigger>
          <HoverCardContent align="start" side="top">
            <p className="mb-1 font-bold">Contact Us:</p>

            <p className="mb-2">
              <span className="font-semibold">Keiko</span> <br /> Telegram:
              @keikorenata <br />
              Whatsapp: +65 87903093
            </p>
            <p>
              <span className="font-semibold">Ano</span> <br /> Telegram:
              @andrewnyco <br />
              Whatsapp: +65 88848001
            </p>
          </HoverCardContent>
        </HoverCard>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
