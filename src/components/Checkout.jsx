import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting.jsx";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Checkout() {
  const cartCtx = useContext(CartContext);

  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleClose() {
    userProgressCtx.hideCheckout();
  }

  return (
    <Modal open={userProgressCtx.progress === "checkout"}>
      <form className="">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Checkout</h2>
        <p className="text-lg text-gray-700">
          Total Amount:{" "}
          <span className="font-semibold">
            {" "}
            {currencyFormatter.format(cartTotal)}{" "}
          </span>
        </p>

        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-mail Adress" id="email" type="email" />
        <Input label="Street" type="text" id="street" />

        <div>
          <Input label="Pin Code" type="text" id="pin-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className="flex justify-end space-x-4">
          <button type="button" onClick={handleClose}>
            Close
          </button>
          <Button className="p-4">Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
