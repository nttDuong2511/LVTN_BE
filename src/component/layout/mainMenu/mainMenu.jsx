import React, { useEffect, useState } from 'react';
import './mainMenu.css';
import Navbar from '../navbar/navbar.jsx';

import Links from './Links/Links.jsx';
import Footer from '../footer/footer.jsx';
import IconButton from '@mui/material/IconButton';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Ga from './ASSETS/monga.png';
import SapXep from './SortBy/SortBy.jsx';
import {  Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';


export default function MainMenu() {


    const [value, setValue] = React.useState(0);
    const [value1, setValue1] = React.useState(0);
    const [value2, setValue2] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChange1 = (event, newValue1) => {
        setValue1(newValue1);
    };
    const handleChange2 = (event, newValue2) => {
        setValue2(newValue2);
    };

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [IsSubMenuOpen, setIsSubMenuOpen] = useState(false);
    const [IsSubMenuOpen1, setIsSubMenuOpen1] = useState(false);
    const [IsSubMenuOpen2, setIsSubMenuOpen2] = useState(false);
    const [IsOpen, setIsOpen] = useState(false);
    const { id } = useParams();
    const [getIsProductDetail, setGetIsProductDetail] = useState([]);
    const [getIsOneProductDetail, setGetIsOneProductDetail] = useState([]);

    const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
    };

    const handleSXClick =(e) =>{
        e.stopPropagation();
        setIsOpen(!IsOpen);
    }

    const handleSubMenuClick = (e) => {
        e.stopPropagation();
        setIsSubMenuOpen(!IsSubMenuOpen);
    };
    const handleSubMenuClick1 = (e) => {
        e.stopPropagation();
        setIsSubMenuOpen1(!IsSubMenuOpen1);
    };
    const handleSubMenuClick2 = (e) => {
        e.stopPropagation();
        setIsSubMenuOpen2(!IsSubMenuOpen2);
    };
    const scrollToTopChitietsp = () => {
        window.scrollTo(0, 0);
      };

    useEffect(() =>{
        async function getMenuProductName(){
            try{
                const response = await axios.get(`http://localhost:3000/v1/Product`);
                setGetIsProductDetail(response.data);
            }catch (error) {
                console.error('Lỗi khi gọi API:', error);
                }
        }getMenuProductName();


        async function getOneMenuProductName(){
            try{
                const responseOneProduct = await axios.get(`http://localhost:3000/v1/Product/${id}`);
                setGetIsOneProductDetail(responseOneProduct.data);
            }catch (error) {
                console.error('Lỗi khi gọi API:', error);
                }
        }getOneMenuProductName();
    }, [id]);


  return (
    <div className ='mainmenu'>
            <div className="mainmenu-nav">
                <Navbar/>
            </div>
            <div className="mainmenu-link">
                <Links/>
            </div>
            <div className="mainmenu_content">
                <div className="mainmenu_content-left">
                    <div className="content-left">
                        <div className="content-left-title">Danh mục sản phảm</div>
                        <nav className="content-left-product">
                            <ul className = "content-left-nav">
                                <li className="nav-item ">
                                    <a title="Trang chủ" className="nav-link" href="/">Trang chủ</a>
                                </li>
                                <li className="nav-item ">
                                    <a title="Giới thiệu" className="nav-link" href="/">Giới thiệu</a>
                                </li>
                                <li className="nav-item3 ">
                                    <div className={isMenuOpen ? 'show-menu' : 'hide-menu'}>
                                        <a
                                            title="Thực đơn" arrow
                                            className="nav-link"
                                            href="#"
                                            onClick={handleMenuClick}
                                        >
                                            Thực đơn
                                        </a>
                                        <IconButton onClick={handleMenuClick}>
                                            {isMenuOpen ? <ExpandLessIcon sx ={{color: 'white'}} /> : <ExpandMoreIcon sx ={{color: 'white'}} />}
                                        </IconButton>
                                        {isMenuOpen && (
                                        <ul className="nav-item-menu">
                                            <li className="nav-item-menu">
                                                <div className={isMenuOpen ? 'show-menu' : 'hide-menu'}>
                                                <a
                                                    title="Khai vị"
                                                    className="nav-link-menu"
                                                    href="#"
                                                    onClick={handleSubMenuClick}
                                                >
                                                    Khai vị
                                                </a>
                                                <IconButton onClick={handleSubMenuClick} >
                                                    {IsSubMenuOpen ? <ExpandLessIcon sx ={{color: 'white'}} /> : <ExpandMoreIcon sx ={{color: 'white'}} />}
                                                </IconButton>
                                                {IsSubMenuOpen && (
                                                    <ul className="nav-item-menu">
                                                        <li className="nav-item-menu">
                                                            <a title="Salad gà" className="nav-menu" href="#">
                                                            Salad gà
                                                            </a>
                                                        </li>
                                                        <li className="nav-item-menu">
                                                            <a title="Salad gà" className="nav-menu" href="#">
                                                            Salad bò
                                                            </a>
                                                        </li>
                                                        <li className="nav-item-menu">
                                                            <a title="Salad gà" className="nav-menu" href="#">
                                                            Salad phomai
                                                            </a>
                                                        </li>
                                                        <li className="nav-item-menu">
                                                            <a title="Salad gà" className="nav-menu" href="#">
                                                            Salad thịt xông khói
                                                            </a>
                                                        </li>
                                                    </ul>
                                                )}
                                                </div>
                                            </li>
                                            <li className="nav-item-menu">
                                                <div className={isMenuOpen ? 'show-menu' : 'hide-menu'}>
                                                <a
                                                    title="Khai vị"
                                                    className="nav-link-menu"
                                                    href="#"
                                                    onClick={handleSubMenuClick1}
                                                >
                                                    Món chính
                                                </a>
                                                <IconButton onClick={handleSubMenuClick1} >
                                                    {IsSubMenuOpen1 ? <ExpandLessIcon sx ={{color: 'white'}} /> : <ExpandMoreIcon sx ={{color: 'white'}} />}
                                                </IconButton>
                                                {IsSubMenuOpen1 && (
                                                    <ul className="nav-item-menu">
                                                        <li className="nav-item-menu">
                                                            <a title="Salad gà" className="nav-menu" href="#">
                                                            Salad gà
                                                            </a>
                                                        </li>
                                                        <li className="nav-item-menu">
                                                            <a title="Salad gà" className="nav-menu" href="#">
                                                            Salad bò
                                                            </a>
                                                        </li>
                                                        <li className="nav-item-menu">
                                                            <a title="Salad gà" className="nav-menu" href="#">
                                                            Salad phomai
                                                            </a>
                                                        </li>
                                                        <li className="nav-item-menu">
                                                            <a title="Salad gà" className="nav-menu" href="#">
                                                            Salad thịt xông khói
                                                            </a>
                                                        </li>
                                                    </ul>
                                                )}
                                                </div>
                                            </li>
                                            <li className="nav-item-menu">
                                                <div className={isMenuOpen ? 'show-menu' : 'hide-menu'}>
                                                <a
                                                    title="Khai vị"
                                                    className="nav-link-menu"
                                                    href="#"
                                                    onClick={handleSubMenuClick2}
                                                >
                                                    Tráng miệng
                                                </a>
                                                <IconButton onClick={handleSubMenuClick2} >
                                                    {IsSubMenuOpen2 ? <ExpandLessIcon sx ={{color: 'white'}} /> : <ExpandMoreIcon sx ={{color: 'white'}} />}
                                                </IconButton>
                                                {IsSubMenuOpen2 && (
                                                    <ul className="nav-item-menu">
                                                        <li className="nav-item-menu">
                                                            <a title="Salad gà" className="nav-menu" href="#">
                                                            Salad gà
                                                            </a>
                                                        </li>
                                                        <li className="nav-item-menu">
                                                            <a title="Salad gà" className="nav-menu" href="#">
                                                            Salad bò
                                                            </a>
                                                        </li>
                                                        <li className="nav-item-menu">
                                                            <a title="Salad gà" className="nav-menu" href="#">
                                                            Salad phomai
                                                            </a>
                                                        </li>
                                                        <li className="nav-item-menu">
                                                            <a title="Salad gà" className="nav-menu" href="#">
                                                            Salad thịt xông khói
                                                            </a>
                                                        </li>
                                                    </ul>
                                                )}
                                                </div>
                                            </li>
                                        </ul>
                                    )}
                                    </div>
                                </li>
                                <li className="nav-item4 ">
                                    <a title=" Khuyến mãi" className="nav-link" href="/">Khuyến mãi</a>
                                </li>
                                <li className="nav-item ">
                                    <a title=" Cẩm nang" className="nav-link" href="/">Cẩm nang</a>
                                </li>
                                <li className="nav-item ">
                                    <a title=" Liên hệ" className="nav-link" href="/">Liên hệ</a>
                                </li>

                            </ul>
                        </nav>
                    </div>
                    <div className="content-left">
                        <div className="content-left-title">Nhập thông tin</div>
                            <nav className="content-left-inf">
                                <ul className="tuoi">
                                    <li className="nhaptuoi">Tuổi của bạn?
                                        <input type="text"  placeholder = 'Nhập tuối' />
                                    </li>                          
                                    <li className="nhapcannang">Cân nặng của bạn?
                                        <input type="text"  placeholder = 'Nhập cân nặng' />
                                    </li>
                                    <li className="nhapchieucao"> Chiều cao của bạn?
                                        <input type="text"  placeholder = 'Nhập chiều cao' />
                                    </li>
                                    <li className="gioitinh">Hãy chọn giới tính của bạn?
                                        <FormControl>
                                        <RadioGroup
                                            sx={{color:'white' }}
                                            row
                                            aria-labelledby="demo-row-radio-buttons-group-label"
                                            name="row-radio-buttons-group"
                                            value={value}
                                            onChange={handleChange}
                                        >
                                            <FormControlLabel value="female" control={<Radio
                                                sx={{
                                                    color: 'white', // Thay đổi màu tại đây
                                                    '&.Mui-checked': {
                                                    color: '#d69c52', // Thay đổi màu khi nút radio được chọn
                                                    },
                                                }}
                                                />} label="Nam"  />
                                            <FormControlLabel value="male" control={<Radio   sx={{
                                                    color: 'white', // Thay đổi màu tại đây
                                                    '&.Mui-checked': {
                                                    color: '#d69c52', // Thay đổi màu khi nút radio được chọn
                                                    },
                                                }}/>} label="Nữ" />
                                        </RadioGroup>
                                        </FormControl>
                                    </li>
                                    <li className="vandong">Mức độ vận động của bạn?
                                        <FormControl>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={value1}
                                            onChange={handleChange1}
                                        >
                                            <FormControlLabel value="ít" control={<Radio   sx={{
                                                    color: 'white', // Thay đổi màu tại đây
                                                    '&.Mui-checked': {
                                                    color: '#d69c52', // Thay đổi màu khi nút radio được chọn
                                                    },
                                                }} />} label="Ít hoặc không vận động" />
                                            <FormControlLabel value="vdnhe" control={<Radio   sx={{
                                                    color: 'white', // Thay đổi màu tại đây
                                                    '&.Mui-checked': {
                                                    color: '#d69c52', // Thay đổi màu khi nút radio được chọn
                                                    },
                                                }}/>} label="Người chơi thể thao tuần 1-2 ngày/tuần" />
                                            <FormControlLabel value="vddeu" control={<Radio   sx={{
                                                    color: 'white', // Thay đổi màu tại đây
                                                    '&.Mui-checked': {
                                                    color: '#d69c52', // Thay đổi màu khi nút radio được chọn
                                                    },
                                                }} />} label="Người chơi thể thao 3 - 5 ngày/tuần" />
                                            <FormControlLabel value="vdnhieu" control={<Radio   sx={{
                                                    color: 'white', // Thay đổi màu tại đây
                                                    '&.Mui-checked': {
                                                    color: '#d69c52', // Thay đổi màu khi nút radio được chọn
                                                    },
                                                }}/>} label="Người chơi thể thao 6-7 ngày/tuần" />
                                            <FormControlLabel value="chuyennghiep" control={<Radio   sx={{
                                                    color: 'white', // Thay đổi màu tại đây
                                                    '&.Mui-checked': {
                                                    color: '#d69c52', // Thay đổi màu khi nút radio được chọn
                                                    },
                                                }}/>} label="Vận động viên chuyên nghiệp tập 2 lần mỗi ngày" />
                                        </RadioGroup>
                                        </FormControl>
                                    </li>
                                    <li className="nhucau">Nhu cầu của bạn là gì?
                                        <FormControl>
                                        <RadioGroup
                                            aria-labelledby="demo-controlled-radio-buttons-group"
                                            name="controlled-radio-buttons-group"
                                            value={value2}
                                            onChange={handleChange2}
                                        >
                                            <FormControlLabel value="tangcan" control={<Radio   sx={{
                                                    color: 'white', // Thay đổi màu tại đây
                                                    '&.Mui-checked': {
                                                    color: '#d69c52', // Thay đổi màu khi nút radio được chọn
                                                    },
                                                }}/>} label="Tăng cân" />
                                            <FormControlLabel value="giucan" control={<Radio   sx={{
                                                    color: 'white', // Thay đổi màu tại đây
                                                    '&.Mui-checked': {
                                                    color: '#d69c52', // Thay đổi màu khi nút radio được chọn
                                                    },
                                                }}/>} label="Giữ cân" />
                                            <FormControlLabel value="giamcan" control={<Radio   sx={{
                                                    color: 'white', // Thay đổi màu tại đây
                                                    '&.Mui-checked': {
                                                    color: '#d69c52', // Thay đổi màu khi nút radio được chọn
                                                    },
                                                }}/>} label="Giảm cân" />
                                        </RadioGroup>
                                        </FormControl>
                                    </li>
                                </ul>
                                <div className="chon-btn">
                                    <button type = 'submit' className="chon">Chọn</button>
                                </div>
                            </nav>
                    </div>
                </div>
                <div className="mainmenu_content-right">
                    <div className="content-right">
                        <div className="content-right-title">
                            <span>Tất cả món ăn</span> 
                            <div className="sapxep">
                                <span>Sắp xếp</span>
                                <IconButton onClick={handleSXClick}>
                                    {IsOpen ? <ExpandLessIcon sx ={{color: 'white'}} /> : <ExpandMoreIcon sx ={{color: 'white'}} />}
                                </IconButton>
                                {IsOpen && (
                                    <SapXep/>
                                )}
                                
                            </div>
                        </div>
                        <div className="right">
                            {getIsOneProductDetail && getIsProductDetail.map((product) => (
                            <div className="FeaturedProducts-sp" key = {product._id}>
                                <div className="FeaturedProductsHinh">
                                    <img src={Ga} alt="" />
                                </div>
                                <div className="FeaturedProductsTen">
                                    <span> {product.tenSP}</span>
                                </div>
                                <div className="FeaturedProductsGia">
                                    <span>{product.giaSP}</span>
                                </div>
                                <div className="FeaturedProductsXem">
                                    <Link to = {`/ProductDetails/${product._id}`}onClick ={scrollToTopChitietsp}>
                                        <button> Xem Chi Tiết</button>
                                    </Link>
                                </div>
                            </div>
                            )) }
                        </div>

                    </div>
                </div>

            </div>
    </div>
  )
}
