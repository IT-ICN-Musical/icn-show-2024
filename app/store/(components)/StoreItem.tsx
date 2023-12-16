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
import { StoreItemData } from "../(types)/types";
import Image from "next/image";

export function StoreItem(props: StoreItemData) {
  const { getItemQuantity } = useShoppingCart();
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const quantityValue = getItemQuantity(props.id);
    setQuantity(quantityValue);
  }, [getItemQuantity, props.id]);

  return (
    <Card className="lg:max-w-md w-full max-w-sm rounded-xl transform transition-transform hover:scale-[102%] ease-in-out duration-500">
      <CardHeader className="block p-0">
        <Image
          className="w-full h-52 rounded-t-xl"
          width={0}
          height={0}
          unoptimized
          src={props.imgUrl}
          alt={props.name}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/images/store/ticket.png";
          }}
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
