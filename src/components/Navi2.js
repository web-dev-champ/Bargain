import React from "react";
import "./style.css";


export default function Navi2()
{
    return(
        <div class="right-container">
            <datalist id="suggestions">
                <option>First option</option>
                <option>Second Option</option>
                <option>Third Option</option>
                <option>Fourth Option</option>
                <option>Fifth Option</option>
            </datalist>
            <input type="text" class="search-box" placeholder="Search" autoComplete="on" list="suggestions"/>
            <button class="sub-btn">Search</button>
        </div>
    )
}
