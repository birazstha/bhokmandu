import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cart";

export default function Button({ children, type, path, clickedAction }) {
  return type && type === "link" ? (
    <Link
      to={path}
      className="bg-[#6663e6] px-6 py-1 rounded-md text-white hover:bg-[#5a58db] duration-200 flex items-center"
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={() => clickedAction()}
      className="bg-red-400 text-white p-2 rounded-md hover:bg-red-500 duration-200 ease-in-out"
    >
      {children}
    </button>
  );
}
