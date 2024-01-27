import React,{ useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {Form} from '../Components/StyledComponents';
import { ButtonClear } from "../Components/StyledComponents";
import { NavLink } from "../Components/StyledComponents";



const Main = ({children, keyword, inputValue, handleSubmit, handleInputChange, addToFavorites, removeFromFavorites, favorites, clearFavorites}) => {

    const location = useLocation();

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

    const asideContent = () => {
        switch (location.pathname) {
            case '/':
                return (
                    // Content for Home page
                    <div className={`inner-content ${isScrolled ? 'scrolled' : ''}`}>
                        
                            <h2><strong>{keyword.toUpperCase()} IMAGES</strong> </h2>
                      
                       
                        <p className="fontSmall">Search for a different subreddit</p>
                        <Form onSubmit={handleSubmit}>
                            <input 
                            type="text" 
                            value={inputValue} 
                            onChange={handleInputChange} 
                            placeholder="es. dogpictures"
                            />
                            <button type="submit">Search</button>
                        </Form>
                        <hr></hr>
                        <NavLink to="/favorites" title="Favorites">
                  
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 28 28" id="heart">
                            <path fill="#800" d="M14 26c-0.25 0-0.5-0.094-0.688-0.281l-9.75-9.406c-0.125-0.109-3.563-3.25-3.563-7 0-4.578 2.797-7.313 7.469-7.313 2.734 0 5.297 2.156 6.531 3.375 1.234-1.219 3.797-3.375 6.531-3.375 4.672 0 7.469 2.734 7.469 7.313 0 3.75-3.437 6.891-3.578 7.031l-9.734 9.375c-0.187 0.187-0.438 0.281-0.688 0.281z"></path>
                            </svg>

                            <span>Favorites</span>
                            <span className="fav-counter">({favorites.length})</span>
                          
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                            <path fill="#800" d="M16.031 11.016v-3l3.984 3.984-3.984 3.984v-3h-12.047v-1.969h12.047z"></path>
                            </svg>

                        </NavLink>
                        
                    </div>
                );
            case '/favorites':
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
                        <path fill="#800" d="M32 18.451l-16-12.42-16 12.42v-5.064l16-12.42 16 12.42zM28 18v12h-8v-8h-8v8h-8v-12l12-9z"></path>
                        </svg>
                        <span>Homepage</span>
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                        <path fill="#800" d="M16.031 11.016v-3l3.984 3.984-3.984 3.984v-3h-12.047v-1.969h12.047z"></path>
                        </svg>
                    </NavLink>
        
           
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <>
        <main className="page-content mb-4">
            <div className='container'>
                <div className="flexContainer mt-3">
                <aside className="sidebar">
                    {asideContent()}
                 
                    </aside>
                    
                    <div className="main-content">
                    {React.cloneElement(children, { addToFavorites, removeFromFavorites, favorites })}
                    </div>
                </div>
            </div>
        </main>
        </>
    )
};

export default Main;