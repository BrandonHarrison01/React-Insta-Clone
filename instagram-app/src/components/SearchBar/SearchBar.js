import React from 'react';

import './SearchBar.css';

import Instagram from './img/Instagram.png';
import nav from './img/nav.png';

function SearchBar(props){
    return (
        <div className='SearchBar'>
            <img className='Instagram' src={Instagram} />
            <input 
                type='text' 
                onChange={props.searchFilter}
                name='search' 
                placeholder='Search' 
            />
            <img className='Nav' src={nav} />
        </div>
    )
}

export default SearchBar