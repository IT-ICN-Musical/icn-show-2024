import { useShoppingCart } from "../(context)/ShoppingCartContext";
import { Button } from "./(utils)/Button";
import { Dialog, DialogTrigger, DialogContent } from "./(utils)/Dialog";
import { Label } from "./(utils)/Label";

import AddAudienceDialog from "./AddAudienceDialog";
import EditAudienceDialog from "./EditAudienceDialog";

type StoreItemProps = {
  id: number;
  name: string;
  numTickets: number;
  price: number;
  imgUrl: string;
};

export default function ViewProductDialog(props: StoreItemProps) {
  const { getItemQuantity, removeFromCart } = useShoppingCart();

  const quantity = getItemQuantity(props.id);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>See More</Button>
      </DialogTrigger>
      <DialogContent className="p-0">
        <div className="flex flex-row mt-0 ">
          <img
            className="w-2/5 h-80 object-cover rounded-l-lg"
            src={props.imgUrl}
            alt={props.name}
          />
          <div className="flex flex-col justify-center px-5 w-3/5 h-full ">
            <Label className="font-bold text-xl">{props.name}</Label>
            <Label className="mt-2 mb-2">Quantity: {quantity}</Label>
            <div className="flex flex-col">
              <AddAudienceDialog {...props} />
              {quantity > 0 ? (
                <div className="flex justify-end">
                  <EditAudienceDialog {...props} />
                  <Button
                    variant="destructive"
                    className="py-2 px-4 rounded mt-1 ml-1 mb-0.5 w-1/5"
                    onClick={() => removeFromCart(props.id)}
                  >
                    <i className="fa fa-trash" />
                  </Button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
