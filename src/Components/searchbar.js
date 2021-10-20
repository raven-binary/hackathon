import React, {useState} from 'react';

function searchbar(props){
    const {handleChange, searchText} = props;

    return(
    id="search-bar"
        type="search"
        placeholder="Hunt superheroes here..."
        onChange={handleChange}
        value={searchText}
    );
}