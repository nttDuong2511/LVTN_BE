import React, { useState } from 'react';
import './searchbar.css';
import SearchIcon from '@mui/icons-material/Search';
import Tooltip from '@mui/material/Tooltip';
import SearchForm from './searchForm/searchForm.jsx';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleIconClick = (e) => {
    e.stopPropagation();
    setIsSearchOpen(!isSearchOpen);
  };

  const handleIconMouseEnter = () => {
    setIsSearchOpen(true);
  };

  const handleIconMouseLeave = () => {
    setIsSearchOpen(false);
  };

  return (
    <div className="searchbar" 
            
            onMouseEnter={handleIconMouseEnter}
            onMouseLeave={handleIconMouseLeave}  >
        <Tooltip title="Tìm kiếm" arrow>
          <div  className="searchIcon">
            <SearchIcon />
        </div>
        </Tooltip>
        
        {isSearchOpen && (
          <div className="search-more"
          style ={{
            position: 'absolute',
            top: '100%',
            right: "130px",
            zIndex: 1,
          }}>
          <SearchForm/>
        </div>
        )}
    </div>
  );
};

export default Search;
