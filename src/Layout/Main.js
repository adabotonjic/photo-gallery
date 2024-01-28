import React from "react";
import { useLocation } from "react-router-dom";
import AsideHome from "../Components/AsideHome";
import AsideFavorites from "../Components/AsideFavorites";
import usePageClass from "../Hooks/usePageClass";




const Main = ({children, keyword, inputValue, handleSubmit, handleInputChange, addToFavorites, removeFromFavorites, favorites, clearFavorites}) => {
    usePageClass()
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
                    
                    <div className="main-content ">
                    {React.cloneElement(children, { addToFavorites, removeFromFavorites, favorites })}
                    </div>
                </div>
            </div>
        </main>
        </>
    )
};

export default Main;