import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Header
//   - Logo
//   - Nav Items
// Talk is Cheap, Show me the Code! (Namaste-React)
// Body
//   - Search
//   - Restaurant Container
//       - Restaurant Card
//          - Dish Name
//          - Image
//          - Restaurant Name
//          - Rating
//          - Cuisines
//          - Time to Deliver

// Footer
//  - Copyright
//  - Links
//  - Address
//  - Contact

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUGz0WshFYnlwlqP_fs3ErIppUvpuaYfTrZQ&s"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
  console.log("props", props);
  const { resData } = props;
  // Destructuring the props object to extract resData
  const { resName, cuisine, rating, deliveryTime, imgUrl } = resData;
  return (
    <div className="res-card">
      <div>
        <img className="card-img" src={props.resData.imgUrl}></img>
        <div className="card-title">
          <h3>{resName}</h3>
          <h4>{cuisine}</h4>
          <h4>{rating}</h4>
          <h4>{deliveryTime}</h4>
        </div>
      </div>
    </div>
  );
};
// const resObj = {
//   resName: "Meghana Foods",
//   cuisine: "Biryani, North Indian",
//   rating: "4.5",
//   deliveryTime: "30 Mins",
//   imgUrl:
//     "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/9/314c4e34-0188-4d84-b7e1-90085a8d0634_e21c30e9-8eb7-4605-bf80-275ba966f768.JPG",
// };

const resList = [
  {
    resName: "Meghana Foods",
    cuisine: "Biryani, North Indian",
    rating: "4.5",
    deliveryTime: "30 Mins",
    imgUrl:
      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/10/9/314c4e34-0188-4d84-b7e1-90085a8d0634_e21c30e9-8eb7-4605-bf80-275ba966f768.JPG",
  },
  {
    resName: "KFC",
    cuisine: "Burgers, Fast Food",
    rating: "4.2",
    deliveryTime: "25 Mins",
    imgUrl:
      "https://www.amrest.eu/sites/default/files/styles/big_hero_image/public/2024-05/kfc0.png?itok=SMeJu6gN",
  },
  {
    resName: "Domino's Pizza",
    cuisine: "Pizza, Italian",
    rating: "4.1",
    deliveryTime: "20 Mins",
    imgUrl:
      "https://b.zmtcdn.com/data/pictures/chains/7/90237/6e96bfb00b9dd20195385f866d3e0e10_featured_v2.jpg",
  },
  {
    resName: "Empire Restaurant",
    cuisine: "North Indian, Biryani, Tandoor",
    rating: "4.4",
    deliveryTime: "35 Mins",
    imgUrl:
      "https://www.licious.in/blog/wp-content/uploads/2023/01/Shutterstock_2047827035.jpg",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]} />
        <RestaurantCard resData={resList[1]} />
        <RestaurantCard resData={resList[2]} />
        <RestaurantCard resData={resList[3]} /> */}
        {/* Instead of hardcoding, we can use map function */}
        {resList.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.resName} resData={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="footer">
      <h3>© 2025 Swiggy Limited</h3>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />/
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
