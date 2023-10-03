import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function AdCategory() {
  const [categoryData, setCategoryData] = useState({
    tenDM: '',
    product: [], // Mảng chứa tất cả các sản phẩm có trong danh mục
  });

  const [newCategory, setNewCategory] = useState(null);

  const handleCateChange = (e) => {
    const { name, value } = e.target;
    setCategoryData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCateSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/v1/ProductCategories/ad', categoryData);
      if (response.status === 200) {
        window.alert('Danh mục đã được thêm thành công.');
        setCategoryData({
          tenDM: '',
          product: [],
        });
        setNewCategory(response.data);
      }
    } catch (error) {
      console.error('Lỗi khi thêm danh mục:', error);
      // Nếu có lỗi, hiển thị thông báo lỗi bằng cửa sổ alert
      window.alert('Lỗi khi thêm danh mục. Vui lòng thử lại.');
    }
  };

  return (
    <div>
      <h1>Thêm Danh Mục</h1>
      <form onSubmit={handleCateSubmit}>
        <div>
          <label htmlFor="tenDM">Tên Danh mục:</label>
          <input
            type="text"
            id="tenDM"
            name="tenDM"
            value={categoryData.tenDM}
            onChange={handleCateChange}
          />
        </div>
        <button type="submit">Thêm</button>
        {newCategory && <Link to={`/Category/${newCategory._id}`}>Xem chi tiết</Link>}
      </form>
    </div>
  );
}
