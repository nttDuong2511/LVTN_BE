import React from 'react';
import Logo from './ASSET/logo.png';
import { Link } from 'react-router-dom';
// import {  UserOutlined } from '@ant-design/icons';



export default function AdminHeader() {

    const styles = {
        AdHeader: {
          backgroundColor: '#fff', // Đặt màu nền là xanh lá 4caf50
          padding: '10px 20px', // Thêm padding cho navbar nếu cần
          borderBottom: '1px solid #4caf50',
        },

      };

    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
      const scrollToTopTC = () => {
        window.scrollTo(0, 0);
      };
        const scrollToTopMenu = () => {
        window.scrollTo(0, 0);
      };

  return (
   <nav className = 'AdHeader' style={styles.AdHeader}>
        <div className = 'logo-header'>
            <Link to={"/body"} onClick={scrollToTop} >
                <img src={Logo} alt="Logo" />
            </Link>   
            {/* <UserOutlined/> */}
        </div>

        {/* <div className="subnav-menu">
            <ul>
                <li>
                    <Link to = {"/body"}  onClick={scrollToTopTC}>
                        <Home/>
                    </Link>
                </li>
                <li>
                    <Link to = {"/mainmenu"} onClick = {scrollToTopMenu}>
                        <Menu />
                    </Link>
                    <a href="#"></a>
                </li>
                <li>
                    <a href="#"><Sale/></a>
                </li>
                <li>
                    <a href="#"><Book/></a>
                </li>
                <li>
                    <a href="#"><Contact/></a>
                </li>
            </ul>
        </div>
        
        <div className = 'icons-header'>
            <a href = "#" className = 'icons-search'>
                        <SearchAppBar />
            </a>

            <Link to = {"/shopCart"}
                className = 'icons-cart'>
                <Cart />
            </Link>

            <a href = "#" className = 'icons-acc'>
                        <Account/>
            </a>


        </div> */}
    </nav>
  )
}
