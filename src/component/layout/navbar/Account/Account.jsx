import React, { useState } from 'react';
import Box from '@mui/material/Box';
import LoginIcon from '@mui/icons-material/Login';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import AccountForm from './AcountForm/AcountForm.jsx';


export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [isOpenAcount, setIsOpenAcount] = useState(false);

  const handleAcountClick = (e) => {
    e.stopPropagation();
    setIsOpenAcount(!isOpenAcount);
    };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogin = () => {
    // Xử lý logic đăng nhập tại đây
    handleClose();
  };

  const handleRegister = () => {
    // Xử lý logic đăng kí tại đây
    handleClose();
  };

  const handleAcountMouseEnter = () => {
    setIsOpenAcount(true);
  };

  const handleAcountMouseLeave = () => {
    setIsOpenAcount(false);
  };

  return (
    <div className="AccountMenu"
          onClick={handleAcountClick} 
          onMouseEnter={handleAcountMouseEnter}
          onMouseLeave={handleAcountMouseLeave}>
       <Tooltip arrow>
            <IconButton
              size="small"
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <PermIdentityOutlinedIcon sx={{ width: 30, height: 30, color: '#fff'  }}> 
              </PermIdentityOutlinedIcon >
              
            </IconButton>
        </Tooltip>
        {isOpenAcount && (   
        <div  className="AcountForm"
        style={{
          position: 'absolute',
          right: "110px",
          zIndex: 1,
        }}>
        <AccountForm/>
        </div>
        )}
    </div>
  );    
}
