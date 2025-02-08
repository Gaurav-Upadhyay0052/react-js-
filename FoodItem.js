// import { IMG_CDN_URL } from "./contants";

// const FoodItem = ({ 
//     name ,
//     description,
//     defaultPrice
// ,
//     imageId,
//     }) => {

//     return(
//         <div className="Card">
//             <img src={
//              IMG_CDN_URL+imageId
//             }/>
//             <h2>{name}</h2>
            
//             <h4>{description}  </h4>
           
//             <h5>{defaultPrice} </h5>
           
           
//         </div>
//     );
// };
// export default FoodItem;  

// FoodItem.js
import { IMG_CDN_URL } from "./contants";

const FoodItem = ({
  name,
  description,

  imageId,
  price
 
}) => {
  return (
    <div className="Card-info">
      <img src={IMG_CDN_URL + imageId} alt={name} />
      <h2>{name}</h2>
      <h4>{description}</h4>

      <h5>Rs {price / 100}</h5>
      
    </div>
  );
};

export default FoodItem;




  