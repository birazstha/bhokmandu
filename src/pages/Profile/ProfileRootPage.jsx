import { useContext, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../context/theme-cart";
import Nav from "./Nav";
import { ProfileContext } from "../../context/profile-context";
import toast from "react-hot-toast";

export default function ProfileRootPage() {
  const navigate = useNavigate();
  const { theme } = useContext(ThemeContext);
  const { profile } = useContext(ProfileContext);

  useEffect(() => {
    if (!profile) {
      toast.success("Login first");
      navigate("/");
    }
  }, [navigate, profile]);

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
