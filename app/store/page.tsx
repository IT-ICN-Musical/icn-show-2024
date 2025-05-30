"use client";
import React, { useEffect, useState } from "react";
import { StoreItem } from "./(components)/StoreItem";
import Footer from "../(components)/Footer";
import Navbar from "../(components)/Navbar";
import { useData } from "./(context)/StoreDataContext";
import { fetchData, preprocessData } from "./(api)/api";
import { BackstageItem } from "./(components)/BackstageItem";
import { useShoppingCart } from "./(context)/ShoppingCartContext";

const Page: React.FC = () => {
  const { data, setData } = useData();
  const { cartItems, removeFromCart } = useShoppingCart();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDataAndProcess = async () => {
      try {
        const backendData = await fetchData();
        const processedData = preprocessData(backendData);

        cartItems.forEach((cartItem) => {
          const isAvailable = processedData?.some(
            (itemData) =>
              itemData.id === cartItem.id &&
              itemData.stock >= cartItem.product.length
          );
          if (!isAvailable) {
            removeFromCart(cartItem.id);
          }
        });

        setData(processedData);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching and processing data:");
        setLoading(false);
      }
    };

    fetchDataAndProcess();
  }, [setData, cartItems]);

  return (
    <main className="bg-[url('/batik-betawi.png')] min-h-screen bg-cover bg-center flex flex-col justify-between">
      <div className="mb-14">
        <Navbar attribute="shop" />
        <div className="container mx-auto mb-7 mt-44">
          {loading ? (
            <div className="text-center text-2xl font-bold font-gyahegi flex items-center justify-center">
              Loading...
            </div>
          ) : (
            <>
              {data?.some((item) => item.isPromotion) && (
                <div className="mt-10 font-bold text-4xl mb-6 text-center lg:text-left px-10 xl:px-0">
                  Promotions
                </div>
              )}
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 md:px-10 xl:px-0">
                {data?.map(
                  (item) =>
                    item.isPromotion && (
                      <div
                        key={item.id}
                        className="flex flex-col justify-center items-center"
                      >
                        <StoreItem {...item} />
                      </div>
                    )
                )}
              </div>
              <div className="mt-10 font-bold text-4xl mb-6 text-center lg:text-left px-10 xl:px-0">
                Products
              </div>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 md:px-10 xl:px-0">
                {data?.map(
                  (item) =>
                    !item.isPromotion && (
                      <div
                        key={item.id}
                        className="flex flex-col justify-center items-center"
                      >
                        <StoreItem {...item} />
                      </div>
                    )
                )}
                <div className="flex flex-col justify-center items-center">
                  <BackstageItem />
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Page;
