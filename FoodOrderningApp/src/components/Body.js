import ResCard from "./ResCarc";
import resList from "../utils/mockdata";
import React from "react";
import { useState } from "react";

const Body=()=>{
    const [restaurantList,setrestaurantList]=useState(resList);
    return(<div className="body">
        <div className="res-filter">
            <button onClick={()=>{
                const filteredList=restaurantList.filter((res)=>res.info.avgRating>4);
                console.log(filteredList)
                setrestaurantList(filteredList);
            }}>Top Rated Reastaurants </button>
        </div>
        <div className="res-container">
            {
                restaurantList.map((restaurant)=>(
                <ResCard key={restaurant.info.id} resData={restaurant}/>
                ))
            }
        </div>
    </div>
    )
}

export default Body;