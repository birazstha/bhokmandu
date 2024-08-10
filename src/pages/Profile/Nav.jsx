import { NavLink } from "react-router-dom";
import { menus } from "./menu";

export default function Nav(params) {
  return (
    <ul className="p-5 w-1/4 border-r-black ">
      {menus.map((menu) => (
        <li>
          <NavLink
            to={menu.path}
            end
            className={({ isActive }) =>
              `${isActive ? "text-red-700" : ""} flex gap-1 items-center`
            }
          >
            <i className={menu.icon}></i>
            <p>{menu.title}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
