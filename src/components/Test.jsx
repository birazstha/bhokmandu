import { defer, useLoaderData, useNavigate } from "react-router-dom";
import { foodList, loadCuisines } from "../api";
import CuisineList from "../pages/Cuisine/CuisineList";
import Search from "./ui/Search";
import { useEffect, useState } from "react";
import { debounce } from "lodash";
import { Loader, InputGroup, AutoComplete } from "rsuite";
import SearchIcon from "@rsuite/icons/Search";

export default function Home(params) {
  const data = [
    "Eugenia",
    "Bryan",
    "Linda",
    "Nancy",
    "Lloyd",
    "Alice",
    "Julia",
    "Albert",
    "Louisa",
    "Lester",
    "Lola",
    "Lydia",
    "Hal",
    "Hannah",
    "Harriet",
    "Hattie",
    "Hazel",
    "Hilda",
  ];

  const navigate = useNavigate();
  const [cuisines, setCuisines] = useState([]); // Initialize state for cuisines
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [autoCompleteData, setAutoCompleteData] = useState([]);

  const { foodList } = useLoaderData();
  const handleSearch = debounce((event) => {
    let enteredKeyword = event.target.value;
    setKeyword(enteredKeyword);
    navigate(`/?keyword=${enteredKeyword}`);
  });

  useEffect(() => {
    // Handle the promise and update the state once resolved
    foodList
      .then((data) => {
        const titles = data.map((food) => food);
        setAutoCompleteData(titles);
      })
      .catch((error) => {
        console.error("Error loading food list:", error);
      });
  }, [foodList]);

  useEffect(() => {
    setLoading(true);
    loadCuisines(keyword)
      .then((data) => setCuisines(data))
      .catch((error) => console.error("Error loading cuisines:", error))
      .finally(() => setLoading(false));
  }, [keyword]);

  return (
    <>
      <InputGroup className="mb-4">
        <AutoComplete data={autoCompleteData} />
        <InputGroup.Button tabIndex={-1}>
          <SearchIcon />
        </InputGroup.Button>
      </InputGroup>

      {/* <Search handleSearch={handleSearch} /> */}
      {loading ? (
        <Loader center vertical content="Searching.." size="lg"></Loader>
      ) : (
        <CuisineList cuisines={cuisines} />
      )}
    </>
  );
}

const foodLoader = async () => {
  try {
    const foods = await foodList();
    console.log("Fetched foods:", foods); // Log the data
    return foods;
  } catch (error) {
    console.error("Error fetching cuisine lists:", error);
  }
};

export const foodListLoader = () => {
  return defer({
    foodList: foodLoader(),
  });
};
