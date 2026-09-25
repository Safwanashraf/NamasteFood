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
        <main className="body" id="home">
            <section className="intro">
                <div>
                    <p className="eyebrow">GOOD FOOD, GOOD MOOD</p>
                    <h1>Find your next<br className="desktop-break" /> favorite meal.</h1>
                    <p className="intro-copy">A little something delicious is never far away.</p>
                </div>
                <button className="btn-top-rated" onClick={ () =>{
                setRestaurants(Restaurants.filter(res => res.info.avgRating > 4.3))
            }}
            ><span aria-hidden="true">★</span> Top rated</button>
            </section>
            <div className="section-heading">
                <div><p className="eyebrow">CURATED FOR YOU</p><h2>Popular near you</h2></div>
                <span className="section-note">Fresh picks from Bengaluru</span>
            </div>
            <div className="body-container">
                {isLoading
                    ? <Shimmer />
                    :
                    Restaurants.map((res) => (<RestaurantCard key={res.info.id} resData={res} />))
                }
            </div>
        </main>
    )
}

export default Body;
