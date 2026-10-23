import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch("https://proxy.corsfix.com/?https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId=50467&query=Dessert&submitAction=ENTER&source=collection");
        const json = await data.json();
        setResInfo(json.data);
    };

    // const { name, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info ?? {};

    // const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card ?? {};
    // const dataDetails = resInfo?.cards[2]?.card?.card?.info ?? {};
    // console.log(dataDetails);
    return resInfo === null ? (
        <Shimmer />
    ) : (
        <div className="menu">
            <h1>hi</h1>
            <ul>
                {/* {itemCards.map(item => <li>{item.card.info.name} - {item.card.info.price}</li>)} */}
               
            </ul>
        </div>
    )
}

export default RestaurantMenu;