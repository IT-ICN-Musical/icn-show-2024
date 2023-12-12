import React from "react";
import { useShoppingCart } from "../(context)/ShoppingCartContext";
import storeItems from "../data.json";
import { Button } from "./(utils)/Button";
import { Separator } from "./(utils)/Separator";
import ViewProductDialogContent from "./ViewProductDialogContent";
import { Dialog, DialogTrigger } from "./(utils)/Dialog";

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
    <div className="mb-4">
      <div className="flex items-center mb-4">
        <img
          src={item.imgUrl}
          alt={item.name}
          className="w-20 h-20 object-fit mr-4 rounded-md"
        />
        <div className=" space-y-1">
          <p className="text-xl font-semibold leading-none">
            {item.name}
            <span className="pl-2 text-sm font-semibold leading-none text-slate-500">
              (${item.price})
            </span>
          </p>
          <p className="text-md font-medium text-muted-foreground mt-1">
            Quantity: {`${props.quantity}`}
          </p>
        </div>
        <div className="ml-auto font-medium text-right">
          <div className="mt-2 pt-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  size={null}
                  variant="ghost"
                  className="text-slate-500 mr-3 text-lg"
                >
                  <i className="fa fa-pencil" />
                </Button>
              </DialogTrigger>
              <ViewProductDialogContent {...item} />
            </Dialog>

            <Button
              size={null}
              variant="ghost"
              className="text-slate-500 text-lg"
              onClick={() => removeFromCart(props.id)}
            >
              <i className="fa fa-trash" />
            </Button>
          </div>
          <div className="text-lg font-semibold mt-3">
            ${`${item.price * props.quantity}`}
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
}
