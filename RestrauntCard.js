import { IMG_CDN_URL } from "./contants";
import { useContext } from "react";
import UserContext from "./Context";
const RestrauntCard = ({ 
    name ,
    cuisines ,
    areaName ,
    avgRatingString,
    cloudinaryImageId,
    locality}) => {
   const {user} = useContext(UserContext)
    return(
        <div className="Card">
            <img src={
             IMG_CDN_URL+ cloudinaryImageId
            }/>
            <h2>{name}</h2>
            <h3 >{cuisines.join( " ,")}</h3>
            <h4>{areaName}  </h4>
            <h3>{locality}</h3>
            <h5>{user.name} -
             {user.email}</h5>
           
            <h4>{avgRatingString} star</h4>
        </div>
    );
};
export default RestrauntCard;