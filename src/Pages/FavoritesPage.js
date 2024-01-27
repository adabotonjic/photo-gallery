// FavoritesPage.js
import React from "react";
import PhotoCard from "../Components/PhotoCard";

const FavoritesPage = ({ photos, favorites }) => {
  const favoritePhotos = photos.filter(photo => favorites.includes(photo.data.id));

  return (
    <div>
      <h1>My Favorites</h1>
      {favoritePhotos.map(photo => (
        <PhotoCard key={photo.data.id} photo={photo} />
      ))}
    </div>
  );
};

export default FavoritesPage;
