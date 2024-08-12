import { useContext } from "react";
import { Button, Modal } from "rsuite";
import { CartContext } from "../../context/cart";

export default function CartItem({ handleClose, handleOpen, open }) {
  const { cart } = useContext(CartContext);

  return (
    <Modal open={open} onClose={handleClose}>
      <Modal.Header>
        <Modal.Title className="border-b-2 pb-2">Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart && cart.length > 0
          ? cart.map((item) => (
              <div className="flex justify-between mb-3">
                <p>
                  {item.title} - {item.quantity} X Rs.{item.rate} /-{" "}
                </p>
                <div className="flex gap-2">
                  <button className="bg bg-red-500 rounded-full w-6 text-white">
                    +
                  </button>
                  1
                  <button className="bg bg-red-500 rounded-full w-6 text-white">
                    -
                  </button>
                </div>
              </div>
            ))
          :   <p className="text-center text-red-500">No items in cart</p>}
        <p className="text-end font-bold text-xl">
          Rs. {cart.reduce((a, b) => a + b.rate, 0)}/-
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} appearance="primary">
          Checkout
        </Button>
        <Button onClick={handleClose} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
