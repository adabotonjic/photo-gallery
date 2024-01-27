import React from "react";
import PhotoCard from "./PhotoCard"; 

const Favorites = ({ favorites }) => {
  // Check if favorites is an array and has items
  if (!Array.isArray(favorites) || favorites.length === 0) {
    return <div>No favorites selected.</div>;
  }

  return (
    <div>
      {favorites.map(photo => {
        // Safety check for each photo object
        if (!photo || !photo.data || !photo.data.id) {
          return null;
        }

        return <PhotoCard key={photo.data.id} photo={photo} />;
      })}
    </div>
  );
};

export default Favorites;
