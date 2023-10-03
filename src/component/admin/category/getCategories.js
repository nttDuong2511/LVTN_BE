import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function CategoryDetailPage({setIsCategorypage}) {
  const { id } = useParams();
  const [category, setCategory] = useState(null);
  const [productDetail, setProductDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    async function fetchCategoryDetail() {
      try{
        const response = await axios.get(`http://localhost:3000/v1/ProductCategories/${id}`);
        setCategory(response.data);

        //Lấy thông tin sản phảma có trong danh mục
        if(response.data.product && response.data.product.length > 0 ){
            const productId = response.data.product[0]; 
            const productResponse = await axios.get(`http://localhost:3000/v1/Product/${productId}`);
            setProductDetail(productResponse.data);
        }
        setIsLoading(false);
        setIsCategorypage(true);
      }catch (error) {
        console.error('Lỗi khi gọi API:', error);
        setIsLoading(false);
      }
    }
    fetchCategoryDetail();
  }, [id]);
 
  return (
    <div>
      {isLoading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <div>
          <h1>Dữ liệu từ API</h1>
          <h2> Tên Danh mục: {category ? category.tenDM : 'Không có danh mục'}</h2>
          <p>Sản phẩm: {productDetail ? productDetail.tenSP : 'Không có sản phẩm'}</p>
        </div>
      )}
    </div>
  );
}