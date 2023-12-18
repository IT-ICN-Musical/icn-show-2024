import { DialogClose, DialogContent } from "./(utils)/Dialog";
import { Label } from "./(utils)/Label";
import { Button } from "./(utils)/Button";
import { useShoppingCart } from "../(context)/ShoppingCartContext";

import { AlertDialog, AlertDialogTrigger } from "./(utils)/AlertDialog";
import DeleteAlertDialogContent from "./DeleteAlertDialogContent";
import { CartItem, StoreItemData } from "../(types)/types";
import Image from "next/image";
import { ScrollArea } from "./(utils)/ScrollArea";
import { Input } from "./(utils)/Input";
import { useEffect, useState } from "react";

interface ViewProductDialogContentProps extends StoreItemData {
  open: boolean;
}

export default function ViewProductDialogContent(
  props: ViewProductDialogContentProps
) {
  const { getItemQuantity, getItemProducts, setItemProducts } =
    useShoppingCart();
  const formattedDate = new Date(props.endPeriod).toLocaleString();
  const quantity = getItemQuantity(props.id);
  const [audienceNames, setAudienceNames] = useState<string[][]>(
    Array.from({ length: 0 }, () => [])
  );

  const addProduct = () => {
    setAudienceNames([...audienceNames, []]);
  };

  const handleAudienceNameChange = (
    productIndex: number,
    ticketIndex: number,
    value: string
  ) => {
    const updatedAudienceNames = [...audienceNames];
    updatedAudienceNames[productIndex][ticketIndex] = value;
    setAudienceNames(updatedAudienceNames);
  };

  useEffect(() => {
    const products = getItemProducts(props.id);
    if (products) {
      const initialAudienceNames = products.map((product) =>
        product.audience.map((audience) => audience.name)
      );
      setAudienceNames(initialAudienceNames);
    }
  }, [getItemProducts, props.id, props.open]);

  const saveAndClose = () => {
    if (
      audienceNames.some(
        (productNames) =>
          productNames.some((name) => !name.trim()) ||
          productNames.length !== props.numTickets
      )
    ) {
      // If there are issues, alert the user or handle it as needed
      alert(
        "Please fill in all audience names and ensure the correct number of names before saving."
      );
      return;
    }

    const userItem: CartItem = {
      id: props.id,
      product: audienceNames.map((audienceNamesForProduct, index) => ({
        productId: index + 1,
        audience: audienceNamesForProduct.map((audienceName, ticketIndex) => ({
          audienceId: ticketIndex + 1,
          name: audienceName,
        })),
      })),
    };
    setItemProducts(userItem.id, userItem.product);
  };

  const handleDeleteProduct = (productIndex: number) => {
    const updatedAudienceNames = [...audienceNames];
    updatedAudienceNames.splice(productIndex, 1);
    setAudienceNames(updatedAudienceNames);
  };

  return (
    <DialogContent className="p-0 max-w-none w-fit">
      <div className="flex flex-col lg:flex-row px-5 my-5 lg:my-0">
        <div className="mx-5 lg:mx-10 lg:my-10 flex lg:justify-center lg:flex-col w-[50vw] xl:w-[40vw] te">
          <Image
            className="object-cover rounded-xl w-[33rem] lg:block hidden"
            width={0}
            height={0}
            unoptimized
            src={props.imgUrl}
            alt={props.name}
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/images/store/ticket.png";
            }}
          />
          <div className="flex flex-col pt-2 lg:py-8 lg:px-1">
            <Label className="font-bold text-3xl lg:text-4xl">
              {props.name}
            </Label>
            <Label className="my-0 text-base lg:text-lg py-1">
              {props.description}
            </Label>
            <Label className="my-0 text-lg lg:text-xl py-1">
              Ends on: {formattedDate} SGT
            </Label>

            <Label className="my-0 text-lg lg:text-xl">
              Stock Left: {props.stock}
              <span className="mx-1 text-base lg:text-lg font-semibold">
                |
              </span>{" "}
              Quantity: {audienceNames.length}
            </Label>
          </div>
        </div>

        <div className="flex flex-col px-5 w-full lg:w-3/5 h-full lg:py-10 py-0 justify-between">
          <div className="flex flex-col justify-center max-h-[60vh] min-h-[15vh] lg:h-[60vh]">
            <Label className="font-semibold text-2xl lg:text-3xl xl mb-2 px-2">
              Audience Information
            </Label>
            <ScrollArea className="max-h-[75%] pb-7">
              {audienceNames.length > 0 ? (
                <div>
                  {audienceNames.map((audienceNameForProduct, productIndex) => (
                    <div
                      key={productIndex}
                      className="flex flex-col mb-5 w-3/4"
                    >
                      <div className="flex justify-between items-center">
                        <Label className="font-cold text-2xl my-2 mx-2">
                          {`Product ${productIndex + 1}`}
                        </Label>
                        <Button
                          variant="destructive"
                          onClick={() => handleDeleteProduct(productIndex)}
                          size="icon"
                        >
                          <i className="fa fa-trash" />
                        </Button>
                      </div>

                      {[...Array(props.numTickets)].map((_, ticketIndex) => (
                        <Input
                          key={ticketIndex}
                          placeholder={`Audience ${ticketIndex + 1}`}
                          className="w-full my-1 mx-2"
                          value={
                            audienceNameForProduct[ticketIndex]
                              ? audienceNameForProduct[ticketIndex]
                              : ""
                          }
                          onChange={(e) =>
                            handleAudienceNameChange(
                              productIndex,
                              ticketIndex,
                              e.target.value
                            )
                          }
                        />
                      ))}
                    </div>
                  ))}
                </div>
              ) : (
                "No Item has been added to Cart"
              )}
            </ScrollArea>
          </div>

          <div className="flex flex-end flex-col items-end justify-end">
            <Button className="rounded mx-2 my-2" onClick={addProduct}>
              Add Quantity
            </Button>
            <div className="flex items-end justify-end my-2">
              <div className="flex flex-row justify-end items-end">
                {audienceNames.length > 0 ? (
                  <div className="flex justify-end">
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button variant="destructive">Delete All</Button>
                      </AlertDialogTrigger>
                      <DeleteAlertDialogContent id={props.id} />
                    </AlertDialog>
                  </div>
                ) : null}
              </div>
              <DialogClose asChild>
                <Button className="rounded mx-2" onClick={saveAndClose}>
                  Save and Close
                </Button>
              </DialogClose>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
