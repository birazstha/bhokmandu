import { useContext } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ThemeContext } from "../../context/theme-cart";
import Nav from "./Nav";

export default function ProfileRootPage(params) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`border-2 flex ${!theme && "text-white"}`}>
      <Nav />
      <div className="p-5 w-3/4 ">
        <Outlet />
      </div>
    </div>
  );
}
