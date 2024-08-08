import { Suspense } from "react";
import { Await } from "react-router-dom";
import CuisineItem from "./CuisineItem";

export default function CuisineList({ cuisines }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-2 ">
      <Suspense fallback={<p>Searching.....</p>}>
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
