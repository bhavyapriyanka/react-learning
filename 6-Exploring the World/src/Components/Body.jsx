import RestaurantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "../Shimmer";

const Body = () => {
  const [listofRestaurants, setListOfRestaurants] = useState([]);
  const [filteredResturant, setFilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4941645&lng=78.4037742&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setFilteredResturant(restaurants);
  };
  // Conditional rendering : Render shimmer effect while data is loading
  if (listofRestaurants.length === 0) {
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
            <RestaurantCard
              key={restaurant?.info?.id} // ✅ fallback if id is missing
              resData={restaurant}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Body;
