import React, { useEffect, useState } from 'react';
import Disk from './ASSETS/disk.png';
import './Mymenu.css';
import Ga from './ASSETS/monga.png';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';



export default function Mymenu() {
    const scrollToTopChitietsp = () => {
        window.scrollTo(0, 0);
      };
      const { id } = useParams();
      const [getProductDetail, setGetProductDetail] = useState([]);
      const [getOneProductDetail, setGetOneProductDetail] = useState([]);


      useEffect(() =>{
        async function getProductName(){
            try{
                const response = await axios.get(`http://localhost:3000/v1/Product?page=1&pageSize=5`);
                setGetProductDetail(response.data);
            }catch (error) {
                console.error('Lỗi khi gọi API:', error);
              }
        }getProductName();


        async function getOneProductName(){
            try{
                const responseOneProduct = await axios.get(`http://localhost:3000/v1/Product/${id}`);
                setGetOneProductDetail(responseOneProduct.data);
            }catch (error) {
                console.error('Lỗi khi gọi API:', error);
              }
        }getOneProductName();
    }, [id]);

  return (
    <div className = 'Mymenu'>
        <div className="Mymenu-tieude">
            <span>
                <img src= {Disk} alt="disk-logo" />
                    Thực đơn của chúng tôi
                <img src= {Disk} alt="disk-logo" />
            </span>
        </div>
        {/* <div className="Mymenu-btn">
            <button className="Khaivi">Khai vị</button>
            <button className="Monchinh">Món chính</button>
            <button className="Trangmieng">Tráng miệng</button>
            <button className="Douong">Đồ uống</button>
        </div> */}

        <div className="MenuAll">
        {getOneProductDetail && getProductDetail.map((product) => (
            <div className="Mymenu-sp" key={product._id}>
                <div className="menuHinh">
                    <Link to={`/Product/${product._id}`} onClick={scrollToTopChitietsp}>
                        <img src={Ga} alt="" />
                    </Link>
                </div>
                <div className="menuTen">
                    <span>{product.tenSP}</span>
                </div>
                <div className="menuGia">
                    <span>{product.giaSP}</span>
                </div>
                <div className="menuXem">
                    <Link to={`/ProductDetails/${product._id}`} onClick={scrollToTopChitietsp}>
                        <button> Xem Chi Tiết</button>
                    </Link>
                </div>
            </div>
        ))}
            
        </div>
    </div>
  )
}
 