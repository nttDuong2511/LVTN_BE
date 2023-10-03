import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteProduct from './DelProduct';

export default function GetProduct() {
  const [Product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hàm này sẽ được gọi khi component được tạo ra và mỗi khi `data` thay đổi
    async function fetchProductData() {
      try {
        // Thực hiện cuộc gọi API bằng axios
        const response = await axios.get('http://localhost:3000/v1/Product/');
        setProduct(response.data);
        // setIsProductPage(true);
        setIsLoading(false);
      } catch (error) {
        console.error('Lỗi khi gọi API:', error);
      }
    }

    fetchProductData();
  }, []);
  const handlePrDelete = (productId) => {
    // Sau khi xóa thành công, cập nhật danh sách người dùng bằng cách lọc ra những người dùng không có userId đã xóa
    setProduct((prevProduct) => prevProduct.filter((product) => product._id !== productId));
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
                <th>hình ảnh</th>
                <th>Tên món ăn</th>
                <th>giá món ăn</th>
                <th>Mô tả</th>


              </tr>
            </thead>
            <tbody>
              {Product.map((product, index) => (
                <tr key={product._id}>
                  <td>{index + 1}</td>
                  <td>{product.hinhanh}</td>
                  <td>{product.tenSP}</td>
                  <td>{product.giaSP}</td>
                  <td>{product.motaSP}</td>
                  {/* <td>{product.nguyenlieu}</td>
                  <td>{product.trangthai}</td>
                  <td>{product.calo}</td>
                  <td>{product.cxo}</td>
                  <td>{product.cbeo}</td> */}


                  <td>
                    <Link to={`/Product/${product._id}`}>Xem chi tiết</Link>
                  </td>
                  <td>
                    <DeleteProduct productId={product._id} onDelete={handlePrDelete} />
                  </td>
                  <td>
                    <Link to={`/Product/Put/${product._id}`}>Chỉnh sửa</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
