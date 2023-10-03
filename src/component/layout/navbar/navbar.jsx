import React from 'react';
import './navbar.css';
import logo from './ASSETS/logo.png';

import Cart from './cart/cart.jsx';
import Account from './Account/Account.jsx';
import SearchAppBar from '../searchbar/searchbar';
import Menu from '../subnav/menu/menu.jsx';
import Home from '../subnav/home/home.jsx';
import Sale from '../subnav/sale/sale.jsx';
import Book from '../subnav/checkBody/book.jsx';
import Contact from '../subnav/contact/contact.jsx';
import { Link } from 'react-router-dom';
import { useLayoutEffect } from 'react';





export default function Navbar() {

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
    <nav className = 'navbar'>
        <div className = 'logo-header'>
            <Link to={"/body"} onClick={scrollToTop} >
                <img src={logo} alt="Logo" />
            </Link>   
        </div>

        <div className="subnav-menu">
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


        </div>
    </nav>
    
      
  )
}

