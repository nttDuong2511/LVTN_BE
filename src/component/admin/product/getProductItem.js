import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductItem({setIsProductItempage}) {
  const { id } = useParams();
  const [productDetail, setProductDetail] = useState(null);
  const [categoryDetail, setCategoryDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProductDetail() {
      try {
        const response = await axios.get(`http://localhost:3000/v1/Product/${id}`);
        setProductDetail(response.data);

        // Lấy thông tin danh mục của sản phẩm
        if (response.data.categories && response.data.categories.length > 0) {
          const categoryId = response.data.categories[0]; // Giả sử sản phẩm chỉ thuộc một danh mục
          const categoryResponse = await axios.get(`http://localhost:3000/v1/ProductCategories/${categoryId}`);
          setCategoryDetail(categoryResponse.data);
        }

        setIsLoading(false);
        setIsProductItempage(true);
      } catch (error) {
        console.error('Lỗi khi gọi API:', error);
        setIsLoading(false);
      }
    }

    fetchProductDetail();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <div>
          <h1>Dữ liệu từ API:</h1>
          <h2>Tên Sản phẩm: {productDetail.tenSP}</h2>
          <p>Danh mục: {categoryDetail ? categoryDetail.tenDM : 'Không có danh mục'}</p>
          <p>Giá: {productDetail.giaSP}</p>
          <p>Mô tả: {productDetail.motaSP}</p>
          <p>Nguyên liệu: {productDetail.nguyenlieu}</p>
          <p>Trạng thái: {productDetail.trangthai}</p>
          <p>Lượng Calories: {productDetail.calo}</p>
          <p>Lượng chất xơ: {productDetail.cxo}</p>
          <p>Lượng chất béo: {productDetail.cbeo}</p>
        </div>
      )}
    </div>
  );
}
