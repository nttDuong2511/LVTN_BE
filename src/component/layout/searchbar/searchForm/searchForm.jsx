import React, { useState } from 'react';
import './searchForm.css';
import SearchIcon from '@mui/icons-material/Search';



export default function SearchForm({onSearch}) {
    const [searchTerm, setSearchTerm] = useState('');


    const handlesearchFormSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted search term:', searchTerm);

        onSearch(searchTerm);
      };


    // const onSearch = (e) => {
    //     console.log ('e', e.target.value);
    // }

  return (
    <div className ='searchForm'>
        <div className="searchForm-title">
            <span>Nhập tìm kiếm của bạn</span>
        </div>
        <div className="searchForm-input">
            <input 
                type="text" 
                className="timkiem" 
                placeholder = 'Nhập tìm kiếm' 
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                // onSearch = {onSearch}
            />
            <button className="searchForm-icon" 
                onClick = {handlesearchFormSubmit}
            >
                <SearchIcon/>
            </button>
        </div>
    </div>
  )
}
