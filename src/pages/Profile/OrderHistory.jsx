import { useEffect, useState } from "react";
import { ordersApi } from "../../api";
import { Skeleton } from "@mui/material";

export default function OrderHistory(params) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true); // Start with loading true

  useEffect(() => {
    ordersApi()
      .then((data) => setOrders(data))
      .finally(() => setLoading(false)); // Ensure loading is set to false
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <Skeleton  width="100%" height={30}/>
          <Skeleton  width="100%" height={30}/>
          <Skeleton  width="100%" height={30}/>
          <Skeleton  width="100%" height={30}/>
          <Skeleton  width="100%" height={30}/>
          <Skeleton  width="100%" height={30}/>
          <Skeleton  width="100%" height={30}/>
          <Skeleton  width="100%" height={30}/>
          <Skeleton  width="100%" height={30}/>
          <Skeleton  width="100%" height={30}/>
        </div> // Show a loading message or spinner
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Cuisines Ordered
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Quantity
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rate
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 &&
                orders.map((order, index) => (
                  <>
                    {order.cuisines.map((cuisine, idx) => (
                      <tr key={idx}>
                        <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                          {cuisine.title}
                        </td>
                        <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                          {cuisine.quantity}
                        </td>
                        <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                          Rs.{cuisine.rate}
                        </td>
                        <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                          Rs.{cuisine.quantity * cuisine.rate}
                        </td>
                      </tr>
                    ))}
                    <tr className="bg-gray-50">
                      <td
                        colSpan="3"
                        className="px-6 py-4 border-b border-gray-200 text-sm font-semibold text-gray-700 text-right"
                      >
                        Grand Total
                      </td>
                      <td className="px-6 py-4 border-b border-gray-200 text-sm font-semibold text-gray-700">
                        Rs.{order.total_amount}
                      </td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td
                        colSpan="3"
                        className="px-6 py-4 border-b border-gray-200 text-sm font-semibold text-gray-700 text-right"
                      >
                        Delivery Cost
                      </td>
                      <td className="px-6 py-4 border-b border-gray-200 text-sm font-semibold text-gray-700">
                        -
                      </td>
                    </tr>
                    <tr className="bg-gray-100">
                      <td
                        colSpan="3"
                        className="px-6 py-4 border-b border-gray-200 text-sm font-semibold text-gray-700 text-right"
                      >
                        Total
                      </td>
                      <td className="px-6 py-4 border-b border-gray-200 text-sm font-semibold text-gray-700">
                        Rs.{order.total_amount}
                      </td>
                    </tr>
                  </>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
