import { defer, useLoaderData, Await, useNavigate } from "react-router-dom";
import { loadCuisines } from "../api";
import { Suspense, useState } from "react";
import CuisineItem from "./CuisineItem";
import { Loader } from "rsuite";

export default function Home(params) {
  const navigate = useNavigate();
  const { cuisines } = useLoaderData();
  const [loading, setLoading] = useState(true);

  const handleSearch = (event) => {
    navigate(`/?keyword=${event.target.value}`);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Enter your favorite Cuisine."
        onChange={handleSearch}
        className="border-[1.2px] border-gray-400 w-full mb-8 p-2 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring-2 transition duration-300"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-2 ">
      <Loader center content="Loading..." vertical size="lg" />
        
        <Suspense fallback={<p>Searching.....</p>}>
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

export function cuisineLoader({ request }) {
  const url = new URL(request.url);
  const keyword = url.searchParams.get("keyword") || "";
  return defer({
    cuisines: loadCuisines(keyword),
  });
}
