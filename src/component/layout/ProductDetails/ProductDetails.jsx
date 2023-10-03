import React, { useEffect, useState } from 'react';
import './ProductDetails.css';
import Navbar from '../navbar/navbar.jsx';
import Ga from './ASSETS/monga.png';
import Links from './LinksCT/LinksCT.jsx';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductDetails() {

    const [Counter, setCounter] = useState(1)
    const { id } = useParams();
    const [getProductDetail, setGeOProductDetail] = useState([]);

    const handleIncrement=() => {
        setCounter (Counter + 1)
    };
    const handleDecrement=() => {
        if (Counter > 1){
            setCounter (Counter - 1)
        }   
    };


    useEffect(() => {
        async function getOneProduct(){
            try{
                const responseOneProduct = await axios.get(`http://localhost:3000/v1/Product/${id}`);
                setGeOProductDetail(responseOneProduct.data);
            }catch (error) {
                console.error('Lỗi khi gọi API:', error);
              }
        }getOneProduct();
    }, [id]);

    const addToCart = async () =>{
        try{
            const response = await axios.post('http://localhost:3000/v1/Cart/add', {
                productId: id, // ID sản phẩm từ params
                quantity: Counter
            });
            console.log(response.data.message);
        }catch (error) {
        console.error('Lỗi khi thêm sản phẩm vào giỏ hàng:', error);
        }
    };
  return (
    <div className ='ProductDetails'>
        <div className="ProductDetails-nav">
            <Navbar/>
        </div>
        <div className="mainmenu-link">
            <Links/>
        </div>
        
        {/* {Array.isArray(getProductDetail) && getProductDetail.length > 0 && getProductDetail.map((product) => ( */}
        <div className="ProductDetails-content" >
                <div className="ProductDetails-pic">
                    <img src={Ga} alt="monga"  />
                </div>
                <div className="ProductDetails-inf">
                    <div className="ProductDetails-title">
                        <span className="ten-mon">Tên món ăn: {getProductDetail.tenSP}</span>    
                    </div>
                    <div className="ProductDetails-title">
                        <span className="gia-mon">$:{getProductDetail.giaSP}</span>
                    </div>
                    <div className="soluong-mon">
                        <span className="sl-mon">Số lượng</span>
                        <button className="giam-sl" onClick ={handleDecrement} >-</button>
                        <input type="value" className="sl" value = {Counter} />
                        <button className="tang-sl" onClick={handleIncrement}>+</button>
                    </div>
                    <div className="ProductDetails-btn">    
                        <button className="them-giohang"  onClick={addToCart} >Thêm vào giỏ hàng</button>
                        <Link to = {"/abate"}>
                            <button className="muangay">Mua ngay</button>
                        </Link>
                    </div>
                </div>
                <div className="ProductDetails-right">
                    <div className="ProductDetails-right-title">CÓ THỂ BẠN CHƯA BIẾT </div>
                    <nav>
                        <ul>
                            <li className="ProductDetails-item">
                                <img src={Ga} alt="công thức món gà" className="item-pic1"/>
                                <span>Mách bạn công thức làm món chả ức gà siêu ngon</span>
                            </li>
                            <li className="ProductDetails-item">
                                <img src={Ga} alt="công thức món gà" className="item-pic1"/>
                                <span>Mách bạn công thức làm món chả ức gà siêu ngon</span>
                            </li>
                            <li className="ProductDetails-item">
                                <img src={Ga} alt="công thức món gà" className="item-pic1"/>
                                <span>Mách bạn công thức làm món chả ức gà siêu ngon</span>
                            </li>
                            <li className="ProductDetails-item">
                                <img src={Ga} alt="công thức món gà" className="item-pic1"/>
                                <span>Mách bạn công thức làm món chả ức gà siêu ngon</span>
                            </li>
                            <li className="ProductDetails-itemend">
                                <img src={Ga} alt="công thức món gà" className="item-pic1"/>
                                <span>Mách bạn công thức làm món chả ức gà siêu ngon</span>
                            </li>
                        </ul>
                    </nav>
                </div>
                
            </div>
            {/* ))} */}


        <div className="ProductDetails-Mota">
            <div className="Mota-title">
                <span className="Mota"> MÔ TẢ MÓN ĂN </span>
            </div>
            <div className="Mota-content">
                <p>
                   {getProductDetail.motaSP}
                </p>
                <h3>Thành phần: :</h3>
                <p> {getProductDetail.nguyenlieu}</p>
                <h3>Khẩu phần:</h3>
                <p>1 người</p>
                <h3>Năng lượng: </h3>
                <p>Protein - {getProductDetail.cxo}, Carbs - 55.2, Fat - { getProductDetail.cbeo} (Total Kcal -  {getProductDetail.calo})</p>
            </div>
        </div>
    </div>
  )
}
