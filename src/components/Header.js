import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom"; 
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";
import FoodieIcon from "../assets/foodie.svg";

export const Header = () => {


const [btnNameReact, setBtnNameReact] = useState("Login");

const onlineStatus = useOnlineStatus();

const {loggedInUser} = useContext(userContext);

const cartItems = useSelector((store) => store.cart.items);

  return (
    
    <div className="flex justify-between bg-gradient-to-r from-rose-100 to-teal-100 sticky top-0">
      <Link to="/">
      <div className="logo-container">
        <img className="w-24 p-2" alt="logo"
          src= {FoodieIcon}/>
      </div>
      </Link>
      <div className="flex items-center">
        <ul className="flex p-1 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴" }

          </li>
          <li className="px-4"><Link to ="/">Home</Link></li>
          <li className="px-4"><Link to ="/about">About Us</Link></li>
          <li className="px-4"><Link to ="/contact">Contact Us</Link></li>
          <li className="px-4"><Link to ="/grocery">Grocery</Link></li>

          <li className="px-3 font-bold border bg-green-400 shadow shadow-black rounded-lg">
          <Link to ="/cart">🛒{cartItems.length}</Link>
            </li>
          <button
           className="login px-3"
           onClick={()=> {
          btnNameReact === "Login"
          ? setBtnNameReact ("Logout")
          : setBtnNameReact ("Login");
          console.log(btnNameReact);
         }}
         >
          {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;