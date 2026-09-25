import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import resData from "../utils/mockData"; 
import { useEffect, useState } from "react";

const Body = () => {
    // Local State Variable - Super powerful variable.
    const [Restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
            );
            const json = await data.json();
            setRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        } finally {
            setIsLoading(false);
        }

    }

    return (
        <div className="body">
            <button className="btn-top-rated" onClick={ () =>{
                setRestaurants(Restaurants.filter(res => res.info.avgRating > 4.5))
            }}
            >Top Rated Restaurants</button>
            <h1>Top restaurant chains in Banglore</h1>
            <div className="body-container">
                {isLoading
                    ? <Shimmer />
                    :
                    Restaurants.map((res) => (<RestaurantCard key={res.info.id} resData={res} />))
                }
            </div>
        </div>
    )
}

export default Body;
