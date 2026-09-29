import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
    // Local State Variable - Super powerful variable.
    const [Restaurants, setRestaurants] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [searchText, setSearchText] = useState("");
    const [filteredRestaurants, setFilteredRestarants] = useState();

    // Whenever state variables update, react triggers a reconciliation cycle (re-renders the component).

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352403&lng=77.624532&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
            );
            const json = await data.json();
            setRestaurants(
                json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                    ?.restaurants,
            );
        } finally {
            setIsLoading(false);
        }
    };


    return (
        <main className="body" id="home">
            <section className="intro">
                <div>
                    <p className="eyebrow">GOOD FOOD, GOOD MOOD</p>
                    <h1>
                        Find your next
                        <br className="desktop-break" /> favorite meal.
                    </h1>
                    <p className="intro-copy">
                        A little something delicious is never far away.
                    </p>
                </div>
                <button
                    className="btn-top-rated"
                    onClick={() => {
                        setRestaurants(
                            Restaurants.filter((res) => res.info.avgRating > 4.3),
                        );
                    }}
                >
                    <span aria-hidden="true">★</span> Top rated
                </button>
            </section>
            <div className="section-heading">
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
                        {/* <span aria-hidden="true">⌕</span>*/} Search
                    </button>
                </label>
            </div>
            <div className="body-container">
                {isLoading ? (
                    <Shimmer />
                ) : (
                    filteredRestaurants ? filteredRestaurants.map((res) => (
                        <RestaurantCard key={res.info.id} resData={res} />
                    )) :
                    Restaurants.map((res) => (
                        <RestaurantCard key={res.info.id} resData={res} />
                    ))
                )}
            </div>
        </main>
    );
};

export default Body;
