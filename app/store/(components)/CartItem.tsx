import React from "react";
import { useShoppingCart } from "../(context)/ShoppingCartContext";
import storeItems from "../data.json";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem(props: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((item) => item.id === props.id);
  if (item == null) {
    return null;
  }

  return (
    <div className="p-2 border-b">
      <div className="flex justify-between">
        <div className="flex flex-row">
          <img
            src={item.imgUrl}
            alt={item.name}
            className="w-12 h-12 object-contain mr-4 rounded-md"
          />
          <div className="flex flex-col">
            <div className="text-lg font-semibold">
              {item.name}
              {` x${props.quantity}`}
            </div>

            <div className="text-sm text-gray-600">{`${item.price}`}</div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="text-lg font-semibold ml-4">
            {`${item.price * props.quantity}`}
          </div>
          <button
            className="ml-4 bg-red-500 hover:bg-red-700 text-white rounded"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
