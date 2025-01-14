import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
export default function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );
   
  function handleCloseCart() {
    userProgressCtx.hideCart();
  }

  return (
    <Modal open={userProgressCtx.progress === "cart"}>
      <h2 className="font-alatsi text-2xl mb-4">Your Cart</h2>
      <ul>
        {cartCtx.items.map((items) => (
          <li  key={items.id}>
            {items.name} - {items.quantity}
          </li>
        ))}
      </ul>
      <p className="font-alatsi font-bold text-lg mb-6 flex justify-end ">
        {currencyFormatter.format(cartTotal)}
      </p>
      <p className="flex justify-end space-x-4">
        <button className="bg-none" onClick={handleCloseCart}>
          Close
        </button>
        <Button>Go to Checkout</Button>
      </p>
    </Modal>
  );
}
