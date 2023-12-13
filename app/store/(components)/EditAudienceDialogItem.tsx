import { useState, useEffect } from "react";
import { DialogHeader } from "./(utils)/Dialog";
import { Button } from "./(utils)/Button";
import { Input } from "./(utils)/Input";
import { Label } from "./(utils)/Label";
import { useShoppingCart } from "../(context)/ShoppingCartContext";

type EditAudienceDialogItemProps = {
  storeItemId: number;
  productId: number;
  audience: Audience[];
};

type Audience = {
  audienceId: number;
  name: string;
};

export default function EditAudienceDialogItem(
  props: EditAudienceDialogItemProps
) {
  const { getItemProducts, setItemProducts } = useShoppingCart();

  const products = getItemProducts(props.storeItemId);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValues, setInputValues] = useState<string[]>([]);

  useEffect(() => {
    setInputValues(props.audience.map((audience) => audience.name || ""));
  }, [props.audience]);

  const handleSaveChanges = (productId: number) => {
    const anyInputIsEmpty = inputValues.some(
      (value) => (value?.trim() ?? "") === ""
    );

    if (anyInputIsEmpty || inputValues.length < props.audience.length) {
      return;
    }
    setIsEditing(false);

    const updatedProducts = products.map((product) => {
      if (product.productId === productId) {
        return {
          ...product,
          audience: inputValues.map((value, index) => ({
            audienceId: index,
            name: value,
          })),
        };
      }
      return product;
    });

    setItemProducts(props.storeItemId, updatedProducts);
  };

  const handleDeleteProduct = (productId: number) => {
    const updatedProducts = products.filter(
      (product) => product.productId !== productId
    );

    setItemProducts(props.storeItemId, updatedProducts);
  };

  return (
    <div key={props.productId} className="mb-2">
      <DialogHeader>
        <div className="flex items-center mb-2">
          <Label
            className="text-lg font-bold"
            htmlFor={`Product ${props.productId}`}
          >
            Product {props.productId}
          </Label>
          <div className="space-x-2 ml-6">
            {isEditing ? (
              <Button onClick={() => handleSaveChanges(props.productId)}>
                Save Changes
              </Button>
            ) : (
              <Button size={"icon"} onClick={() => setIsEditing(true)}>
                <i className="fa fa-pencil" />
              </Button>
            )}

            <Button
              variant="destructive"
              onClick={() => handleDeleteProduct(props.productId)}
              size={"icon"}
            >
              <i className="fa fa-trash" />
            </Button>
          </div>
        </div>
      </DialogHeader>

      <div className="grid grid-cols-2 gap-2">
        {props.audience.map((audience, index) => (
          <Input
            disabled={!isEditing}
            key={audience.audienceId}
            value={inputValues[index] || ""}
            className={`${
              isEditing
                ? ""
                : "border-none disabled:cursor-default disabled:opacity-100"
            }`}
            onChange={(e: { target: { value: string } }) => {
              const newInputValues = [...inputValues];
              newInputValues[index] = e.target.value;
              setInputValues(newInputValues);
            }}
          />
        ))}
      </div>
    </div>
  );
}
