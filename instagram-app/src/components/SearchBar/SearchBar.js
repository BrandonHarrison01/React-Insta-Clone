import React from 'react';

import styled from 'styled-components';
import './SearchBar.css';

import Instagram from './img/Instagram.png';
import nav from './img/nav.png';

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
`

const Bar = styled.input`
    width: 250px;
    height: 30px;
    text-align: center;
    border: none;
    border-bottom: 1px solid #bbb;
    
    &:focus {
        font-size: 1.2rem;
        outline: none;
        border-bottom: 2px solid #bbb;
        width: 300px;
    }
`

function SearchBar(props){
    return (
        <Header >
            <img className='Instagram' src={Instagram} />
            <Bar 
                type='text' 
                onChange={props.searchFilter}
                name='search' 
                placeholder='Search' 
            />
            <img className='Nav' src={nav} />
        </Header>
    )
}

export default SearchBar