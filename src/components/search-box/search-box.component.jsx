import React from 'react';

import '/Users/evi-edor/Desktop/reactcoding/monsters-rolodex/src/components/search-box/search-box.styles.css';

export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className='search' 
        type='search' 
        placeholder={placeholder} 
        onChange={handleChange}
    />
);
