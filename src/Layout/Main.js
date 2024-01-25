import React, { useState, useEffect, useRef } from "react";
import PhotoCard from "../Components/PhotoCard";
import styled from 'styled-components';

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
  width:100%;
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

const fetchPhotos = async (after = '', count = 0) => {
  const url = `https://www.reddit.com/r/dog/top.json?limit=10&after=${after}&count=${count}`;
  const response = await fetch(url);
  const data = await response.json();

  console.log(url);
  // Log the status code and rate limit headers
  /*console.log('HTTP Status:', response.status);
  console.log('Rate Limit Remaining:', response.headers.get('x-ratelimit-remaining'));
  console.log('Rate Limit Reset:', response.headers.get('x-ratelimit-reset'));*/
  return data;

};


  
const InfiniteScrollGallery = () => {
  //console.log("InfiniteScrollGallery rendered");
  const [photos, setPhotos] = useState([]);
  const [after, setAfter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const loader = useRef(null);

  const fetchMorePhotos = async (currentAfter, currentPhotosLength) => {
    if (isLoading || currentAfter === null) return;
    //console.log("Starting to fetch photos, setting isLoading to true");
    setIsLoading(true);


  
    console.log("Fetching photos with 'after':", currentAfter, "and count:", currentPhotosLength);
    const data = await fetchPhotos(currentAfter, currentPhotosLength);

    console.log("API Response:", data);
  
    if (data && data.data && data.data.children) {
    const newPhotos = data.data.children.filter(item => {
      const url = item.data.url.toLowerCase();
      return (
        url.endsWith('.jpg') ||
        url.endsWith('.jpeg') ||
        url.endsWith('.png') ||
        url.endsWith('.gif')
      );
    });
  

    console.log("Number of new photos:", newPhotos.length);
    setPhotos(prev => [...prev, ...newPhotos]);
    setAfter(data.data.after);
  }else {
    console.log("No new photos or same 'after' value");
  }
  //console.log("Finished fetching photos, setting isLoading to false");
    setIsLoading(false);
  };

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
     // console.log("Cleaning up useEffect");
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [isLoading, after, fetchMorePhotos]);

  //console.log("InfiniteScrollGallery end of function");
  return (
    <div className="container">
    <MainContainer>
      <PhotoCard photos={photos} />
      <div ref={loader}>{isLoading && <Spinner />}</div>
    </MainContainer>
    </div>
  );
};

export default InfiniteScrollGallery;
