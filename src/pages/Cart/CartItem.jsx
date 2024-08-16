import { useContext } from "react";
import { Modal, Button } from "rsuite";
import { CartContext } from "../../context/cart-context";
import Btn from "../../components/ui/Button";

export default function CartItem({ handleClose, handleOpen, open }) {
  const { cart, updateCart } = useContext(CartContext);

  return (
    <Modal open={open} onClose={handleClose}>
      <Modal.Header>
        <Modal.Title className="border-b-2 pb-2">Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cart && cart.length > 0 ? (
          cart.map((item) => (
            <div className="flex justify-between mb-3">
              <p>
                {item.title} - {item.quantity} X Rs. {item.rate} /-
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => updateCart("remove", item.id)}
                  className="bg bg-red-500 rounded-full w-6 text-white"
                >
                  <i className="fa fa-minus"></i>
                </button>

                {item.quantity}
                <button
                  onClick={() => updateCart("add", item.id)}
                  className="bg bg-red-500 rounded-full w-6 text-white"
                >
                  <i className="fa fa-plus"></i>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-red-500">No items in cart</p>
        )}
        <p className="text-end font-bold text-xl">
          {/* Rs. {cart.reduce((a, b) => a + b.grand_total, 0)}/- */}
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Btn
          type="link"
          path="/checkout"
          onClick={handleClose}
          appearance="primary"
        >
          Proceed to Checkout
        </Btn>
        <Button onClick={handleClose} appearance="default">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
