import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteCategory from './DelCategory';



export default function GetCategory() {
    const [category, setCategory] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Hàm này sẽ được gọi khi component được tạo ra và mỗi khi `data` thay đổi
        async function fetchCategoryData() {
          try {
            // Thực hiện cuộc gọi API bằng axios
            const response = await axios.get('http://localhost:3000/v1/ProductCategories/');
            setCategory(response.data);
            // setIsProductPage(true);
            setIsLoading(false);
          } catch (error) {
            console.error('Lỗi khi gọi API:', error);
          }
        }
    
        fetchCategoryData();
      }, []);

      const handleCateDelete = (categoriesId) => {
        setCategory((PreCategories) => PreCategories.filter((categories) => categories._id !== categoriesId));
      };
      

  return (
    <div>
      {isLoading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <div>
          <h1>Dữ liệu từ API:</h1>
          
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên Danh Mục</th>
              </tr>
            </thead>
            <tbody>
              {category.map((categories, index) => (
                <tr key={categories._id}>
                  <td>{index + 1}</td>
                  <td>{categories.tenDM}</td>



                  <td>
                    <Link to={`/Category/${categories._id}`}>Xem chi tiết</Link>
                  </td>
                  <td>
                    <DeleteCategory categoriesId={categories._id} onCateDelete={handleCateDelete} />
                  </td>
                  <td>
                    <Link to={`/Category/put/${categories._id}`}>Chỉnh sửa</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}

