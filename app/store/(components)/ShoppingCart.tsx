import React, { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";
import Drawer from "./Drawer";

import storeItems from "../data.json";
import Modal from "./Modal";

type ShoppingCartProps = {
  isOpen: boolean;
};

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { getItemQuantity, closeCart, cartItems } = useShoppingCart();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };
  return (
    <Drawer isOpen={isOpen} setIsOpen={closeCart}>
      <div className="ml-7 mr-7">
        <div className="text-3xl font-bold mb-3">Shopping Cart</div>
        {cartItems
          .filter((item) => getItemQuantity(item.id) > 0)
          .map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              quantity={getItemQuantity(item.id)}
            />
          ))}
        <div>
          Total{" "}
          {cartItems.reduce((total, cartItem) => {
            const item = storeItems.find(
              (item: { id: number }) => item.id === cartItem.id
            );
            return total + (item?.price || 0) * getItemQuantity(cartItem.id);
          }, 0)}
        </div>
        <button onClick={openModal}>Checkout</button>
        <Modal isOpen={isModalOpen} setIsOpen={setIsModalOpen}>
          <h1>modal</h1>
        </Modal>
      </div>
    </Drawer>
  );
}
