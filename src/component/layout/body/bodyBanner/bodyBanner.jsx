import React from 'react'
import './bodyBanner.css';
import anh1 from './ASSETS/4.png';
import anh2 from './ASSETS/5.png';
import anh3 from './ASSETS/6.png';
import anh4 from './ASSETS/7.png';


export default function bodyBanner() {
  return (
    <div className='bodyBanner'>
        <div className="bodyBannerPic">
            <div className="bodyBanner-pic1">
                <img src={anh1} alt="" />
            </div>
            <div className="bodyBanner-pic">
                <img src={anh2} alt="" />
            </div>
            <div className="bodyBanner-pic">
                <img src={anh3} alt="" />
            </div>
            <div className="bodyBanner-pic">
                <img src={anh4} alt="" />
            </div>
        </div>

    </div>
    
  )
}
