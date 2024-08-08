import { useContext } from "react";
import Button from "../../components/ui/Button";
import { CartContext } from "../../context/cart";

export default function CuisineItem({ cuisine }) {
  const { addToCart } = useContext(CartContext);

  function test() {
    alert();
  }
  return (
    // <div className="w-[350px] transition-transform duration-300 ease-in-out transform hover:scale-105 shadow-xl rounded-lg mb-5 cursor-pointer">
    <div className="w-[350px] shadow-xl rounded-lg mb-5">
      <div className="w-full h-64 overflow-hidden rounded-lg">
        <img
          // className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          className="w-full h-full object-cover"
          src={cuisine.image}
          alt="Aloo Tama"
        />
      </div>
      <div className="p-4">
        <p className="text-xl font-semibold text-center">{cuisine.title}</p>
        <p className="text-center">{cuisine.description}</p>
        <p className="font-bold text-center">{`Rs.${cuisine.price}/-`}</p>
        <p className="text-center mt-2">
          <Button clickedAction={() => addToCart(cuisine.id)}>
            Add To Cart
          </Button>
        </p>
      </div>
    </div>
  );
}
