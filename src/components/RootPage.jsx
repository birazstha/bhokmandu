import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { ProfileContext } from "../context/profile-context";
import { useContext } from "react";
import { Loader } from "rsuite";
import { ThemeContext } from "../context/theme-cart";

export default function RootPage(params) {
  const { loading } = useContext(ProfileContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`flex flex-col min-h-screen ${!theme && "bg-[#18191b]"}`}>
      <>
        <Header />
        <main className="flex-grow">
          <div className="p-5 mx-auto max-w-[1600px] mt-[90px]">
            <Outlet />
          </div>
        </main>
        <Footer />
      </>
    </div>
  );
}
