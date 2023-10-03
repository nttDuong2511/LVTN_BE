import React, { useState } from 'react';
import './book.css';
import Tooltip from '@mui/material/Tooltip';
import AddTaskIcon from '@mui/icons-material/AddTask';


const Book = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleMenu = (event) => {
    setMenuOpen(!isMenuOpen);
    setAnchorEl(event.currentTarget);
  };


  return (
    <div>
      <Tooltip title="Kiểm tra chỉ số cơ thể" arrow>
        <div onClick={toggleMenu} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <AddTaskIcon  size="small">
            <AddTaskIcon sx={{ width: 20, height: 20, color: 'black' }} />
          </AddTaskIcon>
          <span style={{ marginTop: '4px' }}> Kiểm tra </span>
        </div>
      </Tooltip>
    </div>
  );
};

export default  Book ;
