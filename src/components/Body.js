import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData"; 
import { useEffect, useState } from "react";

const Body = () => {
    // Local State Variable - Super powerful variable.
    const [Restaurants, setRestaurants] = useState(resData);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );

        const json = await data.json();
        setRestaurants(json.data.cards);
        console.log(json);

    }

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