import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {
    const { name, avgRating, cuisines, cloudinaryImageId, locality, areaName, aggregatedDiscountInfoV3 } = resData.info;
    return (
        <div className="res-card">
            <img className="res-card-image" src={ CDN_URL + cloudinaryImageId }/>
            <h3 className="res-price">{aggregatedDiscountInfoV3.header + " " + aggregatedDiscountInfoV3.subHeader}</h3>
            <h3 className="res-name">{name}</h3>
            <h4 className="res-rating">{avgRating}</h4>
            <h4 className="res-item">{cuisines.join(", ")}</h4>
            <h4 className="res-address">{locality + ", " + areaName}</h4>
        </div>
    )
}

export default RestaurantCard;