import React from 'react';
import './Orders.css';
import Ga from './ASSETS/monga.png';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import { Link } from 'react-router-dom';

export default function Orders() {
  return (
    <div className ='Orders'>
        <div className="Orders-title">
            <span>Đơn hàng của bạn</span>
        </div>
        <div className="Orders-content">
            <div className="Orders-product">
                <img src= {Ga} alt="monan-pic" className="Orders-pic" />
                <div className="Orders-product-span">
                    <span className="Orders-product-name">Salad gà</span>
                    <span className="Orders-product-gia">68.000đ</span>
                </div>
                
            </div>
            <div className="Orders-discount">
                <input type="text" className="discount-input" placeholder='Nhập mã giảm giá' />
                <button className="discount-btn">Áp dụng</button>
            </div>
            <div className="Orders-Provisional">
                <span >Tạm tính</span>
                <span className="Orders-Provisional-gia">68.000đ</span>
            </div>
            <div className="Orders-ships">
                <span className="Orders-ship">Phí vận chuyển</span>
            </div>
            <div className="Orders-Sum">
                <span>Tổng cộng</span>
                <span className="Orders-Sum-gia">68.000đ</span>
            </div>
            <div className="Orders-footer"> 
                <div className="back-Cart-icon">
                    <div className="back-icon"> <ArrowLeftIcon/></div>
                    <Link to = {"/cartshop"}
                        className="back-Cart">
                        Quay về giỏ hàng
                    </Link>
                </div>
                    <button className="Orders-footer-btn">Đặt hàng</button>
            </div>
        </div>
    </div>
  )
}
