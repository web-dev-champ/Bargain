import React from "react";
import "./style.css";
import Navi2 from "./Navi2";



export default function Navi()
{
    return(
        <nav className="navbody">
            <h1 className="logotext">Bargain</h1>
            <ul class="nav-links">
                <li class="nav-items"><a href="#">Home</a></li>
                <li class="nav-items"><a href="#">Hot Deals</a></li>
                <li class="nav-items"><a href="#">Categories</a></li>
                <li class="nav-items"><a href="#">Smartphones</a></li>
            </ul>
            <Navi2 />
        </nav>
    )
}