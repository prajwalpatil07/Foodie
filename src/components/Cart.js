import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
 
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
     <div className="h-screen bg-gradient-to-r from-rose-100 to-teal-100">
  <div className="text-center p-4 bg-gradient-to-r from-rose-100 to-teal-100">
    <h1 className="text-2xl font-bold">Cart</h1>
   <div className="w-6/12 m-auto">
    <button className="p-2 m-2 bg-black text-white rounded-lg"
    onClick={handleClearCart}
    >
      Clear Cart
    </button>
    {cartItems.length === 0 && 
    <h1>Your cart is empty! You can go to home page to view more restaurants.</h1>}
    <ItemList items={cartItems}/>
   </div>
    </div>
    </div>
    );
};

export default Cart;

