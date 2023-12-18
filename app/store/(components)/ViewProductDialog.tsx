import { useState } from "react";
import { StoreItemData } from "../(types)/types";
import { Button } from "./(utils)/Button";
import { Dialog, DialogTrigger } from "./(utils)/Dialog";

import ViewProductDialogContent from "./ViewProductDialogContent";

export default function ViewProductDialog(props: StoreItemData) {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>See More</Button>
      </DialogTrigger>
      <ViewProductDialogContent {...props} open={open} onClose={handleClose} />
    </Dialog>
  );
}
