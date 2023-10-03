import React from 'react';
import './Abate.css';
import Logo from './ASSETS/logo.png';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Orders from './Orders/Orders.jsx';
import { Link } from 'react-router-dom';


export default function Abate() {
    const [value, setValue] = React.useState(0);
    const handleAbateChange = (event, newValue) => {
        setValue(newValue);
    };


  return (
    <div className = 'Abate'>
        <div className="Abate-form">
            <div className="Abate-logo">
                <Link to = {"/body"}>
                    <img src={Logo} alt="logo" className="logo-abate"/>
                </Link>
            </div>
            <div className="Abate-title">
                <span>Nhập thông tin khách hàng</span>
                <a href="#" className="Abate-login">Đăng nhập</a>
            </div>
            <div className="Abate-input">
                <input type="text" className="Email" placeholder = ' Email'/>
                <input type="text" className="hoten" placeholder = ' Họ và tên &#42;'/>
                <input type="text" className="sdt" placeholder = ' Số điện thoại  &#42;'/>
                <input type="text" className="diachi" placeholder = ' Địa chỉ &#42;'/>
                <input type="text" className="ghichu" placeholder = ' Ghi chú'/>
            </div>
            <div className="Abate-method">
                <span className="Abate-method-span">Chọn phương thức thanh toán</span>
                <div className="Abate-method-label">
                    <FormControl>
                    <RadioGroup
                        aria-labelledby="demo-controlled-radio-buttons-group"
                        name="controlled-radio-buttons-group"
                        value={value}
                        onChange={handleAbateChange}
                    >
                        <FormControlLabel value="ít" control={<Radio   sx={{
                                color: '#143b36', // Thay đổi màu tại đây
                                '&.Mui-checked': {
                                color: '#d69c52', // Thay đổi màu khi nút radio được chọn
                                },
                            }} />} label="Thanh toán khi nhận hàng (Ship Cod)" />
                        <FormControlLabel value="vdnhe" control={<Radio   sx={{
                                color: '#143b36', // Thay đổi màu tại đây
                                '&.Mui-checked': {
                                color: '#d69c52', // Thay đổi màu khi nút radio được chọn
                                },
                            }}/>} label="Thanh toán trực tuyến (Zalo Pay)" />
                        
                    </RadioGroup>
                    </FormControl>
                </div>
                
            </div>
        </div>

        <div className="Orders-form">
            <Orders/>
        </div>
    </div>
  )
}
