import { Outlet } from "react-router-dom";
import Header from "./Header";
import { ProfileContext } from "../context/profile-context";
import { useContext } from "react";
import { Loader } from "rsuite";
import { ThemeContext } from "../context/theme-cart";

export default function RootPage(params) {
  const { loading } = useContext(ProfileContext);
  const { theme } = useContext(ThemeContext);

  return (
    <>
      {/* {loading ? (
        <Loader
          center
          content="Loading..."
          vertical
          size="lg"
          className={`${!theme && "bg-[#18191b]"}`}
        />
      ) : (
        <>
          <Header />
          <div className={`${!theme && "bg-[#18191b]"} h-[400vh]`}>
            <div className="p-5 mx-auto max-w-[1600px]">
              <Outlet />
            </div>
          </div>
        </>
      )} */}

      <Header />
      <div className={`${!theme && "bg-[#18191b]"} transition-colors duration-500  h-[400vh]`}>
        <div className="p-5 mx-auto max-w-[1600px]">
          <Outlet />
        </div>
      </div>
    </>
  );
}
