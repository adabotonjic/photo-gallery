import React, { useState, useEffect, useRef } from "react";
import PhotoCard from "../Components/PhotoCard";
import ErrorContent from "../Components/ErrorContent";
import {Spinner} from '../Components/StyledComponents';
import {MainContainer} from '../Components/StyledComponents';


const fetchPhotos = async (keyword, after = ''/*, count = 0*/) => {

  try {
    /*const url = `https://www.reddit.com/r/${keyword}/top.json?limit=20&after=${after}&count=${count}`;*/
    const url = `https://www.reddit.com/r/${keyword}/top.json?limit=20&after=${after}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    /*console.log('API fetch: ', data);
    console.log('Url fetched', url)
    console.log('keyword:', keyword);*/
    return data;
    
  } catch (error) {
    console.error("Error fetching photos:", error.message);
    return { error: true, message: error.message };
  }

};

const Home = ({ keyword, addToFavorites, removeFromFavorites, favorites = [] }) => {
  const [photos, setPhotos] = useState([]);
  const [after, setAfter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ hasError: false, message: '' });
  const loader = useRef(null);

  const fetchMorePhotos = async (currentAfter, currentPhotosLength) => {
    if (isLoading || currentAfter === null ) return;
    
    setIsLoading(true);
    /*console.log("Fetching photos with 'after':", currentAfter, "and count:", currentPhotosLength);*/
  
    try {
      const data = await fetchPhotos(keyword, currentAfter, currentPhotosLength);
  
      if (data.error) {
        throw new Error(data.message);
      }
      else if (data && data.data && data.data.children) {
        const newPhotos = data.data.children.filter(item => {
          const url = item.data.url.toLowerCase();
          return (
            url.endsWith('.jpg') ||
            url.endsWith('.jpeg') ||
            url.endsWith('.png') ||
            url.endsWith('.gif') ||
            url.endsWith('.webp') ||
            url.endsWith('.avif') ||
            url.endsWith('.jp2') ||
            url.endsWith('.jpx') ||
            url.endsWith('.jpm') ||
            url.endsWith('.svg')
          );
        });
  
        /*console.log("Number of filtered photos:", newPhotos.length);*/

        setPhotos(prev => {
          // Check if new photos are already included in the current photos (problem images were repeating)
          const photoUrls = new Set(prev.map(item => item.data.url));

          return [...prev, ...newPhotos.filter(item => !photoUrls.has(item.data.url))];
        });
        setAfter(data.data.after);

      } else {
        console.log("No new photos or same 'after' value.");
      }
    } catch (error) {
      console.error("Error in fetchMorePhotos:", error.message);
      setError({ hasError: true, message: error.message });
    } finally {
      setIsLoading(false);
    }
  };
  

  useEffect(() => {
    setPhotos([]);
    setAfter('');
    setError({ hasError: false, message: '' });
    setIsLoading(true); // Start loading initially

    fetchMorePhotos('', 0);
  }, [keyword]); 

  useEffect(() => {
 
    const currentLoader = loader.current;

    const observer = new IntersectionObserver(entries => {
      
      if (entries[0].isIntersecting) {
        fetchMorePhotos(after, photos.length);
      }
    }, { threshold: 0.1 });

    if (currentLoader) {
      observer.observe(currentLoader);
    }

    return () => {
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [isLoading]);

  return (
    <>
     {error.hasError ? (
      <ErrorContent message={error.message} keyword={keyword}/>
    ) : (
        <MainContainer>
          {photos.map(photo => (
          <PhotoCard 
            key={photo.data.id} 
            photo={photo}
            addToFavorites={addToFavorites} 
            removeFromFavorites={removeFromFavorites}
            isFavorite={favorites.some(favPhoto => favPhoto.data.id === photo.data.id)} 
            pageRef= "home"
            />
          ))}
          <div ref={loader}>{isLoading && <Spinner />}</div>
        </MainContainer>
      )}
    </>
  );
};

export default Home;
