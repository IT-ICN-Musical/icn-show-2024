import { DialogContent } from "./(utils)/Dialog";
import { Label } from "./(utils)/Label";
import { Button } from "./(utils)/Button";
import { useShoppingCart } from "../(context)/ShoppingCartContext";

import AddAudienceDialog from "./AddAudienceDialog";
import EditAudienceDialog from "./EditAudienceDialog";
import { AlertDialog, AlertDialogTrigger } from "./(utils)/AlertDialog";
import DeleteAlertDialogContent from "./DeleteAlertDialogContent";

type StoreItemProps = {
  id: number;
  name: string;
  numTickets: number;
  price: number;
  stock: number;
  imgUrl: string;
};

export default function ViewProductDialogContent(props: StoreItemProps) {
  const { getItemQuantity } = useShoppingCart();

  const quantity = getItemQuantity(props.id);
  return (
    <DialogContent className="p-0">
      <div className="flex flex-row mt-0 ">
        <img
          className="w-2/5 h-80 object-cover rounded-l-lg"
          src={props.imgUrl}
          alt={props.name}
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
