// import {  useEffect, useState, useContext } from "react";
// import { restrautList } from "./contants";
// import RestrauntCard from "./RestrauntCard";
// import Shimmer from "./Shimmer";
// import UserContext from "./Context";

// import {Link} from "react-router";


// function filterData(searchText,restaurants) {
//     const filterData =restaurants.filter((restaurant) =>
//         restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase() )
// );
// return filterData;
// }


// const Body = () => {
   
//   const [allRestaurants,setAllRestaurants] = useState([])
// const [filteredRestaurants,setFilteredRestaurants] = useState([])
//     const [searchText,setSearchText] = useState("")
//     const {user} = useContext(UserContext)

// useEffect(() => {
//   getRestaurants()
// }, []);

// async function getRestaurants() {
//   const data = await fetch(
//     "https://foodfire.onrender.com/api/restaurants?lat=17.771678&lng=83.245248&page_type=DESKTOP_WEB_LISTING"
//   );
//   const json = await data.json();
//   console.log(json);
//   setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.
//     infoWithStyle?.restaurants);
//     setFilteredRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.
//       infoWithStyle?.restaurants)
//   // setRestaurants(json.data);
// }
// if (filteredRestaurants?.length == 0){
//   // return(
//   //   // <h1>No restaurant Found </h1>
//   // )
// }


//     return (allRestaurants?.length === 0 ) ? <Shimmer/> :(
//          <>
//          <div className="search-container">
//           <input type="text"
//           className="search-input"
//           placeholder="Search"
//           value={searchText}
//           onChange={(e) => { 
//             setSearchText(e.target.value);
//           }}
//            />
// <button className="search-btn" 
// onClick={() => {
//   const data =  filterData(searchText,allRestaurants); 
//   setFilteredRestaurants(data) ;
// }}
// >
//      Search</button>
//          </div>
//        <div className="restaurant-list">
//        {filteredRestaurants.map((restaurant) => {
//         return(
//         <Link to={"/restaurant/" + restaurant.info.id}
//         key={restaurant.info.id}> <RestrauntCard {...restaurant.info}  /></Link>
//         );
//        })}
     
       
       


        
//        </div>
//        </>
//     );
// };
// export default Body;













import { useEffect, useState, useContext } from "react";
import { restrautList } from "./contants";
import RestrauntCard from "./RestrauntCard";
import Shimmer from "./Shimmer";
import UserContext from "./Context";


import { Link} from "react-router";


function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterData;
};



const Body = () => {

  

  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  const { user } = useContext(UserContext);

  

  useEffect(() => {
    getRestaurants();
  }, []);
 

  async function getRestaurants() {
    const data = await fetch(
      // "https://foodfire.onrender.com/api/restaurants?lat=20.5937&lng=78.9629&page_type=DESKTOP_WEB_LISTING"

    "  https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json.data)


  


    const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    // Check if restaurants is an array before setting state
    if (Array.isArray(restaurants)) {
      setAllRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    }
  }

  // Render shimmer if the restaurants data is still loading
  if (allRestaurants?.length === 0) {
    return <Shimmer />;
  }

  // Render if restaurants exist and filteredRestaurants is an array
  return (
    <>
    {/* <LocationMap lat={location?.lat || 20.5937} lng={location?.lng || 78.9629} /> */}
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="restaurant-list">
        {Array.isArray(filteredRestaurants) && filteredRestaurants.length > 0 ? (
          filteredRestaurants.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant.info.id} key={restaurant.info.id}>
                <RestrauntCard {...restaurant.info} />
              </Link>
            );
          })
        ) : (
          <h1>No restaurants found</h1> // Handle no results for filtered search
        )}
      </div>
    </>
  );
};

export default Body;
