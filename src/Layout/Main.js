import React, { useState, useEffect, useRef } from "react";
import PhotoCard from "../Components/PhotoCard";
import ErrorContent from "../Components/ErrorContent";
import styled from 'styled-components';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 1.5rem;
  margin: 2rem 0rem;
  width:100%;
  min-height:300px;
  
  @media screen and (min-width:768px){
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  @media screen and (min-width:1024px){
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 2rem;
    min-height:400px;
  }
  @media screen and (min-width:1200px){
    grid-template-columns: repeat(auto-fill, minmax(330px, 1fr));
    min-height:600px;
  }
`;
const Spinner = styled.div`
  border: 4px solid rgba(0, 0, 0, 0.1);
  border-left-color: var(--color-yellow);
  border-radius: 50%;
  width: 36px;
  height: 36px;
  margin: 20px auto;
  animation: spin 1s ease infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;


const fetchPhotos = async (keyword, after = '', count = 0) => {
  try {
    const url = `https://www.reddit.com/r/${keyword}/top.json?limit=10&after=${after}&count=${count}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching photos:", error.message);
    return { error: true, message: error.message };
  }


};

const InfiniteScrollGallery = (props) => {
  //console.log("InfiniteScrollGallery rendered");
  const [photos, setPhotos] = useState([]);
  const [after, setAfter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ hasError: false, message: '' });
  const loader = useRef(null);

  const fetchMorePhotos = async ( currentAfter, currentPhotosLength) => {
    setIsLoading(true);
    console.log("Fetching photos with 'after':", currentAfter, "and count:", currentPhotosLength);

    const data = await fetchPhotos(props.keyword, currentAfter, currentPhotosLength);

    if (data.error) {
      console.log("Error fetching data:", data.message);
      setError({ hasError: true, message: data.message });
      setIsLoading(false);
      return;
    }

    console.log("API Response:", data);
    
    


    if (data && data.data && data.data.children) {
    const newPhotos = data.data.children.filter(item => {
      const url = item.data.url.toLowerCase();
      return (
        url.endsWith('.jpg') ||
        url.endsWith('.jpeg') ||
        url.endsWith('.png') ||
        url.endsWith('.gif') ||
        url.endsWith('.webp') ||
        url.endsWith('.svg')
      );
    });
  

    console.log("Number of filtered photos:", newPhotos.length);
    setPhotos(prev => {
        // Check if new photos are already included in the current photos
        const photoUrls = new Set(prev.map(item => item.data.url));
        return [...prev, ...newPhotos.filter(item => !photoUrls.has(item.data.url))];
      });
    setAfter(data.data.after);
  }else {
    console.log("No new photos or same 'after' value", data.reason);
    return;
  }
  //console.log("Finished fetching photos, setting isLoading to false");
    setIsLoading(false);
  };

  useEffect(() => {
    setPhotos([]);
    setAfter('');
    setIsLoading(true); // Start loading initially
    setError({ hasError: false, message: '' });
    fetchMorePhotos('', 0);
  }, [props.keyword]); 

  useEffect(() => {
    //console.log("useEffect triggered");
    const currentLoader = loader.current;

    const observer = new IntersectionObserver(entries => {
      //console.log("Observer triggered", entries);
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
  }, [isLoading, after, fetchMorePhotos]);


  return (
<div className="container">

  {error.hasError ? (
    <ErrorContent message={error.message} />
  ) : (
    <MainContainer>
      <PhotoCard photos={photos} />
      <div ref={loader}>{isLoading && <Spinner />}</div>
    </MainContainer>
  )}
</div>

  );
};

export default InfiniteScrollGallery;
