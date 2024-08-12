import { useContext } from "react";
import { CartContext } from "../../context/cart";
import { Button } from "rsuite";

export default function Checkout(params) {
  const { cart } = useContext(CartContext);
  console.log(cart);

  return (
    <>
      <p className="text-3xl mb-2">Checkout</p>
      <hr />

      <div className="flex flex-col md:flex-row gap-4 p-4">
        <div className="w-full md:w-3/4">
          <form action="" className="space-y-4">
            <div>
              <label htmlFor="" className="block text-sm font-semibold mb-2">
                Delivery Address
              </label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="" className="block text-sm font-semibold mb-2">
                Special Instructions
              </label>
              <textarea
                name=""
                id=""
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>

            <div>
              <Button appearance="primary">Confirm</Button>
            </div>
          </form>
        </div>
        <div className="w-full md:w-1/4 bg-gray-50 p-4 rounded-md shadow-md">
          <p className="font-bold text-lg mb-4">My Bag</p>
          <div className="space-y-2">
            {cart.map((cuisine) => (
              <div className="flex justify-between items-center">
                <p>{cuisine.quantity} X</p>
                <p>{cuisine.title}</p>
                <p>{cuisine.rate}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between items-center">
              <p className="font-semibold">SUB TOTAL</p>
              <p>Rs.{cart.reduce((a, b) => a + b.grand_total, 0)}/-</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold">Delivery Charge</p>
              <p>Free</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="font-semibold text-lg">Grand Total</p>
              <p className="text-lg font-bold">
                Rs.{cart.reduce((a, b) => a + b.grand_total, 0)}/-
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
