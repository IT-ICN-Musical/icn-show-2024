import { useShoppingCart } from "../context/ShoppingCartContext";
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
        <Button
          variant="secondary"
          className="py-2 px-4 rounded mt-1 mb-0.5 w-1/5"
        >
          <i className="fa fa-pencil" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        {products.map((product) => (
          <div key={product.productId} className="mb-2">
            <DialogHeader>
              <div className="flex items-center justify-between mb-2">
                <Label
                  className="text-lg font-bold"
                  htmlFor={`Product ${product.productId}`}
                >
                  Product {product.productId}
                </Label>
                <div className="space-x-2 mr-3">
                  <Button
                    variant="secondary"
                    onClick={() => handleDeleteProduct(product.productId)}
                    size={"icon"}
                  >
                    <i className="fa fa-pencil" />
                  </Button>
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
              {product.audience.map((audience) => (
                <Input key={audience.audienceId} value={audience.name || ""} />
              ))}
            </div>
          </div>
        ))}
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Okay</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
