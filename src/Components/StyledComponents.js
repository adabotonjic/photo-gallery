import styled from 'styled-components';
import { Link } from 'react-router-dom';

/* Main */
export const Form = styled.form`
    margin-bottom:1.5rem;
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap:0.5rem;
    max-width:250px;

    label{
        flex-basis: 100%;
    }

    .input-btn{
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        input{
            height:45px;
            line-height:45px;
            padding:5px 10px;
            border-radius: 7px;
            border: 1px solid var(--color-primary);
        }
        button{
            cursor:pointer;
            padding:5px 10px;
            border: 2px solid var(--color-yellow);
            background:white;
            transition: all 0.4s;
            border-radius: 7px;
            color: var(--color-primary);
            -webkit-appearance: none;
            appearance: none;
            height: 45px;
            width: 120px;
            &:hover, &:active{
                background: var(--color-yellow)
            }
        }
    }
    @media screen and (min-width:500px){
        
        max-width:350px;
        .input-btn{
            flex-direction: row;
           
            input{
                width:70%;
            }
            button{
                width: 30%;
            }
        }
    }
    @media screen and (min-width:1024px){
        
     
        .input-btn{
            flex-direction: column;
            input{
            width:100%;
        }
        button{
            height: 45px;
            width: 50%;

        }
        }
      
    }
`;


export const ButtonClear = styled.button`
    border:0;
    background:transparent;
    cursor:pointer;
    color: var(--color-primary);
`;

export const NavLink = styled(Link)`
    padding:0.7rem 0.5rem;
    background:transparent;
    cursor:pointer;
    display: flex;
    gap: 5px;
    align-items:center;
    color: var(--color-red); 
    font-weight: bold;
    text-decoration:none;
    border-bottom:1px solid var(--color-red);
    position:relative;
    span{
        position:relative;
        z-index:2;
    }
    svg{
        position:relative;
        z-index:2;

        &#heart, &#home{
            margin-right:5px;
        }
    }
    

    &:after{
        content:'';
        background: var(--color-red);
        height:0;
        width:100%;
        display:block;
        bottom:0;
        left:0;
        position:absolute;
        transition: all 0.3s;
        z-index: 1;
    }
    
    &:hover{
        transition: all 0.3s;
        color:white;
        svg path{
            fill:white;
        }
        &:after{
            height:100%;
        }

    } 
`;
export const MobFavLink = styled(Link)`
    position:fixed;
    top:20px;
    right: 20px;
    width:50px;
    height:50px;
    background: rgba(209, 209, 209, 0.5);
    border:2px solid var(--color-red);
    border-radius:50%;
    z-index:20;
    display: none;

    &.scrolled{
        display: block;
    }
    svg{
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
    }
    span{
        color:white;
        font-weight:bold;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
    }
    @media screen and (min-width:1024px){
        display:none;
    }
`;


/* Home */
export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  gap: 1.5rem;
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
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    
  }

`;

export const Spinner = styled.div`
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

/* ProductCard */
export const PhotoItem = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  display:flex;
  flex-direction:column;
  gap:1rem;
  transition: all 0.3s;
  button{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 40px;
    height: 40px;
    border: 0;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 50%;
    display:none;
    img{
        margin:0 auto;
        width:22px;
        height:22px;
    }
  }

  &:hover button{
    display:block;
  }
  picture:after{
    content:'';
    position:absolute;
    width:100%;
    height:100%;
    display:block;
    top:0;
    left:0;
    background:rgba(0,0,0,0);
    transition: all 0.4s;
    }
  &:hover picture:after{
    background:rgba(0,0,0,0.3);
    }

  &.photo-favorite{
    button{
        display:block;
    }
    picture img{
        position: relative;
        transition: all 0.3s;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%)  scale(0.8) ;
    }
    
  } 
  @media (hover: none) {
    button{
        display:block;
      }
  }
  @media screen and (min-width: 560px){
    flex-direction:row;
    align-items:center;
    gap:1.5rem;
    button{
        left:10px;
        top:10px;
      }
  }
  @media screen and (min-width: 768px){
    flex-direction:column;
    gap:0.5rem;
    button{
        left:unset;
      }
  }
  
 
`;

export const Picture = styled.picture`
    position:relative;
    width:100%;
    height: 300px; 
    overflow: hidden;
    background: var(--bg-lightgrey);
    transition: all 0.3s;
    img{
        width: 100%;
        height: auto;
        top:50%;
        left:50%;
        position:absolute;
        transform: translate(-50%, -50%);
    }

    @media screen and (min-width:560px){
    width: 50%;  
    height: 200px; 
    

    img{
        width: 100%;
        height: auto;
        top:50%;
        left:50%;
        position:absolute;
        transform: translate(-50%, -50%); 
    }
    }

    @media screen and (min-width: 768px){
    width: 100%;
    height: 300px;
    }
    @media screen and (min-width: 1200px){
        height: 250px;
    }
`;

export const Content = styled.div`
    padding: 0rem 1rem 1rem;
    .photo-title{
    white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 320px;

    }

    .subreddit a{
    background: var(--color-yellow);
    padding: 0 0.2rem;
    line-height: 1.3;
    display: inline-block;
    font-weight: var(--fw-bold);
    margin-top: 0.5rem;
    text-decoration:none;
    color: var(--color-primary);
    border:1px solid var(--color-yellow);
    transition:all 0.3s;
    border-radius: 7px;
    &:hover, &:active{
        background:white;
        
    }
    }
    @media screen and (min-width:560px){
    width: 50%;
    padding: 0.5rem 1.5rem 0.5rem 0;
    }
    @media screen and (min-width:768px){
    width: 100%;
    padding: 0.5rem 1.5rem ;
    position:relative;

    }
`;

export const ContentHeader = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom:0.5rem;

    .date-holder,
    .comments-holder{
    display:flex;
    gap:10px;
    align-items: center;
    }
`;

export const ContentFooter = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    .author-holder{
        svg path{
            transition: all 0.3s;
        }

        &:hover, &:active{
            svg path{
            fill: #7d7f82;
            }
        }
    }

`;
export const RedditLink = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem;
  background-color: white;
  font-weight: var(--fw-bold);
  color: var(--color-primary);
  text-decoration: none;
  border: 2px solid var(--color-yellow);
  transition: all 0.3s;
  border-radius: 7px;
  &:hover, &:active {
    background-color: var(--color-yellow);
   
  }
  svg{
    display:inline;
  }
  @media screen and (min-width:1024px){

  }
`;

/* ScrollToTop */
export const ScrollToTopButton = styled.button`
    display: block;
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 99;
    border: 2px solid var(--color-primary);;
    outline: none;
    background-color: var(--bg-lightgrey);
    padding: 12px 14px;
    border-radius: 30px;
    opacity: 0;
    transition: opacity .3s ease;
    pointer-events: none;

    svg {
        transform: rotate(180deg);
        height: 20px;
    }
    
    &:hover {
        background-color: white;
        opacity:0.8;
    }
    
    &.scrolled {
        pointer-events: auto;
        opacity: .8;
        transition: opacity .3s ease;
        cursor: pointer;
    }
    
    @media screen and (min-width:1024px) {
        display:none;
        
  }
`;