import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { orderDetailApi } from "../../api";

export default function OrderDetail() {
  const { id } = useParams();
  const [detail, setDetail] = useState({
    code: "",
    delivery_status: "",
    ordered_at: "",
    cuisines: [],
  });

  const totalPrice = detail.cuisines.reduce(
    (total, cuisine) => total + cuisine.total,
    0
  );

  useEffect(() => {
    orderDetailApi(id).then((data) => setDetail(data));
  }, [id]);

  return (
    <div className=" bg-white">
      <h2 className="text-2xl font-bold mb-4">Order Details</h2>
      <hr />
      <div className="flex justify-between mt-5">
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Order Code:</h3>
          <p className="text-gray-700">{detail.code}</p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Delivery Status:</h3>
          <p
            className={`text-sm font-medium ${
              detail.delivery_status === "Delivered"
                ? "text-green-500"
                : "text-yellow-500"
            }`}
          >
            {detail.delivery_status}
          </p>
        </div>
        <div className="mb-4">
          <h3 className="text-lg font-semibold">Ordered At:</h3>
          <p className="text-gray-700">
            {new Date(detail.ordered_at).toLocaleString()}
          </p>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">Cuisines Ordered:</h3>
        <table className="min-w-full bg-white border">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Title</th>
              <th className="py-2 px-4 border">Price</th>
              <th className="py-2 px-4 border">Quantity</th>
              <th className="py-2 px-4 border">Total</th>
            </tr>
          </thead>
          <tbody>
            {detail.cuisines.map((cuisine, index) => (
              <tr key={index} className="text-center">
                <td className="py-2 px-4 border font-bold">{cuisine.title}</td>
                <td className="py-2 px-4 border">Rs.{cuisine.price}/-</td>
                <td className="py-2 px-4 border">{cuisine.quantity}</td>
                <td className="py-2 px-4 border">Rs.{cuisine.total}/- </td>
              </tr>
            ))}
            <tr>
              <td colSpan="3" className="py-2 px-4 border text-center">
                Grand Total
              </td>
              <td className="py-2 px-4 border text-center">Rs.{totalPrice}/-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
