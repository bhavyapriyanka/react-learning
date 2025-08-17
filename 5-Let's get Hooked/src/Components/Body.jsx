import RestaurantCard from "./ResturantCard";
import resList from "../../utils/mockData";
import { useState } from "react";
// State variable in React : used to store data that can change over time
// useState is a React Hook that lets you add state to functional components
// const [stateVariable, functionToUpdateState] = useState(initialValue);

//nomal variable in React
// export let resturantsList = [
//   {
//     id: "292360",
//     name: "Raju Gari Biryani",
//     cloudinaryImageId:
//       "FOOD_CATALOG/IMAGES/CMS/2025/2/19/797c12af-4ec2-404b-a64f-65d344947e4a_5f697aa5-7590-417e-8ae0-a231fc8fadd2.jpeg",
//     locality: "Nizampet & Pragathi Nagar",
//     areaName: "Kukatpally",
//     costForTwo: "₹200 for two",
//     cuisines: ["Biryani", "Snacks", "Chinese", "Mughlai"],
//     avgRating: 3.8,
//     sla: {
//       deliveryTime: 16,
//     },
//   },
//   {
//     id: "121603",
//     name: "Meghana Foods",
//     cloudinaryImageId:
//       "FOOD_CATALOG/IMAGES/CMS/2024/10/9/314c4e34-0188-4d84-b7e1-90085a8d0634_e21c30e9-8eb7-4605-bf80-275ba966f768.JPG",
//     locality: "SR Nagar",
//     areaName: "Ameerpet",
//     costForTwo: "₹500 for two",
//     cuisines: ["Biryani", "North Indian", "Andhra"],
//     avgRating: 4.5,
//     sla: {
//       deliveryTime: 28,
//     },
//   },
//   {
//     id: "254123",
//     name: "KFC",
//     cloudinaryImageId: "x4uyxvihmg8qa3pddkgf",
//     locality: "Forum Mall",
//     areaName: "KPHB",
//     costForTwo: "₹400 for two",
//     cuisines: ["Burgers", "Fast Food", "Snacks"],
//     avgRating: 4.2,
//     sla: {
//       deliveryTime: 25,
//     },
//   },
//   {
//     id: "158976",
//     name: "Domino's Pizza",
//     cloudinaryImageId: "mwz1fkhx6rjtlvj1vx7g",
//     locality: "Miyapur",
//     areaName: "Miyapur",
//     costForTwo: "₹350 for two",
//     cuisines: ["Pizzas", "Italian", "Pastas"],
//     avgRating: 4.1,
//     sla: {
//       deliveryTime: 22,
//     },
//   },
// ];

const Body = () => {
  const [listofRestaurants, setListOfRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (res) => res.card.card.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Filter Button
        </button>
      </div>
      <div className="res-container">
        {listofRestaurants.map((restaurant) => {
          return (
            <RestaurantCard
              key={restaurant.card.card.info.id}
              resData={restaurant}
            />
          );
        })}
        {/* {resturantsList.map((restaurant) => {
          return <RestaurantCard key={restaurant.id} resData={restaurant} />;
        })} */}
      </div>
    </div>
  );
};
export default Body;
