import { useShoppingCart } from "../(context)/ShoppingCartContext";
import { StoreItemData } from "../(types)/types";
import { Button } from "./(utils)/Button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogClose,
} from "./(utils)/Dialog";
import EditAudienceDialogItem from "./EditAudienceDialogItem";

export default function EditAudienceDialog(props: StoreItemData) {
  const { getItemProducts } = useShoppingCart();

  const products = getItemProducts(props.id);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="py-2 px-4 rounded mt-1 mb-0.5">
          Edit Order
        </Button>
      </DialogTrigger>
      <DialogContent>
        {products.map((product) => (
          <EditAudienceDialogItem
            key={product.productId}
            storeItemId={props.id}
            {...product}
          />
        ))}
        <DialogFooter>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
