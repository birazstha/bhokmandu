import { Outlet } from "react-router-dom";

export default function OrderHistory() {
  return (
    <div>
      <h2>Order History</h2>
      {/* Render nested routes here */}
      <Outlet />
    </div>
  );
}
