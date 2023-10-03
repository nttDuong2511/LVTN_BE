import React, { useEffect, useState } from 'react';
import Navbar from '../navbar/navbar.jsx';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Links from './shopCartLink/shopCartLink.jsx';
import './shopCart.css';
import Ga from './ASSETS/monga.png';
import { Link } from 'react-router-dom';



export default function ShopCart() {

    // const [cartItems, setCartItems]= useState([]);
    // const [id] = useParams();

    const [Countercart, setCountercart] = useState(1);
    const [CartPrice, setCartPrice] = useState(68);
    const [TotalFunds, setTotalFunds] = useState(CartPrice);

    const handlecartIncrement=() => {
        setCountercart (Countercart + 1);
        setCartPrice( 68* (Countercart + 1) );
        setTotalFunds ( 68* (Countercart + 1));
    }
    const handlecartDecrement=() => {
        if (Countercart > 1){
            setCountercart (Countercart - 1);
            setCartPrice(68 * (Countercart - 1)  );
            setTotalFunds ( 68 * (Countercart - 1));
        }   
    }


    // useEffect(() =>{
    //     async function getMenuProductName(){
    //         try{
    //             const response = await axios.get(`http://localhost:3000/v1/Product`);
    //             setGetIsProductDetail(response.data);
    //         }catch (error) {
    //             console.error('Lỗi khi gọi API:', error);
    //             }
    //     }getMenuProductName();


    //     async function getOneMenuProductName(){
    //         try{
    //             const responseOneProduct = await axios.get(`http://localhost:3000/v1/Product/${id}`);
    //             setGetIsOneProductDetail(responseOneProduct.data);
    //         }catch (error) {
    //             console.error('Lỗi khi gọi API:', error);
    //             }
    //     }getOneMenuProductName();
    // }, [id]);


  return (
    <div className = 'shopCart'>
        <div className="ProductDetails-nav">
            <Navbar/>
        </div>
        <div className="mainmenu-link">
            <Links/>
        </div>
        <div className="shopCart-content">
            <div className="shopCart-title">
                <span>Giỏ hàng của bạn</span>
            </div>
            <div className="shopCart-tbl-head">    
                <table>
                    <tr>
                        <th className="shopCart-tbl-th">Thông tin sản phẩm</th>
                        <th className="shopCart-tbl-th">Đơn giá</th>
                        <th className="shopCart-tbl-th">Số lượng</th>
                        <th className="shopCart-tbl-th">Thành tiền</th>
                    </tr>
                   <tr>
                    <td className = 'table-inf'>
                        <img src={Ga} alt="mon-img"  className="shopCart-tbl-main-pic"/>
                        <div className="shopCart-tbl">
                            <a href="#" className="shopCart-tbl-inf">Salad Gà</a>
                            <a href="#" className="shopCart-tbl-dl">Xóa</a>
                        </div>
                        
                    </td>
                    <td className="shopCart-tbl-th" >
                        68.000đ
                    </td>
                    <td className="shopCart-tbl-th">
                        <div className="soluong-mon">
                            <button className="giam-sl" onClick ={handlecartDecrement}>-</button>
                            <input type="value" className="sl" value = {Countercart} />
                            <button className="tang-sl" onClick={handlecartIncrement}>+</button>
                        </div>
                    </td>
                    <td className="shopCart-tbl-th">
                        <span className="thanhtien">{CartPrice}.000đ</span>
                    </td>
                   </tr>
                </table>
                <div className="shopCart-price">
                    <div  className="price-spn">
                        <span>Tổng tiền:</span>
                        <span className = 'sotien' >{TotalFunds}.000đ</span>    
                    </div> 
                    <Link to = {"/abate"}>
                        <button className="shopCart-btn">
                            Thanh toán
                        </button>
                    </Link>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
