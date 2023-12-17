import { useEffect, useState } from "react";

import {
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogDescription,
  DialogTitle,
  Dialog,
  DialogTrigger,
} from "./(utils)/Dialog";

import { Label } from "./(utils)/Label";
import { Input } from "./(utils)/Input";
import { Button } from "./(utils)/Button";
import { useShoppingCart } from "../(context)/ShoppingCartContext";
import { API_URL } from "../(api)/constants";
import { useData } from "../(context)/StoreDataContext";
import { CartItem, StoreItemData } from "../(types)/types";
import { fetchData, preprocessData } from "../(api)/api";

export default function CheckoutDialog() {
  const { removeAllItems } = useShoppingCart();
  const [buyerName, setBuyerName] = useState<string>();
  const [buyerEmail, setBuyerEmail] = useState<string>();
  const [buyerTelp, setBuyerTelp] = useState<string>();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isWrongNameInput, setIsWrongNameInput] = useState(false);
  const [isWrongEmailInput, setIsWrongEmailInput] = useState(false);
  const [isWrongTelpInput, setIsWrongTelpInput] = useState(false);
  const [processedData, setProcessedData] = useState<StoreItemData[]>();
  const { cartItems } = useShoppingCart();
  const { data } = useData();

  useEffect(() => {
    const fetchDataAndProcess = async () => {
      try {
        const backendData = await fetchData();
        const processedDataResult = preprocessData(backendData);
        setProcessedData(processedDataResult);
      } catch (error) {
        console.error("Error fetching and processing data:", error);
      }
    };

    fetchDataAndProcess();
  }, []);

  const extractAudienceNames = (
    cartItems: CartItem[],
    data: StoreItemData[] | undefined
  ): Record<string, any>[] => {
    const result: Record<string, any>[] = [];

    cartItems.forEach((cartItem) => {
      const matchingData = data?.find((item) => item.id === cartItem.id);

      if (matchingData) {
        cartItem.product.forEach((product) => {
          product.audience.forEach((audience) => {
            const productId = matchingData.productId;
            const showTime = matchingData.showTime;

            const isProductInBackend = processedData?.some(
              (processedItem) =>
                processedItem.productId === productId && processedItem.stock > 0
            );

            if (isProductInBackend) {
              result.push({
                audienceName: audience.name,
                productId: productId,
                showTime: showTime,
              });
            }
          });
        });
      }
    });

    return result;
  };

  const result = extractAudienceNames(cartItems, data);

  const clearInput = () => {
    setBuyerName("");
    setBuyerEmail("");
    setBuyerTelp("");
  };

  const handleCheckoutClick = async () => {
    if (!buyerName || buyerName.trim() === "") {
      setIsWrongNameInput(true);
      return;
    } else {
      setIsWrongNameInput(false);
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!buyerEmail || !emailRegex.test(buyerEmail)) {
      setIsWrongEmailInput(true);
      return;
    } else {
      setIsWrongEmailInput(false);
    }

    const telRegex = /^[0-9+]+$/;
    if (!buyerTelp || !telRegex.test(buyerTelp)) {
      setIsWrongTelpInput(true);
      return;
    } else {
      setIsWrongTelpInput(false);
    }

    try {
      const response = await fetch(`${API_URL}/stripe/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          buyerName: buyerName.trim(),
          buyerPhoneNumber: buyerTelp.trim(),
          buyerEmail: buyerEmail.trim(),
          orders: result,
        }),
      });

      if (response.ok) {
        const responseData = await response.json();

        const sessionUrl = responseData.sessionUrl;
        window.location.href = sessionUrl;
      } else {
        console.error("Checkout failed");
      }
      removeAllItems();
    } catch (error) {
      console.error("Error during checkout:", error);
    }

    setIsDialogOpen(false);
  };

  useEffect(() => {
    isDialogOpen === false ? clearInput() : null;
  }, [isDialogOpen]);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button>Checkout</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="pb-1 text-xl">Buyer Information</DialogTitle>
          <DialogDescription>
            This will be used to send the tickets. Please make sure the
            information here are correct and double-check items in Payment Page.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-2">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              className="col-span-3"
              onChange={(e: { target: { value: string } }) => {
                const nameValue = e.target.value;
                setBuyerName(nameValue);
              }}
            />
          </div>
          {isWrongNameInput && (
            <p className="text-red-500 mb-1">
              Warning: Please ensure the name is correct.
            </p>
          )}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right">
              Email
            </Label>
            <Input
              id="email"
              className="col-span-3"
              onChange={(e: { target: { value: string } }) => {
                const emailValue = e.target.value;
                setBuyerEmail(emailValue);
              }}
            />
          </div>
          {isWrongEmailInput && (
            <p className="text-red-500 mb-1">
              Warning: Please ensure the email format is correct.
            </p>
          )}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="telephone" className="text-right">
              Telephone No.
            </Label>
            <Input
              id="telephone"
              className="col-span-3"
              onChange={(e: { target: { value: string } }) => {
                const telpValue = e.target.value;
                setBuyerTelp(telpValue);
              }}
            />
          </div>
          {isWrongTelpInput && (
            <p className="text-red-500 mb-1">
              Warning: Please ensure the telephone number format is correct.
            </p>
          )}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button onClick={handleCheckoutClick}>Proceed to Payment</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
