import { useState } from "react";
import { Button, Modal, Placeholder } from "rsuite";

export default function CartItem({ handleClose, handleOpen, open }) {
  return (
    <Modal open={open} onClose={handleClose}>
      <Modal.Header>
        <Modal.Title>Your Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="flex justify-between mb-3">
          <p>Jhol Momo - 1 X Rs.150/-</p>
          <div className="flex gap-2">
            <button className="bg bg-red-500 rounded-full w-6 text-white">
              +
            </button>
            1
            <button className="bg bg-red-500 rounded-full w-6 text-white">
              +
            </button>
          </div>
        </div>
        <div className="flex justify-between mb-3">
          <p>Jhol Momo - 1 X Rs.150/-</p>
          <div className="flex gap-2">
            <button className="bg bg-red-500 rounded-full w-6 text-white">
              +
            </button>
            1
            <button className="bg bg-red-500 rounded-full w-6 text-white">
              +
            </button>
          </div>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleClose} appearance="primary">
          Ok
        </Button>
        <Button onClick={handleClose} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
