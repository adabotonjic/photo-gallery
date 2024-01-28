import React from "react";
import { useLocation } from "react-router-dom";
import AsideHome from "../Components/AsideHome";
import AsideFavorites from "../Components/AsideFavorites";
import Home from "../Pages/Home";
import FavoritesPage from "../Pages/Home";
import NotFound from "../Pages/404";
import usePageClass from "../Hooks/usePageClass";




const Main = ({keyword, inputValue, handleSubmit, handleInputChange, addToFavorites, removeFromFavorites, favorites, clearFavorites}) => {
    usePageClass();
    const location = useLocation();

    const asideContent = () => {
        switch (location.pathname) {
            case '/':
                return (
                    <AsideHome 
                        keyword={keyword} 
                        favorites={favorites} 
                        inputValue={inputValue} 
                        handleSubmit={handleSubmit} 
                        handleInputChange={handleInputChange}
                    />
                );
            case '/favorites':
                return (
                    <AsideFavorites 
                        favorites={favorites} 
                        clearFavorites={clearFavorites} 
                    />
                );
            default:
                return (
                    <AsideFavorites 
                        favorites={favorites} 
                        clearFavorites={clearFavorites} 
                    />
                );
        }
    };

    const mainContent = () => {
        switch (location.pathname) {
            case '/':
                return (
                    <Home 
                    keyword={keyword} 
                    addToFavorites={addToFavorites} 
                    removeFromFavorites={removeFromFavorites} 
                    favorites={favorites}
                />
                );
            case '/favorites':
                return (
                    <FavoritesPage 
                    favorites={favorites} 
                    removeFromFavorites={removeFromFavorites}
                />
                );
    
            default:
                return (<NotFound />)
        }
    }
    

    return (
        <>
        <main className="page-content mb-4">
            <div className='container'>
                <div className="flexContainer mt-3">
                <aside className="sidebar">
                    {asideContent()}
                 
                    </aside>
                    
                    <div className="main-content ">
                    {mainContent()}
                    </div>
                </div>
            </div>
        </main>
        </>
    )
};

export default Main;