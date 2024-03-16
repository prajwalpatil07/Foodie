import RestaurantCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");


  console.log("Body rendered");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
"https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.933738&lng=77.7610765&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

  
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  
    setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  const onlineStatus = useOnlineStatus();

  if(onlineStatus === false)
   return (<h1>Looks like you're offline!!! Please check your internet connetion;
   </h1>
   );

   const {loggedInUser, setUserName} = useContext(userContext);


  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body bg-gradient-to-r from-rose-100 to-teal-100">
        <div className="search p-4">
          <input
            type="text"
            className="mx-10 py-2 px-5 border border-solid border-black w-[40%] rounded-lg"
            placeholder="Search a Restaurant"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
           className="px-6 py-[10px] bg-green-200 -mx-6 rounded-lg"
            onClick={() => {

              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
          </div>
        
        
     
      <div className="flex flex-wrap">

        {filteredRestaurant.map((restaurant) => (
          <Link
        key= {restaurant.info.id} 
        to={"/restaurants/" + restaurant.info.id}
        >

            <RestaurantCard resData={restaurant}/> 
        
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
