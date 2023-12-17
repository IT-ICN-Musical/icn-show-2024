import React, { useState, useEffect } from "react";
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
    const [inputValues, setInputValues] = useState<string[]>([""]);
    const [isEmptyInput, setIsEmptyInput] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    useEffect(() => {
        isDialogOpen === false ? clearInput() : null;
    }, [isDialogOpen]);

    const clearInput = () => {
        setInputValues([""]);
        setIsEmptyInput(false);
    };
    const products = getItemProducts(props.id); // Add this line

    const handleAddItemClick = () => {
        const anyInputIsEmpty = inputValues.some(
            (value) => (value?.trim() ?? "") === ""
        );

        if (anyInputIsEmpty || inputValues.length < props.numTickets) {
            setIsEmptyInput(true);
            return;
        }

        const maxId = products.reduce(
            (max, product) =>
                product.productId > max ? product.productId : max,
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
        console.log(newProducts);

        setItemProducts(props.id, newProducts);
        console.log("ITEM PRODUCTS");
        console.log(getItemProducts(props.id));
        setIsDialogOpen(false);
    };

    const handleAddField = () => {
        setInputValues([...inputValues, ""]);
    };

    const handleRemoveField = (index: number) => {
        const newInputValues = [...inputValues];
        newInputValues.splice(index, 1);
        setInputValues(newInputValues);
    };

    const generateInputs = () => {
        return inputValues.map((value, index) => (
            <div key={index} className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor={`Audience ${index + 1}`} className="text-right">
                    Audience {index + 1}
                </Label>
                <Input
                    id={`Audience ${index + 1}`}
                    className="col-span-2"
                    value={value}
                    onChange={(e: { target: { value: string } }) => {
                        const newInputValues = [...inputValues];
                        newInputValues[index] = e.target.value;
                        setInputValues(newInputValues);
                    }}
                />
                {index > 0 && (
                    <Button onClick={() => handleRemoveField(index)}>
                        Delete
                    </Button>
                )}
            </div>
        ));
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
                <div className="grid gap-4 py-2">{generateInputs()}</div>
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
                    <Button onClick={handleAddField}>Add Field</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
