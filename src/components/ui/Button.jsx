import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cart";

export default function Button({
  children,
  type,
  path,
  clickedAction,
  ...props
}) {
  return type && type === "link" ? (
    <Link
      {...props}
      to={path}
      className="bg-[#6663e6] text-white p-2 rounded-md duration-200 ease-in-out font-bold mr-2"
    >
      {children}
    </Link>
  ) : (
    <button
      onClick={() => clickedAction()}
      className="bg-primary text-white p-2 rounded-md hover:bg-red-600 duration-200 ease-in-out font-bold"
    >
      {children}
    </button>
  );
}
