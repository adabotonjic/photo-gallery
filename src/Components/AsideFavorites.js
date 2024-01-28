import React from "react";
import { NavLink } from "../Components/StyledComponents";
import { ButtonClear } from "../Components/StyledComponents";
import ArrowRight from "./IconsSvg.js/ArrowRight";
import HomeIcon from "./IconsSvg.js/HomeIcon";



const AsideFavorites = ({favorites, clearFavorites}) => {
    return (
        <div className="inner-content">
        <h2 className="h2">Your favorite images <span >({favorites.length})</span></h2>
        
        {favorites.length !== 0 ? (
            <div className="mt-3 mb-4">
            <ButtonClear onClick={clearFavorites}>Clear all favorites</ButtonClear>
            </div>
        ) : (
            <div className="mt-3 mb-4"></div>
        )}
        <hr></hr>
        <NavLink to="/" title="Homepage">
            <HomeIcon />
            <span>Homepage</span>
            <ArrowRight />
        </NavLink>


        </div>
    )
}
export default AsideFavorites;