
import React, { useState, useEffect }  from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import PageTop from './Components/PageTop';

import Header from './Layout/Header';
import Main from './Layout/Main';
import Footer from './Layout/Footer';


import './App.css'

const App = () => {
  
  /*const keyword = "catpranks";*/
  const [keyword, setkeyword] = useState("all");
  const [inputValue, setInputValue] = useState("");
  const [favorites, setFavorites] = useState([]);

  /* Favortits */
  const addToFavorites = (photo) => {
    setFavorites(prev => [...prev, photo]);
  };

  const removeFromFavorites = (photoId) => {
    setFavorites(prev => prev.filter(photo => photo.data.id !== photoId));
  };

  const clearFavorites = () => {
    setFavorites([]);
  };
  /* Search */
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

        </Main>
        
          <Footer/>      
    
    </Router>
  )
}

export default App
