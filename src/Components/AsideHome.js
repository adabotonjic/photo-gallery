import React, {useEffect, useState} from "react";
import { NavLink } from "../Components/StyledComponents";
import { MobFavLink } from "../Components/StyledComponents";
import {Form} from '../Components/StyledComponents';


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
    
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" id="heart">
                <path fill="var(--color-red)" d="M14 26c-0.25 0-0.5-0.094-0.688-0.281l-9.75-9.406c-0.125-0.109-3.563-3.25-3.563-7 0-4.578 2.797-7.313 7.469-7.313 2.734 0 5.297 2.156 6.531 3.375 1.234-1.219 3.797-3.375 6.531-3.375 4.672 0 7.469 2.734 7.469 7.313 0 3.75-3.437 6.891-3.578 7.031l-9.734 9.375c-0.187 0.187-0.438 0.281-0.688 0.281z"></path>
                </svg>

                <span>Favorites</span>
                <span className="fav-counter">({favorites.length})</span>
            
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="var(--color-red)" d="M16.031 11.016v-3l3.984 3.984-3.984 3.984v-3h-12.047v-1.969h12.047z"></path>
                </svg>

            </NavLink>

    
            <MobFavLink 
                to="/favorites" 
                title="Favorites"
                className={isScrolled ? 'scrolled' : ''}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
                <path fill="var(--color-red)" d="M14 26c-0.25 0-0.5-0.094-0.688-0.281l-9.75-9.406c-0.125-0.109-3.563-3.25-3.563-7 0-4.578 2.797-7.313 7.469-7.313 2.734 0 5.297 2.156 6.531 3.375 1.234-1.219 3.797-3.375 6.531-3.375 4.672 0 7.469 2.734 7.469 7.313 0 3.75-3.437 6.891-3.578 7.031l-9.734 9.375c-0.187 0.187-0.438 0.281-0.688 0.281z"></path>
                </svg>
                <span className="fontSmall">{favorites.length}</span>
            </MobFavLink>
           
            
        </div>
    )
}
export default AsideHome