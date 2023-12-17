import { DialogContent } from "./(utils)/Dialog";
import { Label } from "./(utils)/Label";
import { Button } from "./(utils)/Button";
import { useShoppingCart } from "../(context)/ShoppingCartContext";

import AddAudienceDialog from "./AddAudienceDialog";
import EditAudienceDialog from "./EditAudienceDialog";
import { AlertDialog, AlertDialogTrigger } from "./(utils)/AlertDialog";
import DeleteAlertDialogContent from "./DeleteAlertDialogContent";
import { StoreItemData } from "../(types)/types";
import Image from "next/image";
import { Separator } from "./(utils)/Separator";
import { FaCalendarDays } from "react-icons/fa6";

export default function ViewProductDialogContent(props: StoreItemData) {
  const { getItemQuantity } = useShoppingCart();

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const quantity = getItemQuantity(props.id);
  return (
    <DialogContent className="p-0 max-w-xl">
      <div className="flex flex-row mt-0 ">
        <Image
          className="w-2/5 h-[22rem] object-cover rounded-l-lg"
          width={0}
          height={0}
          unoptimized
          src={props.imgUrl}
          alt={props.name}
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/images/store/ticket.png";
          }}
        />
        <div className="flex flex-col justify-center px-5 w-3/5 h-full ">
          <Label className="font-bold text-xl mb-1">{props.name}</Label>
          <Label className="text-xs sm:block hidden">{props.description}</Label>
          <div className="flex mt-2">
            <FaCalendarDays size={15} />
            <Label className="text-xs pl-1">
              3 February 2024, 14.00 - 16.45 SGT
            </Label>
          </div>
          <div className="my-2">
            <Separator />
          </div>

          <Label className="my-1 font-semibold">
            Stock Left: {props.stock}
            <span className="mx-1 font-semibold">|</span> Quantity: {quantity}
          </Label>
          <Label className="my-1 font-semibold">
            Ends On: {formatDate(props.endPeriod)}
          </Label>
          <div className="flex flex-col">
            <AddAudienceDialog {...props} />
            {quantity > 0 ? (
              <div className="flex justify-end">
                <EditAudienceDialog {...props} />
                <AlertDialog>
                  <AlertDialogTrigger asChild>
                    <Button
                      variant="destructive"
                      className="py-2 px-4 rounded mt-1 ml-1 mb-0.5 w-1/5"
                    >
                      <i className="fa fa-trash" />
                    </Button>
                  </AlertDialogTrigger>
                  <DeleteAlertDialogContent id={props.id} />
                </AlertDialog>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
