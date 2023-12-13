import { Button } from "./(utils)/Button";
import { Dialog, DialogTrigger } from "./(utils)/Dialog";

import ViewProductDialogContent from "./ViewProductDialogContent";

type StoreItemProps = {
  id: number;
  name: string;
  numTickets: number;
  price: number;
  stock: number;
  imgUrl: string;
};

export default function ViewProductDialog(props: StoreItemProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>See More</Button>
      </DialogTrigger>
      <ViewProductDialogContent {...props} />
    </Dialog>
  );
}
