import React, { useState } from 'react';
import './contact.css';
import Tooltip from '@mui/material/Tooltip';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';


const Contact = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const toggleMenu = (event) => {
    setMenuOpen(!isMenuOpen);
    setAnchorEl(event.currentTarget);
  };


  return (
    <div>
      <Tooltip title="Liên hệ với chúng tôi" arrow>
        <div onClick={toggleMenu} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <SupportAgentIcon  size="small">
            <SupportAgentIcon sx={{ width: 20, height: 20, color: 'black' }} />
          </SupportAgentIcon>
          <span style={{ marginTop: '4px' }}>Liên hệ </span>
        </div>
      </Tooltip>
    </div>
  );
};

export default Contact;
