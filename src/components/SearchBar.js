import React, { useState } from 'react';
import './SearchBar.css';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const SearchBar = ({ onSearch, isLoading }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearch = () => {
        if (searchTerm.trim()) {
            onSearch(searchTerm);
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search for a card... (e.g. Sol Ring)"
                value={searchTerm}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="search-input"
            />
            <button onClick={handleSearch} className="search-button" disabled={isLoading}>
                {isLoading ? <Box sx={{ position: 'relative' }}>
                    <CircularProgress
                        variant="indeterminate"
                        sx={{
                            color: '#fcfcfc',
                            animationDuration: '550ms',
                            marginTop: '4px'
                        }}
                        size={20}
                        thickness={5}
                        value={100}
                    />
                </Box> : 'Search'}
            </button>

        </div>
    );
};

export default SearchBar;