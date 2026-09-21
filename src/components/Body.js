import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData"; 
import { useState } from "react";

const Body = () => {

    const [Restaurants, setRestaurants] = useState(resData);
    return (
        <div className="body">
            <button className="btn-top-rated" onClick={ () =>{
                setRestaurants(Restaurants.filter(res => res.info.avgRating > 4.5))
            }}
            >Top Rated Restaurants</button>
            <h1>Top restaurant chains in Banglore</h1>
            <div className="body-container">
                {
                    Restaurants.map((res) => (<RestaurantCard key={res.info.id} resData={res} />))
                }
            </div>
        </div>
    )
}

export default Body;