import { useContext, useEffect, useState } from "react";
import { ordersApi } from "../../api";
import { Skeleton } from "@mui/material";
import { ThemeContext } from "@emotion/react";
import { Badge } from "rsuite";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";

export default function OrderHistory(params) {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    ordersApi()
      .then((data) => setOrders(data))
      .finally(() => setLoading(false)); // Ensure loading is set to false
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <Skeleton width="100%" height={30} />
          <Skeleton width="100%" height={30} />
          <Skeleton width="100%" height={30} />
          <Skeleton width="100%" height={30} />
          <Skeleton width="100%" height={30} />
          <Skeleton width="100%" height={30} />
          <Skeleton width="100%" height={30} />
          <Skeleton width="100%" height={30} />
          <Skeleton width="100%" height={30} />
          <Skeleton width="100%" height={30} />
        </div> // Show a loading message or spinner
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  S.N
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Code
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ordered At
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Delivery Status
                </th>

                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Total Amount
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders.map((order, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                      {index + 1}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                      {order.code}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                      {order.ordered_at}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                      <Badge
                        color={order.delivery_status === 1 ? "green" : "blue"}
                        content={
                          order.delivery_status === 1 ? "Delivered" : "Pending"
                        }
                      />
                    </td>

                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                      {order.ordered_at}
                    </td>
                    <td className="px-6 py-4 border-b border-gray-200 text-sm text-gray-700">
                      <Button type="link" path={`/profile/orders/${order.id}`}>
                        <i className="fa fa-eye"></i>
                      </Button>

                    
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
