import { LOGO } from "../utils/constants";
import { useState } from "react";
const Header=()=>{
    const [logButton,setlogButton]=useState("Login");
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO}/>
                </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{logButton==="Login"?setlogButton("Logout"):setlogButton("Login")}}>{logButton}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;