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
export default function ViewProductDialogContent(props: StoreItemData) {
  const { getItemQuantity } = useShoppingCart();

  const quantity = getItemQuantity(props.id);
  return (
    <DialogContent className="p-0">
      <div className="flex flex-row mt-0 ">
        <Image
          className="w-2/5 h-80 object-cover rounded-l-lg"
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
          <Label className="font-bold text-xl">{props.name}</Label>

          <Label className="my-0">
            Stock Left: {props.stock}
            <span className="mx-1 text-lg font-semibold">|</span> Quantity:{" "}
            {quantity}
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
