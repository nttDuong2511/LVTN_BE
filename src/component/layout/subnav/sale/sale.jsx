import React, { useState } from 'react';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import './sale.css';
import Tooltip from '@mui/material/Tooltip';


const Sale = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleMenu = (event) => {
    setMenuOpen(!isMenuOpen);
    setAnchorEl(event.currentTarget);
  };


  return (
    <div>
      <Tooltip title="Khuyến mãi" arrow>
        <div onClick={toggleMenu} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <LoyaltyOutlinedIcon  size="small">
            <LoyaltyOutlinedIcon sx={{ width: 20, height: 20, color: 'black' }} />
          </LoyaltyOutlinedIcon>
          <span style={{ marginTop: '4px' }}>Khuyến mãi </span>
        </div>
      </Tooltip>
    </div>
  );
};

export default Sale;
