
import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageTop from './Components/PageTop';


import Header from './Layout/Header';
import Main from './Layout/Main';
import Home from './Pages/Home';
import FavoritesPage from './Pages/FavoritesPage'
import Footer from './Layout/Footer';
import NotFound from './Pages/404';

import './App.css'

const App = () => {
  
  /*const keyword = "catpranks";*/
  const [keyword, setkeyword] = useState("all");
  const [inputValue, setInputValue] = useState("");
  const [favorites, setFavorites] = useState([]);


  const addToFavorites = (photo) => {
    setFavorites(prev => [...prev, photo]);
  };

  const removeFromFavorites = (photoId) => {
    setFavorites(prev => prev.filter(photo => photo.data.id !== photoId));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setkeyword(inputValue);
    setInputValue("");
  };

  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  return (
    <Router>
        <PageTop />
        <Header />
        <Main 
          keyword={keyword} 
          handleInputChange={handleInputChange} 
          handleSubmit={handleSubmit} 
          inputValue={inputValue}
          addToFavorites={addToFavorites} 
          removeFromFavorites={removeFromFavorites} 
          favorites={favorites}
          clearFavorites={clearFavorites} >
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
             <Route path='*' element={<NotFound />}/>
           
            </Routes>
        </Main>
        
          <Footer/>      
    
    </Router>
  )
}

export default App
