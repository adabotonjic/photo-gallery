import React, {useEffect, useState} from "react";
import { NavLink } from "../Components/StyledComponents";
import { MobFavLink } from "../Components/StyledComponents";
import {Form} from '../Components/StyledComponents';
import HeartIcon from "./IconsSvg.js/Heart";
import ArrowRight from "./IconsSvg.js/ArrowRight";
import MobHeart from "./IconsSvg.js/MobHeart";


const AsideHome = ({keyword, favorites, handleSubmit, inputValue, handleInputChange}) => {

    const [scrollPos, setScrollPos] = useState(0);
    const isScrolled = scrollPos > 50;

    useEffect(() => {
        function handleScroll() {
        const currentScrollPos = window.scrollY;
        setScrollPos(currentScrollPos);
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
                       
    <div className={`inner-content ${isScrolled ? 'scrolled' : ''}`}>
            
        <h2 className="text-uppercase"><strong>{keyword.toUpperCase()} images</strong></h2>
        
            <Form onSubmit={handleSubmit}>
                <label htmlFor="subredditInput" className="fontSmall"><b>Search for a different subreddit</b></label>
                <div className="input-btn">
                    <input 
                    id="subredditInput"
                    type="text" 
                    value={inputValue} 
                    onChange={handleInputChange} 
                    placeholder="es. dogpictures"
                    />
                    <button type="submit">Search</button>
                </div>
            </Form>
            <hr></hr>

            <NavLink to="/favorites" title="Favorites">
    
                <HeartIcon />
                <span>Favorites</span>
                <span className="fav-counter">({favorites.length})</span>
                <ArrowRight />

            </NavLink>

    
            <MobFavLink 
                to="/favorites" 
                title="Favorites"
                className={isScrolled ? 'scrolled' : ''}
                >
                <MobHeart />
                <span className="fontSmall">{favorites.length}</span>
            </MobFavLink>
           
            
        </div>
    )
}
export default AsideHome