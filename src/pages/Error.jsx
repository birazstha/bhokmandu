import { useContext } from "react";
import Header from "../components/Header";
import { ThemeContext } from "../context/theme-cart";
import Footer from "../components/Footer";

export default function Error(params) {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <Header />
      <div
        className={`p-5 mx-auto min-h-screen flex flex-col items-center mt-[83px] ${
          !theme && "bg-[#18191b] text-white"
        }`}
      >
        <h1 className="text-3xl font-bold">An Error Occurred</h1>
        <p className="text-2xl">Error Message</p>
      </div>
      <Footer />
    </>
  );
}
