// import React, { useEffect, useState } from "react";
// import Shimmer from "../Shimmer";
// import { CDN_URL } from "../../utils/constants";

// const ResturantMenu = () => {
//   const [resInfo, setResInfo] = useState(null);
//   console.log(resInfo);

//   useEffect(() => {
//     fetchMenu();
//   }, []);

//   const fetchMenu = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4941645&lng=78.4037742&restaurantId=447828&catalog_qa=undefined&submitAction=ENTER"
//     );
//     const json = await data.json();
//     setResInfo(json.data);
//   };

//   const { cards } = resInfo || {};

//   const { text } = cards[0]?.card?.card || {};

//   const { cloudinaryImageId, costForTwoMessage, avgRating } =
//     cards[2]?.card?.card?.info || {};

//   const { title, itemCards } =
//     cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};

//   //   if (resInfo === null) {
//   //     return <Shimmer />;
//   //   }
//   return resInfo == null ? (
//     <Shimmer />
//   ) : (
//     <div>
//       <h1>{text}</h1>
//       <h1>Restaurant Menu</h1>

//       <img src={CDN_URL + cloudinaryImageId} alt="restaurant" />

//       <h2>{title}</h2>

//       <p>
//         {costForTwoMessage} - Avg Rating - {avgRating}
//       </p>

//       <ul>
//         {itemCards?.map((a) => (
//           <li key={a?.card?.info?.id}>{a?.card?.info?.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };
// export default ResturantMenu;

import React, { useEffect, useState } from "react";
import Shimmer from "../Shimmer";
import { CDN_URL, MENU_API } from "../../utils/constants";
import "./ResturantMenu.css";
import { useParams } from "react-router";

const ResturantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { id: resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  if (!resInfo) return <Shimmer />;

  const { cards } = resInfo;
  const { text } = cards?.[0]?.card?.card || {};
  const { cloudinaryImageId, costForTwoMessage, avgRating } =
    cards?.[2]?.card?.card?.info || {};
  const { title, itemCards } =
    cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};

  return (
    <div className="menu-container">
      {/* Header */}
      <div className="menu-header">
        <h1 className="restaurant-name">{text}</h1>
        <p className="restaurant-info">
          {costForTwoMessage} • ⭐ {avgRating}
        </p>
      </div>

      {/* Restaurant image */}
      <img
        className="menu-image"
        src={CDN_URL + cloudinaryImageId}
        alt="restaurant"
      />

      {/* Menu Title */}
      <h2 className="menu-title">{title}</h2>

      {/* Menu Items */}
      <div className="menu-items">
        {itemCards?.map((a) => {
          const { id, name, description, price, defaultPrice, imageId, isVeg } =
            a?.card?.info || {};

          return (
            <div key={id} className="menu-tile">
              {/* Left side info */}
              <div className="menu-info">
                <h3 className="dish-name">
                  {isVeg ? "🟢" : "🔴"} {name}
                </h3>
                <p className="dish-price">₹{(price || defaultPrice) / 100}</p>
                {description && <p className="dish-desc">{description}</p>}
              </div>

              {/* Right side image + button */}
              <div className="menu-right">
                {imageId && (
                  <img
                    className="dish-img"
                    src={CDN_URL + imageId}
                    alt={name}
                  />
                )}
                <button className="add-btn">ADD</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ResturantMenu;
