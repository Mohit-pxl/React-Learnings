import resList from "../utils/mockdata";
import { CDN_URL } from "../utils/constants";

const ResCard=(props)=>{
    const {resData}=props;
    const {id,cloudinaryImageId,name,cuisines,costForTwo,areaName,avgRating}=resData?.info
    return(
        <div className="res-card">
            <img className="res-logo" src= {CDN_URL+cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h5>{costForTwo}</h5>
            <h5>{avgRating}</h5>
            <h5>{areaName}</h5>
        </div>
    )

}

export default ResCard;