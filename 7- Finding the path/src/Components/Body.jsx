import RestaurantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "../Shimmer";
import { FETCH_URL } from "../../utils/constants";
import { Link } from "react-router";

const Body = () => {
  const [listofRestaurants, setListOfRestaurants] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(FETCH_URL);
    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setFilteredResturant(restaurants);
  };
  // Conditional rendering : Render shimmer effect while data is loading
  if (listofRestaurants?.length === 0) {
    return <Shimmer />; // Show shimmer effect while loading data
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            onClick={() => {
              console.log(searchText);

              let filteredResturant = listofRestaurants.filter((res) =>
                res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredResturant(filteredResturant);
            }}
          >
            {" "}
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.info.avgRating > 4
            );
            setFilteredResturant(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {filteredResturant.map((restaurant) => {
          // console.log(restaurant?.info?.id); // ✅ log separately

          return (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              {" "}
              <RestaurantCard
                // ✅ fallback if id is missing
                resData={restaurant}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
