import { Link } from "react-router-dom";

export default function Button({ children, type, path }) {
  return type && type === "link" ? (
    <Link
      to={path}
      className="bg-[#6663e6] px-6 py-1 rounded-md text-white hover:bg-[#5a58db] duration-200 flex items-center"
    >
      {children}
    </Link>
  ) : (
    <button>{children}</button>
  );
}
