import React, { useEffect, useState } from 'react';
import styled from 'styled-components';


const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
  margin: 16px;
`;

const MediaItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  img,
  video {
    width: 100%;
    height: auto;
  }
`;

function Main() {
    
    const [media, setMedia] = useState([]);

      useEffect(() => {
        fetch('https://www.reddit.com/r/dogpictures/top.json')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((data) => {
            // Assuming data structure is an array of posts
            if (data && data.data && data.data.children) {
              const filteredMedia = data.data.children.filter((item) => {
                const url = item.data.url.toLowerCase();
                // Filter items with image file extensions
                return (
                  url.endsWith('.jpg') ||
                  url.endsWith('.jpeg') ||
                  url.endsWith('.png') ||
                  url.endsWith('.gif')
                  // Add more image extensions as needed
                  // Example: url.endsWith('.gif')
                );
              });
              setMedia(filteredMedia);
            } else {
              throw new Error('Data structure is not as expected');
            }
          })
          .catch((error) => {
            console.error('Error fetching or processing data:', error);
          });
      }, []);
  
    return (
      <div className='container'>
        <MainContainer>
        {media.map((item) => (
        <MediaItem key={item.data.id} className="photo-item">
          <img 
          src={item.data.url} 
          alt={item.data.title} 
          width={item.data.thumbnail_width}
          height={item.data.thumbnail_height}/>
        </MediaItem>
      ))}
        </MainContainer>
      </div>
    );
  }

export default Main;