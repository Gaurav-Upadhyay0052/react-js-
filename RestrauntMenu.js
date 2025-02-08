// import { useEffect, useState } from "react";
// import { useParams } from "react-router";
// import { IMG_CDN_URL } from "./contants";

// const RestaurantMenu = () =>{
//     const params = useParams();
//     const {id} = params;
 

//     const [restaurant,setRestaurant]=useState({});

//     useEffect(() =>{
//         getRestaurantInfo();
//     }, []);
//     async function getRestaurantInfo() {
//         const data = await fetch("https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=72605");
//         const json =await data.json();
//         console.log(json.data)
//         setRestaurant(json.data)

//     }
   
//     return(
//         <div>
//              <h1>Restraunt id: {id}</h1>  
//                 <h2>{restaurant?.cards?.[0]?.card?.card?.text}</h2>  
          
//            <img src ={IMG_CDN_URL + restaurant.cards?.[2].card.card.info.cloudinaryImageId} /> 
//            <h2>{restaurant.cards?.[2].card.card.info.costForTwoMessage}</h2>  
//            <h2>{restaurant.cards?.[2].card.card.info.areaName
// }</h2> 
//             <h2>{restaurant.cards?.[2].card.card.info.avgRating} Star</h2>   

//               <div>{console.log( (restaurant.data?.cards?.card?.card?.name))}  
//              <h1>Menu</h1> 
//             <ul>
//             {
//                   (restaurant.cards?.[4].groupedCard?.cardGroupMap?.REGULAR?.cards)?.map((card)=><li>{card?.[2]?.card?.card?.itemCards?.card?.info?.name}</li>)
//             }
//             </ul> 
//             </div>   

           
//         </div>
//     );
// }

//     export default RestaurantMenu ;

import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { IMG_CDN_URL } from "./contants";
import Shimmer from "./Shimmer";
import { addItem } from "./src/utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const params = useParams();
  const { id } = params;

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      "https://foodfire.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=21.1702401&lng=72.83106070000001&&submitAction=ENTER&restaurantId=" + id
    );
    const json = await data.json();
    console.log(json.data); // Log to inspect data structure
    setRestaurant(json.data);
  }

  const dispatch = useDispatch();

  const addFoodItem = (item) => {
    dispatch(addItem(item))
  }



  return (!restaurant) ?<Shimmer/> :(
    <div>
      <h1>Restaurant id: {id}</h1>
      <h2>{restaurant?.cards?.[0]?.card?.card?.text}</h2>

      <img
        src={
          IMG_CDN_URL +
          restaurant?.cards?.[2]?.card?.card?.info?.cloudinaryImageId
        }
        alt="Restaurant Image"
      />
      <h2>{restaurant?.cards?.[2]?.card?.card?.info?.costForTwoMessage}</h2>
      <h2>{restaurant?.cards?.[2]?.card?.card?.info?.areaName}</h2>
      <h2>{restaurant?.cards?.[2]?.card?.card?.info?.avgRating} Star</h2>

    
      <div className="menu">
        <h1>Menu</h1>
        <ul>
          {
           
            restaurant?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
              ? restaurant?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.map(
                  (card, index) => (
                    <li key={index}>
                      {card?.card?.card?.itemCards?.map((item, idx) => (
                        <div key={idx}>
                          <h3>{item?.card?.info?.name} - <button className="add-btn" onClick={() => addFoodItem(item)}>
                          Add</button></h3>
                          <img
        src={
          IMG_CDN_URL +
          item?.card?.info?.
imageId

        }
        alt="Menu Image"
        />
                          
                          <p>{item?.card?.info?.price} INR</p>
                        </div>
                      ))}
                    </li>
                  )
                )
              : "No menu items available"}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;

