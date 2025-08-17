import { CDN_URL } from "../../utils/constants";
import { resturantsList } from "./Body";
const RestaurantCard = (props) => {
  console.log("props", props);
  const { resData } = props;

  console.log(resData);
  // Destructuring the props object to extract resData
  const { resName, cuisine, rating, deliveryTime, imgUrl } = resData;
  return (
    <div className="res-card">
      <div>
        <img
          className="card-img"
          src={CDN_URL + props.resData.card.card.info.cloudinaryImageId}
        />
        <div className="card-title">
          <h3>{props.resData.card.card.info.name}</h3>
          <h4>{props.resData.card.card.info.cuisines}</h4>
          <h4>{props.resData.card.card.info.avgRating}⭐</h4>
          <h4>{props.resData.card.card.info.sla.deliveryTime}</h4>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;

// import { CDN_URL } from "../../utils/constants";

// const RestaurantCard = (props) => {
//   const { resData } = props;

//   // Destructure directly from resData
//   const { name, cuisines, avgRating, sla, cloudinaryImageId } = resData;

//   return (
//     <div className="res-card">
//       <img className="card-img" src={CDN_URL + cloudinaryImageId} alt={name} />
//       <div className="card-title">
//         <h3>{name}</h3>
//         <h4>{cuisines.join(", ")}</h4>
//         <h4>{avgRating} ⭐</h4>
//         <h4>{sla.deliveryTime} mins</h4>
//       </div>
//     </div>
//   );
// };

// export default RestaurantCard;
