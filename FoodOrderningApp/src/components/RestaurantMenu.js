import React from "react";
import { useParams } from "react-router";
import resList from "../utils/mockdata";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = resList.find((res) => res?.info?.id === resId);

  if (!restaurant) return <Shimmer />;

  const { name, cuisines, areaName, costForTwo, avgRating, locality } =
    restaurant.info;

  return (
    <div className="resMenu">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{areaName}</h4>
      <h4>{locality}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars</h4>
    </div>
  );
};

export default RestaurantMenu;
