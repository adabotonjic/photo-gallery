import React from "react";
import { NavLink } from "../Components/StyledComponents";
import { ButtonClear } from "../Components/StyledComponents";


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
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32" id="home">
            <path fill="var(--color-red)" d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
            </svg>
            <span>Homepage</span>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
            <path fill="var(--color-red)" d="M16.031 11.016v-3l3.984 3.984-3.984 3.984v-3h-12.047v-1.969h12.047z"></path>
            </svg>
        </NavLink>


        </div>
    )
}
export default AsideFavorites;