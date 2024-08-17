import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/theme-cart";
import Nav from "./Nav";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

export default function ProfileRootPage() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);

  const accessToken = Cookies.get("accessToken");

  useEffect(() => {
    if (!accessToken) {
      toast.success("Login first");
      navigate("/");
    }
  }, [navigate, accessToken]);

  return (
    <div className={`${!theme && "text-white"} duration-500 transition-colors`}>
      <p className="text-3xl mb-2">Account Settings</p>
      <hr />
      <div className="rounded-lg p-2 flex ">
        <Nav />
        <div className={`p-5 w-3/4 border-l-2  `}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
