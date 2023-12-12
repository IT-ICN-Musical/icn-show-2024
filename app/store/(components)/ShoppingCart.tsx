import { CartItem } from "./CartItem";
import { useShoppingCart } from "../(context)/ShoppingCartContext";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "./(utils)/Sheet";

import storeItems from "../data.json";
import CheckoutDialog from "./CheckoutDialog";

export default function ShoppingCart() {
  const { getItemQuantity, cartItems, cartQuantity } = useShoppingCart();
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="bg-white border border-[#092054] rounded-full p-2.5 relative transition-all duration-300 w-12 h-12 hover:bg-[#092054] text-[#092054] hover:text-white">
          <i className="fa fa-shopping-cart fa-lg " />

          <div
            className="rounded-full bg-red-500 text-white w-5 h-5 flex justify-center items-center"
            style={{
              position: "absolute",
              bottom: "0",
              right: "0",
              transform: "translate(25%, 25%)",
            }}
          >
            {cartQuantity}
          </div>
        </button>
      </SheetTrigger>
      <SheetContent className="!w-1/4 !sm:w-full !max-w-none">
        <SheetTitle className="pb-2 font-bold text-3xl mb-3 mt-4">
          My Cart
        </SheetTitle>

        {cartItems
          .filter((item) => getItemQuantity(item.id) > 0)
          .map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              quantity={getItemQuantity(item.id)}
            />
          ))}
        <div className="flex flex-row justify-between text-2xl font-bold mb-3">
          <div>Total</div>
          <div>
            $
            {cartItems.reduce((total, cartItem) => {
              const item = storeItems.find(
                (item: { id: number }) => item.id === cartItem.id
              );
              return total + (item?.price || 0) * getItemQuantity(cartItem.id);
            }, 0)}
          </div>
        </div>
        <SheetFooter className="mt-3">
          <CheckoutDialog />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
