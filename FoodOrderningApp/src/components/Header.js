import { LOGO } from "../utils/constants";
import { useState } from "react";
import {Link} from "react-router";
const Header=()=>{
    const [logButton,setlogButton]=useState("Login");
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO}/>
                </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>{logButton==="Login"?setlogButton("Logout"):setlogButton("Login")}}>{logButton}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;