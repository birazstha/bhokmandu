import * as yup from "yup";

export const checkoutSchema = yup.object().shape({
  delivery_address: yup.string().required("Delivery Address is required."),
});
