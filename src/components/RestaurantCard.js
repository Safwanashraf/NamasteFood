import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({resData}) => {
    const { name, avgRating, cuisines, cloudinaryImageId, locality, areaName, aggregatedDiscountInfoV3 } = resData.info;
    return (
        <article className="res-card">
            <img className="res-card-image" src={ CDN_URL + cloudinaryImageId } alt={name} />
            {/* <h3 className="res-price">{aggregatedDiscountInfoV3.header + " " + aggregatedDiscountInfoV3.subHeader}</h3> */}
            <div className="res-title-row"><h3 className="res-name">{name}</h3><span className="res-rating"><span aria-hidden="true">★</span> {avgRating}</span></div>
            <p className="res-item">{cuisines.join(", ")}</p>
            <p className="res-address"><span aria-hidden="true">⌖</span> {locality + ", " + areaName}</p>
        </article>
    )
}

export default RestaurantCard;
