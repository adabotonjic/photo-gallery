
import React, { useState }  from 'react';
import './App.css'

import Header from './Layout/Header';
import Main from './Layout/Main';
import Footer from './Layout/Footer';

import './App.css'

const App = () => {
  /*const keyword = "catpranks";*/
  const [keyword, setkeyword] = useState("funny");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setkeyword(inputValue);
    setInputValue("");
  };
  return (
    <>
   <Header 
   keyword={keyword} 
   handleInputChange={handleInputChange} 
   handleSubmit={handleSubmit} 
   inputValue={inputValue} />   
    <div className='container'>
      
    </div>
    <Main keyword={keyword}/>
    
      <Footer/>      
    
    </>
  )
}

export default App;
