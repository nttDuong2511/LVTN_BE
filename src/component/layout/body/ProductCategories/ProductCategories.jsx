import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ProductCategories.css';
import Disk from './ASSETS/disk.png';

import Ga from './ASSETS/monga.png';


export default function ProductCategories() {

  const [iscategory, setIsCategory] = useState([]);
  const [isLoading, setIsLoading] =  useState(true);

  useEffect(() => {
    async function categoryData(){
      const response = await axios.get('http://localhost:3000/v1/ProductCategories/');
      setIsCategory(response.data);
      setIsLoading(false);
    }categoryData();
  })

  return (
    <div className='ProductCategories'>
      <div className='Categories-title'>
        <span>
          <img src= {Disk} alt="disk-logo" />
            Danh mục nổi bậc
          <img src= {Disk} alt="disk-logo" />
        </span>
      </div>
      <div className='Categories'>
        {iscategory.map((categories) => (
                <div className="allProductCategories" key = {categories._id}>
                <div className="Pro-contain">
                  <img src={Ga} alt="" />
                  <div className="contain-inf">
                    <span className = 'tieude' >
                      {categories.tenDM}
                    </span>
                    <span className = 'chunho'> Các món ăn được chế biến từ gà, hương vị tươi ngon</span>
                  </div> 
                </div>
                
              </div>
          ))}
      </div>
    </div>
  );
}
