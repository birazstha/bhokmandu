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
              `${isActive ? "text-primary" : ""} flex gap-1 items-center mb-2`
            }
          >
            <i className={`${menu.icon} w-[20px]`}></i>
            <p>{menu.title}</p>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
