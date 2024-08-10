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
    <div
      className={` ${
        theme && "border-[0.1px]"
      } shadow-lg rounded-lg p-2 h-screen flex ${!theme && "text-white"} ${
        !theme && "bg-[#242527]"
      } duration-500 transition-colors `}
    >
      <Nav />
      <div className={`p-5 w-3/4 border-l-2  `}>
        <Outlet />
      </div>
    </div>
  );
}
