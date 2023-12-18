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
import { FaCalendarDays } from "react-icons/fa6";
import { Separator } from "./(utils)/Separator";

interface ViewProductDialogContentProps extends StoreItemData {
  open: boolean;
  onClose: () => void;
}

export default function ViewProductDialogContent({
  open,
  onClose,
  ...props
}: ViewProductDialogContentProps) {
  const { getItemProducts, setItemProducts } = useShoppingCart();
  const [isEmptyInput, setIsEmptyInput] = useState(false);
  function formatDate(date: string): string {
    const dateObject = new Date(date);

    if (isNaN(dateObject.getTime())) {
      // Handle invalid date input
      return "Invalid Date";
    }

    const day = dateObject.getDate().toString().padStart(2, "0");
    const monthIndex = dateObject.getMonth();
    const year = dateObject.getFullYear();

    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = months[monthIndex];

    return `${day} ${month} ${year}`;
  }

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
  }, [getItemProducts, props.id, open]);

  useEffect(() => {
    if (!open || audienceNames.length === 0) {
      setIsEmptyInput(false);
    }
  }, [open, audienceNames]);

  const saveAndClose = () => {
    if (
      audienceNames.some(
        (productNames) =>
          productNames.some((name) => !name.trim()) ||
          productNames.length !== props.numTickets
      )
    ) {
      setIsEmptyInput(true);
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
    onClose();
  };

  const handleDeleteProduct = (productIndex: number) => {
    const updatedAudienceNames = [...audienceNames];
    updatedAudienceNames.splice(productIndex, 1);
    setAudienceNames(updatedAudienceNames);
  };

  return (
    <DialogContent className="p-0 max-w-none min-[470px]:w-fit w-full">
      <div className="flex flex-col lg:flex-row px-5 my-5 lg:my-0">
        <div className="mx-5 lg:mx-10 lg:my-10 flex lg:justify-center lg:flex-col w-full min-[470px]:w-[50vw] xl:w-[40vw] te">
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
            <Label className="font-bold text-2xl md:text-3xl lg:text-4xl lg:mb-0 mb-2">
              {props.name}
            </Label>
            <Label className="my-0 text-base py-2 lg:block hidden">
              {props.description}
            </Label>
            <div className="flex flex-row items-center px-0.5">
              <FaCalendarDays size={15} />
              <Label className="ml-2 my-0 text-xs sm:text-sm lg:text-base">
                {props.timing}
              </Label>
            </div>

            <Separator className="my-2 min-[470px]:w-auto w-11/12" />

            <Label className="my-0 text-xs sm:text-sm lg:text-base">
              Stock Left: {props.stock}
              <span className="mx-1 text-sm sm:text-base lg:text-lg font-semibold">
                |
              </span>{" "}
              Quantity Ordered: {audienceNames.length}
            </Label>
            <Label className="my-0 text-xs sm:text-sm lg:text-base py-1">
              Sale Ends on: {formatDate(props.endPeriod)} SGT
            </Label>
            <div className="text-[0.7rem] md:text-xs my-1 italic">
              *Kindly make sure to click{" "}
              <span className="font-bold">Save and Close</span> to save your
              order.
            </div>
          </div>
        </div>

        <div className="flex flex-col px-5 w-full lg:w-3/5 h-full lg:py-10 py-0 justify-between">
          <div className="flex flex-col justify-center max-h-[30vh] sm:max-h-[45vh] min-h-[15vh] lg:h-[60vh] lg:max-h-[60vh]">
            <Label className="font-semibold text-sm sm:text-base lg:text-lg lg:mt-[20px] mb-[10px] lg:px-2 text-center">
              Your Tickets for {props.name}
            </Label>
            <ScrollArea className="max-h-[75%] pb-2">
              {audienceNames.length > 0 ? (
                <div className="w-11/12">
                  {audienceNames.map((audienceNameForProduct, productIndex) => (
                    <div
                      key={productIndex}
                      className="flex flex-col mb-5 justify-center text-center"
                    >
                      <div className="flex items-center ml-5 text-center">
                        <Label className="font-cold text-base lg:text-lg my-1 lg:my-2 mr-2 lg:mr-4">
                          {`${
                            props.name.toLowerCase().includes("bundle")
                              ? "Bundle"
                              : "Ticket"
                          } #${productIndex + 1}`}
                        </Label>
                        <Button
                          variant="destructive"
                          onClick={() => handleDeleteProduct(productIndex)}
                          size="icon"
                          className="w-8 h-8 lg:w-10 lg:h-10"
                        >
                          <i className="fa fa-trash" />
                        </Button>
                      </div>

                      {[...Array(props.numTickets)].map((_, ticketIndex) => (
                        <Input
                          key={ticketIndex}
                          placeholder={`Enter Name`}
                          className="h-8 lg:h-10 w-full my-1 mx-2"
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
                <p className="text-center text-xs sm:text-sm lg:text-base">
                  Click 'Add Tickets' to start adding tickets.
                </p>
              )}
            </ScrollArea>
            {isEmptyInput && (
              <div className="flex items-center justify-center">
                <p className="text-red-500 mb-2 text-xs sm:text-sm lg:text-base">
                  Warning: Please fill in all input boxes before closing.
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-end flex-col items-end justify-end">
            <Button
              className={"rounded mx-2 my-0.5 lg:my-2"}
              onClick={addProduct}
              variant="secondary"
              disabled={audienceNames.length >= props.stock}
            >
              {audienceNames.length >= props.stock
                ? "No Item Available"
                : "Add Tickets"}
            </Button>

            <div className="flex items-end justify-end my-2">
              <div className="flex flex-row justify-end items-end">
                {audienceNames.length > 0 ? (
                  <div className="flex justify-end">
                    <DialogClose asChild>
                      <AlertDialog>
                        <AlertDialogTrigger asChild>
                          <Button variant="destructive">Delete All</Button>
                        </AlertDialogTrigger>
                        <DeleteAlertDialogContent id={props.id} />
                      </AlertDialog>
                    </DialogClose>
                  </div>
                ) : null}
              </div>
              <Button className="rounded mx-2" onClick={saveAndClose}>
                Save and Close
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
