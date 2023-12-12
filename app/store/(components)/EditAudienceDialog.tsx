import { useState } from "react";
import { useShoppingCart } from "../(context)/ShoppingCartContext";
import { Button } from "./(utils)/Button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
  DialogClose,
  DialogHeader,
} from "./(utils)/Dialog";
import { Input } from "./(utils)/Input";
import { Label } from "./(utils)/Label";

type StoreItemProps = {
  id: number;
  name: string;
  numTickets: number;
  price: number;
  imgUrl: string;
};

export default function EditAudienceDialog(props: StoreItemProps) {
  const { getItemProducts, setItemProducts } = useShoppingCart();
  const [isEditing, setIsEditing] = useState(false);
  const products = getItemProducts(props.id);

  const handleDeleteProduct = (productId: number) => {
    const updatedProducts = products.filter(
      (product) => product.productId !== productId
    );

    setItemProducts(props.id, updatedProducts);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="py-2 px-4 rounded mt-1 mb-0.5">
          Edit Order
        </Button>
      </DialogTrigger>
      <DialogContent>
        {products.map((product) => (
          <div key={product.productId} className="mb-2">
            <DialogHeader>
              <div className="flex items-center mb-2">
                <Label
                  className="text-lg font-bold"
                  htmlFor={`Product ${product.productId}`}
                >
                  Product {product.productId}
                </Label>
                <div className="space-x-2 ml-6">
                  {isEditing ? (
                    <Button onClick={() => setIsEditing(false)}>
                      Save Changes
                    </Button>
                  ) : (
                    <Button size={"icon"} onClick={() => setIsEditing(true)}>
                      <i className="fa fa-pencil" />
                    </Button>
                  )}

                  <Button
                    variant="destructive"
                    onClick={() => handleDeleteProduct(product.productId)}
                    size={"icon"}
                  >
                    <i className="fa fa-trash" />
                  </Button>
                </div>
              </div>
            </DialogHeader>

            <div className="grid grid-cols-2 gap-2">
              {product.audience.map((audience, index) => (
                <Input
                  disabled={!isEditing}
                  key={audience.audienceId}
                  value={audience.name || ""}
                  autoFocus={isEditing && index === 0}
                  className={`${
                    isEditing
                      ? ""
                      : "border-none disabled:cursor-default disabled:opacity-100"
                  }`}
                />
              ))}
            </div>
          </div>
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
