import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import FavoritesPage from "../Pages/FavoritesPage";
import NotFound from "../Pages/404";
import AsideHome from "../Components/AsideHome";
import AsideFavorites from "../Components/AsideFavorites";
import usePageClass from "../Hooks/usePageClass";




const Main = ({keyword, inputValue, handleSubmit, handleInputChange, addToFavorites, removeFromFavorites, favorites, clearFavorites}) => {
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
    const mainContent = () => {
        return (
            <Routes>
                <Route exact path="/" element={
                <Home 
                    keyword={keyword} 
                    addToFavorites={addToFavorites} 
                    removeFromFavorites={removeFromFavorites} 
                    favorites={favorites} 
                />} 
                />
                <Route path="/favorites" element={
                <FavoritesPage 
                    favorites={favorites} 
                    removeFromFavorites={removeFromFavorites}
                />} 
                />
                <Route path="*" element={<NotFound />} />
          </Routes>
        )
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
                        {mainContent()}
                    </div>
                </div>
            </div>
        </main>
        </>
    )
};

export default Main;