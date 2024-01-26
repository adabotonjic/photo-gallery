import React, { useState, useEffect, useRef } from "react";
import PhotoCard from "../Components/PhotoCard";
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
  const url = `https://www.reddit.com/r/${keyword}/top.json?limit=10&after=${after}&count=${count}`;
  const response = await fetch(url);
  const data = await response.json();

  console.log(url);
  console.log('keyword:', keyword);
  // Log the status code and rate limit headers
  /*console.log('HTTP Status:', response.status);
  console.log('Rate Limit Remaining:', response.headers.get('x-ratelimit-remaining'));
  console.log('Rate Limit Reset:', response.headers.get('x-ratelimit-reset'));*/
  return data;

};

const InfiniteScrollGallery = (props) => {
  //console.log("InfiniteScrollGallery rendered");
  const [photos, setPhotos] = useState([]);
  const [after, setAfter] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPrivate, setIsPrivate] = useState(false);
  const [wrongKeyword, setWrongKeyword] = useState(false);
  const loader = useRef(null);

  const fetchMorePhotos = async ( currentAfter, currentPhotosLength) => {

   
  
    console.log("Fetching photos with 'after':", currentAfter, "and count:", currentPhotosLength);

    const data = await fetchPhotos(props.keyword, currentAfter, currentPhotosLength);

    console.log("API Response:", data);
    setIsLoading(true);
    
    if (isLoading || currentAfter === null ){
      console.log("fetchMorePhotos called with keyword: ", props.keyword);
    
      console.log(props.keyword);
      return;
    }
    // Check if keyword is private or not accessible
    if (data.error === 403) {
      //console.log("This content is private");
      setIsPrivate(true);
      setIsLoading(false);
      return;
    }
    if(data.data.dist === 1 && data.data.before == null){
      setWrongKeyword(true);
      setIsLoading(false);
      return;
    }

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
    setIsPrivate(false);
    setWrongKeyword(false);
    setIsLoading(true); // Start loading initially

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
     // console.log("Cleaning up useEffect");
      if (currentLoader) {
        observer.unobserve(currentLoader);
      }
    };
  }, [isLoading, after, fetchMorePhotos]);


  //console.log("InfiniteScrollGallery end of function");
  return (
    <div className="container">
     {isPrivate || wrongKeyword ? (
      <>
        <p className="h2">This content is private or what you're searching is not a valid keyword.<br></br>Try with different search.</p> 
        <p className="mb-4"><a href="https://www.reddit.com/subreddits" target="_blank" rel="noreferrer">Here</a> you can find a list of valid keywords.</p>
      
        </>
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
