import { useNavigate } from "react-router-dom";
import { loadCuisines } from "../api";
import CuisineList from "../pages/Cuisine/CuisineList";
import Search from "./ui/Search";
import { useContext, useEffect, useState } from "react";
import { debounce } from "lodash";
import { Loader } from "rsuite";
import { ThemeContext } from "../context/theme-cart";

export default function Home(params) {
  const navigate = useNavigate();
  const [cuisines, setCuisines] = useState([]); // Initialize state for cuisines
  const [keyword, setKeyword] = useState("");

  const handleSearch = debounce((event) => {
    setCuisines([]);
    let enteredKeyword = event.target.value;
    setKeyword(enteredKeyword);
    navigate(`/?keyword=${enteredKeyword}`);
  }, 200);

  useEffect(() => {
    loadCuisines(keyword)
      .then((data) => setCuisines(data))
      .catch((error) => console.error("Error loading cuisines:", error));
  }, [keyword]);

  return (
    <>
      <Search handleSearch={handleSearch} />
      <CuisineList cuisines={cuisines} />
    </>
  );
}
