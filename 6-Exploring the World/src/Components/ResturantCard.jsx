import { CDN_URL } from "../../utils/constants";
import { resturantsList } from "./Body";
const RestaurantCard = (props) => {
  const { resData } = props;

  // Destructuring the props object to extract resData
  const { resName, cuisine, rating, deliveryTime, imgUrl } = resData;
  return (
    <div className="res-card">
      <div>
        <img
          className="card-img"
          src={CDN_URL + resData?.info?.cloudinaryImageId}
        />
        <div className="card-title">
          <h3>{resData?.info?.name}</h3>
          <h4>{resData?.info?.cuisines}</h4>
          <h4>{resData?.info?.avgRating}⭐</h4>
          <h4>{resData?.info?.sla?.deliveryTime}</h4>
        </div>
      </div>
    </div>
  );
};
export default RestaurantCard;
