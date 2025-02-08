import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "./src/utils/cartSlice";

const  Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

const dispatch = useDispatch();
    const handleClearCart = () =>{
        dispatch(clearCart());
    };
    const handleRemoveItem = () =>{
        dispatch(handleRemoveItem(item));
    }
    return(
    <div className="card-information">
     <h1>Cart items - {cartItems.length}</h1>
<button className="clear-btn" onClick={() => handleClearCart()}>ClearCart</button>

{/* <button
                  className="remove-btn"
                  onClick={() => handleRemoveItem(...item?.card?.info )}
                >
                  Remove
                </button> */}


     <div className="cart-info">{cartItems.map(item => <FoodItem  key={item.id}{...item?.card?.info }/>)}</div>
    
  
    
    </div>
    );
};
export default Cart; 



// Cart.js
// import { useSelector } from "react-redux";
// import FoodItem from "./FoodItem";

// const Cart = () => {
//   const cartItems = useSelector((store) => store.cart.items);

//   return (
//     <div>
//       <h1>Cart items - {cartItems.length}</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty!</p>
//       ) : (
//         cartItems.map((item, index) => (
//           <FoodItem key={index} {...item} />
//         ))
//       )}
//     </div>
//   );
// };

// export default Cart;







