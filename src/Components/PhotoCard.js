import React from "react";
import CommentsIcon from "../Icons/insert_comment.svg";
import CalendarIcon from "../Icons/date_range.svg";
import {PhotoItem} from '../Components/StyledComponents';
import {Picture} from '../Components/StyledComponents';
import {Content} from '../Components/StyledComponents';
import {ContentHeader} from '../Components/StyledComponents';
import {ContentFooter} from '../Components/StyledComponents';
import {RedditLink} from '../Components/StyledComponents';
import AddToFavoritesIcon from '../Icons/heart-no.svg';
import RemoveFromFavoritesIcon from '../Icons/heart-yes.svg';
import Clear from  '../Icons/clear.svg';



function formatDate(timestamp) {
  const date = new Date(timestamp * 1000); // Convert to milliseconds
  const day = date.getDate();
  const month = date.getMonth() + 1; // getMonth() returns month from 0-11
  const year = date.getFullYear();

  return `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;
}

const PhotoCard = ({ photo, addToFavorites, removeFromFavorites, isFavorite, pageRef }) => {

  const photoItemClass = isFavorite && pageRef === 'home' ? "photo-favorite" : "photo";
  /*console.log("PhotoCard photo:", photo);*/

  return (
   <>
      
        <PhotoItem className={photoItemClass}>
          <Picture>
          <source
              media="(max-width: 768px)"
              srcSet={photo.data.thumbnail}
              width={300}
              height={300}
              
            />
            <source
              media="(min-width:769px)"
              srcSet={photo.data.url}
              width={300}
              height={300}
            />

            <img 
              src={photo.data.thumbnail} 
              alt={photo.data.title} 
              width={300}
              height={300}
              loading="lazy"
            />

          </Picture>

          <Content>
            <ContentHeader>
              <div className="date-holder">
                <img className="icons" src={CalendarIcon} alt="Calendar Icon" width={24} height={24}/> <span className="fontSmall">{formatDate(photo.data.created_utc)} </span>
              </div>
              <div className="comments-holder">
                <img src={CommentsIcon} alt="Comments Icon" width={24} height={24}/><span className="fontSmall">{photo.data.num_comments}</span>
              </div>
            </ContentHeader>
            <p className="subreddit fontSmall">Subreddit: <a href={`https://www.reddit.com/r/${photo.data.subreddit}`} target="_blank" rel="noreferrer" title={`Subreddit ${photo.data.subreddit}`}>{photo.data.subreddit}</a></p>
            <h2 className="photo-title">{photo.data.title} </h2>

            <ContentFooter>
              <RedditLink href={`https://www.reddit.com${photo.data.permalink}`} target="_blank" >
                View on Reddit <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
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
          <button onClick={() => isFavorite ? removeFromFavorites(photo.data.id) : addToFavorites(photo)}>
          {isFavorite
            ? pageRef === 'favorites' 
                ? <img src={Clear} alt="Remove from Favorites" width={28} height={28}/>
                : <img src={RemoveFromFavoritesIcon} alt="Remove from Favorites" width={28} height={28}/>
            : <img src={AddToFavoritesIcon} alt="Add to Favorites" width={28} height={28}/>
          }
        </button>
        </PhotoItem>

      
    </>
  );
};
export default PhotoCard;
