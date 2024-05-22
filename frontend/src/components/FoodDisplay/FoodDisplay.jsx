import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);
  return (
    <div>
      <div className="food-display" id="food-display">
        <h2>Top Dishes Near You</h2>
        <div className="food-display-list">
          {food_list.map((item, index) => {
            if (category === "All" || category === item.category) {
              // if you select a category, it'll show all the food in that
              // category, but if you deselect, it shows ALL the dishes
              return (
                <FoodItem
                  key={index}
                  id={item._id}
                  name={item.name}
                  description={item.description}
                  price={item.price}
                  image={item.image}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default FoodDisplay;
