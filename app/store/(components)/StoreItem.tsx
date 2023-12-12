"use client";
import React, { useEffect, useState } from "react";
import { useShoppingCart } from "../(context)/ShoppingCartContext";
import ViewProductDialog from "./ViewProductDialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./(utils)/Card";
import { Label } from "./(utils)/Label";

type StoreItemProps = {
  id: number;
  name: string;
  numTickets: number;
  price: number;
  imgUrl: string;
};

export function StoreItem(props: StoreItemProps) {
  const { getItemQuantity } = useShoppingCart();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const quantityValue = getItemQuantity(props.id);
    setQuantity(quantityValue);
  }, [getItemQuantity, props.id]);

  return (
    <Card className="lg:max-w-md w-full rounded-xl transform transition-transform hover:scale-[102.5%] ease-in-out duration-500">
      <CardHeader className="block p-0">
        <img
          className="w-full h-52 rounded-t-xl"
          src={props.imgUrl}
          alt={props.name}
        />
        <CardTitle className="px-6 pt-3">{props.name}</CardTitle>
        <CardDescription className="px-6">
          <Label className="text-lg">${props.price}</Label>
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0"></CardContent>
      <CardFooter className="block w-full mb-2 pb-3">
        <div className="flex items-start justify-between pt-1">
          <Label className="mb-2">Quantity: {quantity}</Label>
          <ViewProductDialog {...props} />
        </div>
      </CardFooter>
    </Card>
  );
}
