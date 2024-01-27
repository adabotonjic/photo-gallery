import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainTitle = styled.div`
    margin-bottom: 1.5rem;
    span{
        background: var(--color-yellow);
        padding: 0 1rem;
        
    }
`;



const Header = () => (
    
<header className="header ">
    <div className='container '>
        
        <MainTitle>
            <h1>Photo gallery of Reddit stuff</h1>
           
        </MainTitle>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/favorites">Favorites</Link>
   
        </nav>
        

        <hr></hr>
    </div>
    
</header>

);

export default Header;