import { useContext } from "react";
import { ThemeContext } from "../context/theme-cart";

export default function Footer(params) {
  const { theme } = useContext(ThemeContext);

  return (
    <footer
      class={`${
        theme ? "text-black" : "bg-[#242527] text-white"
      } border-t border-gray-200 py-6`}
    >
      <div class="container mx-auto text-center">
        <p class="text-sm">&copy; 2024 Bhokmandu. All rights reserved.</p>
        <div class="mt-4">
          <a
            href="/"
            className="text-gray-400 hover:text-white mx-2 duration-200"
          >
            Privacy Policy
          </a>
          <a
            href="/"
            className="text-gray-400 hover:text-white mx-2 duration-200"
          >
            Terms of Service
          </a>
          <a
            href="/"
            className="text-gray-400 hover:text-white mx-2 duration-200"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
