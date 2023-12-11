import { useState } from "react";

import {
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogDescription,
  DialogTitle,
  Dialog,
  DialogTrigger,
} from "./(utils)/Dialog";

import { Label } from "./(utils)/Label";
import { Input } from "./(utils)/Input";
import { Button } from "./(utils)/Button";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function Checkout() {
  const { removeAllItems } = useShoppingCart();
  const [buyerName, setBuyerName] = useState<string>();
  const [buyerEmail, setBuyerEmail] = useState<string>();
  const [buyerTelp, setBuyerTelp] = useState<string>();
  const isCheckoutSuccess = true;

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Checkout</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="pb-1 text-xl">Buyer Information</DialogTitle>
          <DialogDescription>
            This will be used to send the tickets. Please make sure the
            information here are correct.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              className="col-span-3"
              onChange={(e: { target: { value: string } }) => {
                const nameValue = e.target.value;
                setBuyerName(nameValue);
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              className="col-span-3"
              onChange={(e: { target: { value: string } }) => {
                const emailValue = e.target.value;
                setBuyerEmail(emailValue);
              }}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="telephone" className="text-right">
              Telephone No.
            </Label>
            <Input
              id="telephone"
              className="col-span-3"
              onChange={(e: { target: { value: string } }) => {
                const telpValue = e.target.value;
                setBuyerTelp(telpValue);
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button
            onClick={() =>
              isCheckoutSuccess
                ? (removeAllItems(),
                  console.log(buyerName, buyerEmail, buyerTelp))
                : null
            }
          >
            Proceed to Payment
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
