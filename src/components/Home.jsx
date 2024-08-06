import { defer, useLoaderData, Await } from "react-router-dom";
import { loadCuisines } from "../api";
import { Suspense } from "react";
import CuisineItem from "./CuisineItem";

export default function Home(params) {
  const { cuisines } = useLoaderData();

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-2 ">
        <Suspense fallback={<p>Loading.....</p>}>
          <Await resolve={cuisines}>
            {(cuisines) =>
              cuisines.map((cuisine) => <CuisineItem cuisine={cuisine} />)
            }
          </Await>
        </Suspense>
      </div>
    </>
  );
}

export function cuisineLoader() {
  return defer({
    cuisines: loadCuisines(),
  });
}
