import { Suspense, useContext } from "react";
import { Await } from "react-router-dom";
import CuisineItem from "./CuisineItem";
import { ThemeContext } from "../../context/theme-cart";
import SkeletonLoading from "./SkeletonLoading";

export default function CuisineList({ cuisines }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-10 mx-auto ${
        !theme && "text-white"
      }`}
    >
      <Await resolve={cuisines}>
        {(cuisines) =>
          cuisines.length > 0 ? (
            cuisines.map((cuisine) => <CuisineItem cuisine={cuisine} />)
          ) : (
            <>
              <SkeletonLoading count={10} />
            </>
          )
        }
      </Await>
    </div>
  );
}
