"use client";
import { useState, createContext, useContext } from "react";
import { useLocalStorage } from "../(hooks)/useLocalStorage";
type ShoppingCartProviderProps = {
  children: React.ReactNode;
};

type CartItem = {
  id: number;
  product: Product[];
};

type Product = {
  productId: number;
  audience: Audience[];
};

type Audience = {
  audienceId: number;
  name: string;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  getItemProducts: (id: number) => Product[];
  setItemProducts: (id: number, products: Product[]) => void;
  removeFromCart: (id: number) => void;
  removeAllItems: () => void;
  cartQuantity: number;
  cartItems: CartItem[];
};

const initialContextValue: ShoppingCartContext = {
  getItemQuantity: (id: number) => 0,
  getItemProducts: (id: number) => [],
  removeFromCart: (id: number) => {},
  removeAllItems: () => {},
  setItemProducts: (id: number, products: Product[]) => {},
  cartQuantity: 0,
  cartItems: [],
};

const ShoppingCartContext = createContext(initialContextValue);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  const cartQuantity = cartItems.reduce(
    (acc, curr) => acc + curr.product.length,
    0
  );

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.product.length || 0;
  }

  function getItemProducts(id: number) {
    return cartItems.find((item) => item.id === id)?.product || [];
  }

  function removeFromCart(id: number) {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  }

  function removeAllItems() {
    setCartItems([]);
  }

  function setItemProducts(id: number, products: Product[]) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1, product: products }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, product: products };
          } else {
            return item;
          }
        });
      }
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        getItemProducts,
        removeFromCart,
        setItemProducts,
        removeAllItems,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
