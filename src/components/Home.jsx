import { useNavigate } from "react-router-dom";
import { loadCuisines } from "../api";
import CuisineList from "../pages/Cuisine/CuisineList";
import Search from "./ui/Search";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { Loader } from "rsuite";

export default function Home(params) {
  const navigate = useNavigate();
  const [cuisines, setCuisines] = useState([]); // Initialize state for cuisines
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = debounce((event) => {
    let enteredKeyword = event.target.value;
    setKeyword(enteredKeyword);
    navigate(`/?keyword=${enteredKeyword}`);
  });

  useEffect(() => {
    setLoading(true);
    loadCuisines(keyword)
      .then((data) => setCuisines(data))
      .catch((error) => console.error("Error loading cuisines:", error))
      .finally(() => setLoading(false));
  }, [keyword]);

  return (
    <>
      <Search handleSearch={handleSearch} />
      {loading ? (
        <Loader center vertical content="Searching.." size="lg"></Loader>
      ) : (
        <CuisineList cuisines={cuisines} />
      )}
    </>
  );
}
