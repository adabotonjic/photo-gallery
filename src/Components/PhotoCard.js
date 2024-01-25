import React from "react";
import styled from "styled-components";
import CommentsIcon from "../Icons/insert_comment.svg";
import CalendarIcon from "../Icons/date_range.svg";


const PhotoItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display:flex;
  flex-direction:column;
  gap:1rem;
  @media screen and (min-width: 560px){
    flex-direction:row;
    align-items:center;
    gap:1.5rem;
  }
  @media screen and (min-width: 768px){
    flex-direction:column;
    gap:0.5rem;
  }
  @media screen and (min-width: 1024px){
   
  }
`;

const Picture = styled.picture`
position:relative;
width:100%;
height:auto;
background: var(--bg-lightgrey);
img{
  width: 100%;
  height: auto;
}
@media screen and (min-width:560px){
  width: 50%;  
  height: 200px; 
  overflow: hidden;

  img{
    width: 100%;
    height: auto;
    top:50%;
    left:50%;
    position:absolute;
    transform: translate(-50%, -50%); 
  }
}
@media screen and (min-width:600px){
 
  height: 260px; 
}
@media screen and (min-width: 768px){
  width: 100%;
  height: 300px;
}
@media screen and (min-width: 1024px){

}
`;

const Content = styled.div`
padding: 0rem 1rem 1rem;
.photo-title{
  white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 320px;
}
@media screen and (min-width:560px){
  width: 50%;
  padding: 0.5rem 1.5rem 0.5rem 0;
}
@media screen and (min-width:768px){
  width: 100%;
  padding: 0.5rem 1.5rem ;
  position:relative;
  height:170px;
}
`;

const ContentHeader = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
.date-holder,
.comments-holder{
  display:flex;
  gap:10px;
  align-items: center;
}
`;
const ContentFooter = styled.div`
display:flex;
align-items:center;
justify-content:space-between;
.author-holder{
  &:hover, &:active{
    svg path{
      fill: #7d7f82;
    }
  }
}


`;
const RedditLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  background-color: white;
  font-weight: var(--fw-bold);
  color: black;
  text-decoration: none;
  border: 2px solid var(--color-yellow);
  transition: all 0.3s;
  &:hover, &:active {
    background-color: var(--color-yellow);
   
  }
  svg{
    display:inline;
  }
  @media screen and (min-width:1024px){

  }
`;
function formatDate(timestamp) {
  const date = new Date(timestamp * 1000); // Convert to milliseconds
  const day = date.getDate();
  const month = date.getMonth() + 1; // getMonth() returns month from 0-11
  const year = date.getFullYear();

  return `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;
}

const PhotoCard = ({ photos }) => {
  console.log("PhotoCard photos prop:", photos);
  return (
   <>
      {photos.map(photo => (
        <PhotoItem key={photo.data.id}>
          <Picture>
          <source
              srcSet={photo.data.thumbnail}
              media="(max-width: 768px)"
            />
            <source
              media="(min-width:769px)"
              srcSet={photo.data.url}
              sizes="50vw"
            />

            <img 
              src={photo.data.thumbnail} 
              alt={photo.data.title} 
              width={500}
              height={300}
              loading="lazy"
            />

          </Picture>
          {/*<img 
           
           src={photo.data.thumbnail} 
           srcSet={`${photo.data.thumbnail} 768w, 
           ${photo.data.url} 1024w, 
           ${photo.data.url} 1200w`}
             sizes="(max-width: 768px) 740px, 
                   (max-width: 1024px) 960px, 
                   1200px"
           alt={photo.data.title} 
           width={500}
           height={300}
           loading="lazy"
           />*/}
          <Content>
            <ContentHeader>
              <div className="date-holder">
                <img className="icons" src={CalendarIcon} alt="Calendar Icon" width={24} height={24}/> <span className="fontSmall">{formatDate(photo.data.created_utc)} </span>
              </div>
              <div className="comments-holder">
                <img src={CommentsIcon} alt="Comments Icon" width={24} height={24}/><span className="fontSmall">{photo.data.num_comments}</span>
              </div>
            </ContentHeader>
            <h2 className="photo-title">{photo.data.title} </h2>

            <ContentFooter>
              <RedditLink href={`https://www.reddit.com${photo.data.permalink}`} target="_blank" >
                View on Reddit <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <title>external-link</title>
                <path d="M17 13v6c0 0.276-0.111 0.525-0.293 0.707s-0.431 0.293-0.707 0.293h-11c-0.276 0-0.525-0.111-0.707-0.293s-0.293-0.431-0.293-0.707v-11c0-0.276 0.111-0.525 0.293-0.707s0.431-0.293 0.707-0.293h6c0.552 0 1-0.448 1-1s-0.448-1-1-1h-6c-0.828 0-1.58 0.337-2.121 0.879s-0.879 1.293-0.879 2.121v11c0 0.828 0.337 1.58 0.879 2.121s1.293 0.879 2.121 0.879h11c0.828 0 1.58-0.337 2.121-0.879s0.879-1.293 0.879-2.121v-6c0-0.552-0.448-1-1-1s-1 0.448-1 1zM10.707 14.707l9.293-9.293v3.586c0 0.552 0.448 1 1 1s1-0.448 1-1v-6c0-0.136-0.027-0.265-0.076-0.383s-0.121-0.228-0.216-0.323c-0.001-0.001-0.001-0.001-0.002-0.002-0.092-0.092-0.202-0.166-0.323-0.216-0.118-0.049-0.247-0.076-0.383-0.076h-6c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.586l-9.293 9.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0z"></path>
                </svg>
              </RedditLink>

              <div className="author-holder">
                <a href={`https://www.reddit.com/user/${photo.data.author}`} target="_blank" rel="noreferrer" title={photo.data.author}>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 32 32">
                <path fill="#F9BE00" d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z" />
              </svg>
                </a>
              </div>
            </ContentFooter>
          </Content>
        </PhotoItem>

      ))}
    </>
  );
};
export default PhotoCard;