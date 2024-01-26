import React from 'react';
import styled from 'styled-components';

const MainTitle = styled.div`
    margin-bottom: 1.5rem;
    span{
        background: var(--color-yellow);
        padding: 0 1rem;
        
    }
`;
const Form = styled.form`
    margin-bottom:2rem;
    display:flex;
    gap:1rem;
    input{
        height:45px;
        line-height:45px;
        padding:5px 10px;
    }
    button{
        cursor:pointer;
        padding:5px 10px;
        border: 2px solid var(--color-yellow);
        background:white;
        transition: all 0.4s;
        &:hover, &:active{
            background: var(--color-yellow)
        }
    }
`;


const Header = ({keyword, handleInputChange, handleSubmit, inputValue}) => (
    
<header className="header ">
    <div className='container '>
        
        <MainTitle>
            <h1>Photo gallery of <span>{keyword}</span></h1>
            <p>stuff from Reddit</p>
        </MainTitle>
        <p>Enter a new keyword</p>
        <Form onSubmit={handleSubmit}>
            <input 
            type="text" 
            value={inputValue} 
            onChange={handleInputChange} 
            placeholder="es. dogpictures"
            />
            <button type="submit">Search</button>
        </Form>
        

        <hr></hr>
    </div>
    
</header>

);

export default Header;