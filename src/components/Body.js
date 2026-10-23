import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
    // Local State Variable - Super powerful variable.
    const [Restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestarants] = useState([]);

    // Whenever state variables update, react triggers a reconciliation cycle (re-renders the component).

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://proxy.corsfix.com/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
            );
            const json = await data.json();
            console.log(json, "This is the data fetched");

            // Optional Chaining
            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            
            setRestaurants(restaurants);
            setFilteredRestarants(restaurants);
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <main className="body" id="home">
            <section className="intro">
                <div className="intro-content">
                    <p className="eyebrow">GOOD FOOD, GOOD MOOD</p>
                    <h1>
                        Find a little more <span>delicious.</span>
                    </h1>
                    <p className="intro-copy">
                        Your next favorite meal could be just around the corner.
                    </p>
                    <div className="intro-actions">
                        <button
                            className="btn-top-rated"
                            onClick={() => {
                                setRestaurants(
                                    Restaurants.filter((res) => res.info.avgRating > 4.3),
                                    console.log(Restaurants.filter((res) => res.info.avgRating) )
                                );
                            }}
                        >
                            <span aria-hidden="true">★</span> Top rated
                        </button>
                        <a className="intro-browse" href="#restaurants">
                            Explore restaurants <span aria-hidden="true">&#8595;</span>
                        </a>
                    </div>
                </div>
                <div className="intro-visual">
                    <img
                        src="https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=1200&q=85"
                        alt="A fresh, colorful meal with vegetables and herbs"
                    />
                    <div className="intro-photo-note">
                        <span>GOOD THINGS ARE COOKING</span>
                        <strong>Find your next favorite</strong>
                    </div>
                </div>
            </section>
            <div className="section-heading" id="restaurants">
                <div>
                    <p className="eyebrow">CURATED FOR YOU</p>
                    <h2>Popular near you</h2>
                </div>
                <label className="search-box">
                    <span className="search-icon" aria-hidden="true">
                        ⌕
                    </span>
                    <input
                        onChange={(e) => {
                            setSearchText(e.target.value);
                            console.log(e.target.value);
                        }}
                        value={searchText}
                        type="search"
                        placeholder="Search restaurants or cuisines"
                        aria-label="Search restaurants or cuisines"
                    />
                    <button
                        onClick={() => {
                            // Filter the restuaruant card & UI
                            setFilteredRestarants(Restaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())))
                            console.log("Button Clicked!");
                        }}
                        className="search-submit"
                        type="button"
                    >
                        Search
                    </button>
                </label>
            </div>
            <div className="body-container">
                {isLoading ? (
                    <Shimmer />
                ) : (
                    filteredRestaurants.map((res) => (
                        <RestaurantCard key={res.info.id} resData={res} />
                    ))
                )}
            </div>
        </main>
    );
};

export default Body;
