import ResCard from "./ResCarc";
import resList from "../utils/mockdata";
import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body=()=>{
    const [restaurantList,setrestaurantList]=useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    
    useEffect(()=>{fetchdata()},[]);

    const [searchtext,setsearchtext]=useState("");
    
    const fetchdata=async ()=>{
      try {
        const response = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const json = await response.json();
        
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || 
                            json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
                            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
                            json?.data?.cards?.find(x => x?.card?.card?.gridElements?.infoWithStyle?.restaurants)?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        if (restaurants) {
            setrestaurantList(restaurants);
            setFilteredRestaurant(restaurants);
        }
      } catch (err) {
        console.error("Fetch Data Error:", err);
      }
    }

    if(restaurantList.length===0){
        return <Shimmer/>
    }

    return(
    <div className="body">
        <div className="res-filter">
            <input 
                type="text" 
                className="search-box" 
                placeholder="Search for restaurants..."
                value={searchtext} 
                onChange={(e) => setsearchtext(e.target.value)}
            />
            <button onClick={()=>{
                const filteredRes=restaurantList.filter((res)=>{
                    return res?.info?.name.toLowerCase().includes(searchtext.toLowerCase());
                });
                setFilteredRestaurant(filteredRes);
            }}>Search</button>
            <button onClick={()=>{
                const filteredList=restaurantList.filter((res)=>res.info.avgRating>4);
                setFilteredRestaurant(filteredList);
            }}>Top Rated Restaurants</button>
        </div>
        <div className="res-container">
            {
                filteredRestaurant.map((restaurant)=>(
                <ResCard key={restaurant.info.id} resData={restaurant}/>
                ))
            }
        </div>
    </div>
    )
}

export default Body;