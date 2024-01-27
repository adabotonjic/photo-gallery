import React from "react";
import {Form} from '../Components/StyledComponents';


const Main = ({children, keyword, inputValue, handleSubmit, handleInputChange, addToFavorites, removeFromFavorites, favorites}) => {
    return (
        <>

        <main className="page-content mb-4">
            <div className='container'>
                <div className="flexContainer mt-3">
                    <aside className="sidebar">
                        <div className="current-cat mb-4">
                            <p>Current subreddit images: <strong>{keyword}</strong></p>
                        </div>
                       
                        <p>Search for a different subreddit</p>
                        <Form onSubmit={handleSubmit}>
                            <input 
                            type="text" 
                            value={inputValue} 
                            onChange={handleInputChange} 
                            placeholder="es. dogpictures"
                            />
                            <button type="submit">Search</button>
                        </Form>
                 
                    </aside>
                    <div className="main-content">
                    {React.cloneElement(children, { addToFavorites, removeFromFavorites, favorites })}
                    </div>
                </div>
            </div>
        </main>
        </>
    )
};

export default Main;