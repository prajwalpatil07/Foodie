import { CDN_URL } from "../utils/constants";
import starIcon from "../assets/star.png";

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sla,
  } = resData?.info;

  

  return (
    <div className="ml-[30px]">
    <div
      className="m-4 p-6 w-[300px] h-[500px] rounded-lg bg-white hover:bg-gradient-to-r from-teal-200 to-lime-200 shadow shadow-zinc-900">
      <img
        className="w-full rounded-lg"
        alt="res-logo"
        src={CDN_URL
          +
          cloudinaryImageId
        }
       
      />
    
      <h3 className="font-bold py-2 text-lg">{name}</h3>
      <h4>{cuisines.join(', ')}</h4>
      <h4 className="flex items-center"><img className="p-[2px]" alt="star" src={starIcon}/>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla?.slaString}</h4>
    </div>
    </div>
  );
};

  
  
export default RestaurantCard;
