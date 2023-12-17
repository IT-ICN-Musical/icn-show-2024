import { StoreItemData } from "../(types)/types";
import { Button } from "./(utils)/Button";
import { Dialog, DialogTrigger } from "./(utils)/Dialog";

import ViewProductDialogContent from "./ViewProductDialogContent";

export default function ViewProductDialog(props: StoreItemData) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>See More</Button>
      </DialogTrigger>
      <ViewProductDialogContent {...props} />
    </Dialog>
  );
}
