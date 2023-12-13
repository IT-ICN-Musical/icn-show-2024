import { useShoppingCart } from "../(context)/ShoppingCartContext";
import {
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "./(utils)/AlertDialog";

export default function DeleteAlertDialogContent({ id }: { id: number }) {
  const { removeFromCart } = useShoppingCart();
  return (
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Delete</AlertDialogTitle>
        <AlertDialogDescription>
          This action cannot be undone. This will delete this item from the
          cart.
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={() => removeFromCart(id)}>
          Delete
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  );
}
