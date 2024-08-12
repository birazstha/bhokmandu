import { useContext } from "react";
import Button from "../../components/ui/Button";
import { CartContext } from "../../context/cart";
import { ThemeContext } from "../../context/theme-cart";

export default function CuisineItem({ cuisine }) {
  const { addToCart } = useContext(CartContext);
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`shadow-xl rounded-lg mb-5 ${
        !theme && "bg-[#242527] transition-colors duration-500"
      }`}
    >
      <div className="w-full h-64 overflow-hidden rounded-tl-lg cursor-pointer">
        <img
          className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          src={cuisine.image}
          alt={cuisine.title}
        />
      </div>
      <div
        className={`p-4 flex flex-col items-center gap-2 ${
          !theme && "text-white"
        }`}
      >
        <p className="text-xl font-semibold">{cuisine.title}</p>
        <p className="font-bold w-[50%] text-center">{`Rs.${cuisine.price}/-`}</p>
        <p className="text-center">{cuisine.description}</p>
        <p className="mt-2">
          <Button clickedAction={() => addToCart(cuisine)}>Add To Cart</Button>
        </p>
      </div>
    </div>
  );
}
