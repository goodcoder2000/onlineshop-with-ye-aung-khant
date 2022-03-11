import React from "react";
import { FcPaid } from "react-icons/fc";
import '../index.css';

const Nav = () =>{
    return(
        <div className="nav">
            <h1>Let's Shop Now</h1>

            <div>
                <a href="/" className="menuBtn">Menu</a>
                <a href='/basktet'>
                    <FcPaid size={40} />
                </a>
            </div>
        </div>
    )
}
export default Nav;