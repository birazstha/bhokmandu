import { Suspense, useContext } from "react";
import { Await } from "react-router-dom";
import CuisineItem from "./CuisineItem";
import { ThemeContext } from "../../context/theme-cart";

export default function CuisineList({ cuisines }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-2 mx-auto justify-items-center">
      <Suspense
        fallback={<p className={`${!theme && "text-white"}`}>Searching.....</p>}
      >
        <Await resolve={cuisines}>
          {(cuisines) =>
            cuisines.length > 0 ? (
              cuisines.map((cuisine) => <CuisineItem cuisine={cuisine} />)
            ) : (
              <div className="flex items-center justify-center h-full col-span-full">
                <p className="text-center text-lg  p-4">No data found</p>
              </div>
            )
          }
        </Await>
      </Suspense>
    </div>
  );
}
