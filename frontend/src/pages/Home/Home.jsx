import React from "react";
import Header from "../../components/Header/Header";
import "./Home.css";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import { useState } from "react";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";
const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      {/* this mounts your header */}
    </div>
  );
};

export default Home;
