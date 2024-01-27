// Favorites.js
import React from 'react';
import PhotoCard from "../Components/PhotoCard";

const Favorites = ({ favorites, removeFromFavorites }) => {
  return (
    <div>
      {favorites.length === 0 ? (
        <p>No favorites yet!</p>
      ) : (
        favorites.map(photo => (
          <PhotoCard
            key={photo.data.id}
            photo={photo}
            removeFromFavorites={removeFromFavorites}
            isFavorite={true}
          />
        ))
      )}
    </div>
  );
};

export default Favorites;
