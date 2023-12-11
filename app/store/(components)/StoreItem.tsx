"use client";
import React, { useState, useEffect } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

import { Dialog, DialogClose, DialogTrigger, DialogContent } from "./Dialog";

type StoreItemProps = {
  id: number;
  name: string;
  numTickets: number;
  price: number;
  imgUrl: string;
};

export function StoreItem(props: StoreItemProps) {
  const { getItemQuantity, getItemProducts, setItemProducts, removeFromCart } =
    useShoppingCart();

  const quantity = getItemQuantity(props.id);
  const products = getItemProducts(props.id);

  const [inputValues, setInputValues] = useState<string[]>([]);
  const [isEmptyInput, setIsEmptyInput] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    isDialogOpen === false ? clearInput() : null;
  }, [isDialogOpen]);

  const generateInputs = (inputCount: number) => {
    const inputs = [];
    for (let i = 0; i < inputCount; i++) {
      inputs.push(
        <input
          key={i}
          type="text"
          placeholder={`Audience ${i + 1}`}
          className="p-2 border border-gray-300 rounded"
          value={inputValues[i] || ""}
          onChange={(e) => {
            const newInputValues = [...inputValues];
            newInputValues[i] = e.target.value;
            setInputValues(newInputValues);
          }}
        />
      );
    }
    return inputs;
  };

  const clearInput = () => {
    setInputValues([]);
    setIsEmptyInput(false);
  };

  const handleAddItemClick = () => {
    const anyInputIsEmpty = inputValues.some((value) => value.trim() === "");
    if (anyInputIsEmpty || inputValues.length < props.numTickets) {
      setIsEmptyInput(true);
      return;
    }

    const maxId = products.reduce(
      (max, product) => (product.productId > max ? product.productId : max),
      0
    );

    const newProductId = maxId + 1;

    const newProducts = [
      ...products,
      {
        productId: newProductId,
        audience: inputValues.map((value, index) => ({
          audienceId: index,
          name: value,
        })),
      },
    ];

    setItemProducts(props.id, newProducts);
    setIsDialogOpen(false);
  };

  const handleDeleteProduct = (productId: number) => {
    const updatedProducts = products.filter(
      (product) => product.productId !== productId
    );

    setItemProducts(props.id, updatedProducts);
  };

  return (
    <div className="w-full h-full rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-40 object-cover"
        src={props.imgUrl}
        alt={props.name}
      />
      <div className="px-6 py-4">
        <div className="flex flex-row justify-between">
          <div className="font-bold text-xl">{props.name}</div>
          <div className="text-gray-700 text-base">{props.price}</div>
        </div>

        <div>
          <div className="mt-0.5 mb-0.5">Quantity: {quantity}</div>
          <Dialog>
            <DialogTrigger asChild>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right mt-3 mb-4">
                View Product
              </button>
            </DialogTrigger>
            <DialogContent>
              <div className="flex flex-row mt-0">
                <img
                  className="w-2/5 h-80 object-cover"
                  src={props.imgUrl}
                  alt={props.name}
                />
                <div className="flex flex-col justify-center px-5 w-3/5">
                  <div className="font-bold text-xl">{props.name}</div>
                  <div className="mt-0.5 mb-0.5">Quantity: {quantity}</div>

                  <div>
                    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                      <DialogTrigger asChild>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 mb-0.5 w-full">
                          Add Item
                        </button>
                      </DialogTrigger>
                      <DialogContent>
                        <div className="p-6">
                          <div className="font-bold text-xl mb-2">
                            Audience Information
                          </div>
                          <div className="grid grid-cols-1 gap-4">
                            {generateInputs(props.numTickets)}
                          </div>
                          {isEmptyInput && (
                            <p style={{ color: "red", marginTop: "10px" }}>
                              Warning: Please fill in all input boxes before
                              closing.
                            </p>
                          )}
                          <DialogClose asChild>
                            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded float-right mt-3 ml-2">
                              Cancel
                            </button>
                          </DialogClose>
                          <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right mt-3"
                            onClick={handleAddItemClick}
                          >
                            Add
                          </button>
                        </div>
                      </DialogContent>
                    </Dialog>
                    {quantity > 0 ? (
                      <div>
                        <Dialog>
                          <DialogTrigger asChild>
                            <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded w-1/2">
                              Edit Item
                            </button>
                          </DialogTrigger>
                          <DialogContent>
                            {products.map((product) => (
                              <div key={product.productId} className="mb-4">
                                <div className="font-bold">
                                  Product {product.productId}
                                </div>
                                <button
                                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded"
                                  onClick={() =>
                                    handleDeleteProduct(product.productId)
                                  }
                                >
                                  Delete
                                </button>
                                {product.audience.map((audience) => (
                                  <div
                                    key={audience.audienceId}
                                    className="flex justify-between"
                                  >
                                    <div>{audience.name}</div>
                                  </div>
                                ))}
                              </div>
                            ))}
                          </DialogContent>
                        </Dialog>

                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded w-1/2"
                          onClick={() => removeFromCart(props.id)}
                        >
                          Remove All
                        </button>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
}
