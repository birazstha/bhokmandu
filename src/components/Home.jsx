import { useNavigate, useLocation } from "react-router-dom";
import { loadCuisines } from "../api";
import CuisineList from "../pages/Cuisine/CuisineList";
import Search from "./ui/Search";
import { useEffect, useState } from "react";
import { debounce } from "lodash";

export default function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const keywordFromUrl = searchParams.get("keyword");
  const [cuisines, setCuisines] = useState([]);
  const [keyword, setKeyword] = useState(keywordFromUrl || "");

  const handleSearch = debounce((event) => {
    const enteredKeyword = event.target.value;
    setKeyword(enteredKeyword);
    navigate(`/?keyword=${enteredKeyword}`);
  }, 200);

  useEffect(() => {
    if (keywordFromUrl !== keyword) {
      setKeyword(keywordFromUrl || "");
    }
  }, [location, keywordFromUrl, keyword]);

  useEffect(() => {
    loadCuisines(keyword)
      .then((data) => {
        setCuisines(data);
      })
      .catch((error) => {
        console.error("Error loading cuisines:", error);
      });
  }, [keyword]);

  return (
    <>
      <Search handleSearch={handleSearch} value={keyword} />
      <CuisineList cuisines={cuisines} />
    </>
  );
}
