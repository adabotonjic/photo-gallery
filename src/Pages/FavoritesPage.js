// Favorites.js
import React from 'react';
import { Link } from 'react-router-dom';
import PhotoCard from "../Components/PhotoCard";
import {MainContainer} from '../Components/StyledComponents';

const Favorites = ({ favorites, removeFromFavorites }) => {
  return (
    <div>
      {favorites.length === 0 ? (
        <>
        <p><b>Currently there are no favorite images here.</b></p>
        <p>Go back to <Link to="/">homepage</Link> to serach for some images.</p>
        </>
      ) : (
       
        
        <MainContainer>
          
        {favorites.map(photo => (
          <PhotoCard
            key={photo.data.id}
            photo={photo}
            removeFromFavorites={removeFromFavorites}
            isFavorite={true}
            pageRef="favorites"
          />
        ))}
        </MainContainer>
      
      )}
    </div>
  );
};

export default Favorites;
