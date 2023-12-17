import React from "react";
import { useState, useEffect } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./(utils)/Dialog";
import { useShoppingCart } from "../(context)/ShoppingCartContext";
import { Input } from "./(utils)/Input";
import { Button } from "./(utils)/Button";
import { Label } from "./(utils)/Label";
import { StoreItemData } from "../(types)/types";

export default function AddAudienceDialog(props: StoreItemData) {
  const { getItemProducts, setItemProducts } = useShoppingCart();
  const [inputValues, setInputValues] = useState<string[]>([]);
  const [isEmptyInput, setIsEmptyInput] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const products = getItemProducts(props.id);

  useEffect(() => {
    isDialogOpen === false ? clearInput() : null;
  }, [isDialogOpen]);

  const clearInput = () => {
    setInputValues([]);
    setIsEmptyInput(false);
  };

  const handleAddItemClick = () => {
    const anyInputIsEmpty = inputValues.some(
      (value) => (value?.trim() ?? "") === ""
    );

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

  const generateInputs = (inputCount: number) => {
    const inputs = [];
    for (let i = 0; i < inputCount; i++) {
      inputs.push(
        <div key={i} className="grid grid-cols-4 items-center gap-4">
          <Label
            htmlFor={`Audience ${i + 1}`}
            className="text-right sm:text-sm text-xs"
          >
            Audience {i + 1}
          </Label>
          <Input
            id={`Audience ${i + 1}`}
            className="col-span-3"
            value={inputValues[i] || ""}
            onChange={(e: { target: { value: string } }) => {
              const newInputValues = [...inputValues];
              newInputValues[i] = e.target.value;
              setInputValues(newInputValues);
            }}
          />
        </div>
      );
    }
    return inputs;
  };
  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button className="py-2 px-4 rounded mt-3 mb-0.5 w-full">
          Add Item
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="pb-1 text-xl">
            Audience Information
          </DialogTitle>
          <DialogDescription>
            Enter the names of the ticket holders
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          {generateInputs(props.numTickets)}
        </div>
        {isEmptyInput && (
          <p className="text-red-500 mb-1">
            Warning: Please fill in all input boxes before closing.
          </p>
        )}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleAddItemClick}>Okay</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
