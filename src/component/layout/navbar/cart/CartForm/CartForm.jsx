import React from 'react';
import './CartForm.css';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';

export default function CartForm() {
  return (
    <div className ="CartForm">
        <div className="cartForm-Icon">
            <ProductionQuantityLimitsIcon/>
        </div>
        <span className="EmptyCart">Không có sản phẩm nào trong giỏ hàng</span>
    </div>
  )
}
