import { useContext } from "react";
import { Button, Radio, RadioGroup } from "rsuite";
import { CartContext } from "../../context/cart";
import { useFormik } from "formik";
import { checkoutSchema } from "../../schema/checkout-form";
import { Form, redirect, useNavigate } from "react-router-dom";
import { checkoutApi } from "../../api";
import toast from "react-hot-toast";

export default function Checkout(params) {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      delivery_address: "",
      special_instructions: "",
      payment_method: "",
    },
    validationSchema: checkoutSchema,
    onSubmit: async (values) => {
      const result = await checkoutApi(values, cart);
      if (result === 200) {
        toast.success("Your order has been placed.");
        navigate("/profile/orders");
      }
    },
  });

  return (
    <>
      <p className="text-3xl mb-2">Checkout</p>
      <hr />

      <div className="flex flex-col md:flex-row gap-4 p-4">
        <div className="w-full md:w-3/4">
          <Form className="space-y-4" onSubmit={formik.handleSubmit}>
            {/* Delivery Address */}
            <div>
              <label htmlFor="" className="block text-sm font-bold mb-2">
                Delivery Address
                <span className="text-red-500"> *</span>
              </label>
              <input
                type="text"
                name="delivery_address"
                value={formik.values.delivery_address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              <p className="text-red-500">
                {formik.touched.delivery_address &&
                  formik.errors.delivery_address}
              </p>
            </div>

            {/* Special Instructions */}
            <div>
              <label htmlFor="" className="block text-sm mb-2 font-bold">
                Special Instructions
              </label>
              <textarea
                name="special_instructions"
                value={formik.values.special_instructions}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              ></textarea>
              <p className="text-red-500">
                {formik.touched.special_instructions &&
                  formik.errors.special_instructions}
              </p>
            </div>

            <div>
              <label htmlFor="" className="font-bold">
                Payment Method
                <span className="text-red-500"> *</span>
              </label>
              <RadioGroup
                name="payment_method"
                value={formik.values.payment_method}
                onChange={(value) =>
                  formik.setFieldValue("payment_method", value)
                }
              >
                <Radio value="cod">Cash On Delivery</Radio>
                <Radio value="esewa">E-sewa</Radio>
                <Radio value="khalti">Khalti</Radio>
              </RadioGroup>
            </div>

            <div>
              <Button appearance="primary" type="submit">
                Confirm
              </Button>
            </div>
          </Form>
        </div>
        <div className="w-full md:w-1/4 bg-gray-50 p-4 rounded-md shadow-md">
          <p className="font-bold text-lg mb-4">My Bag</p>
          <div className="space-y-2">
            {cart.map((cuisine) => (
              <div
                key={cuisine.id}
                className="flex justify-between items-center"
              >
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
