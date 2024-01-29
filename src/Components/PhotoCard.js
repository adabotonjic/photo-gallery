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
import ExtLinkIcon from "./IconsSvg.js/ExtLinkIcon";
import AuthorIcon from "./IconsSvg.js/AuthorIcon";



function formatDate(timestamp) {
  const date = new Date(timestamp * 1000); // Convert to milliseconds
  const day = date.getDate();
  const month = date.getMonth() + 1; // getMonth() returns month from 0-11
  const year = date.getFullYear();

  return `${day < 10 ? '0' : ''}${day}/${month < 10 ? '0' : ''}${month}/${year}`;
}

const PhotoCard = ({ photo, addToFavorites, removeFromFavorites, isFavorite, pageRef }) => {

  const photoItemClass = isFavorite && pageRef === 'home' ? "photo-favorite" : "photo";
  /*console.log("PhotoCard photo:", photo.data);*/

  const resolutions = photo.data.preview.images[0].resolutions;
  const lastResolution = resolutions[resolutions.length - 1];

  return (
   <>
      
        <PhotoItem className={photoItemClass}>
          <Picture>
          <source
              media="(max-width: 768px)"
              srcSet={photo.data.thumbnail}
              width={photo.data.thumbnail_width}
              height={photo.data.thumbnail_height}
              
            />
            <source
              media="(min-width:769px)"
              srcSet={photo.data.url}
              /*width={300}
              height={300}*/
              width={lastResolution.width}
              height={lastResolution.height}
            />

            <img 
              src={photo.data.thumbnail} 
              alt={photo.data.title} 
              width={photo.data.thumbnail_width}
              height={photo.data.thumbnail_height}
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
                View on Reddit <ExtLinkIcon />
              </RedditLink>

              <div className="author-holder">
                <a href={`https://www.reddit.com/user/${photo.data.author}`} target="_blank" rel="noreferrer" title={photo.data.author}>
                <AuthorIcon />
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
