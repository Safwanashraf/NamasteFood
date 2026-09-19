import RestaurantCard from "./RestaurantCard";
import resData from "../utils/mockData"; 

const Body = () => {
    return (
        <div className="body">
            <h1>Top restaurant chains in Banglore</h1>
            <div className="body-container">
                {
                    resData.map((Restaurant) => (<RestaurantCard key={Restaurant.info.id} resData={Restaurant} />))
                }
            </div>
        </div>
    )
}

export default Body;