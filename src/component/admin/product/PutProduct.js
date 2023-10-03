import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';

export default function EditProduct({setIsPutProductpage}) {
  const { id } = useParams();

  const [productData, setProductData] = useState({
    hinhanh: '',
    tenSP: '',
    giaSP: '',
    motaSP: '',
    nguyenlieu: '',
    trangthai: true,
    calo: 0,
    cdam: 0,
    cxo: 0,
    cbeo: 0,
    categories: [], // Mảng chứa các danh mục sản phẩm
  });

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProductData() {
      try {
        const response = await axios.get(`http://localhost:3000/v1/Product/${id}`);
        const product = response.data;
        setProductData({
          hinhanh: product.hinhanh,
          tenSP: product.tenSP,
          giaSP: product.giaSP,
          motaSP: product.motaSP,
          nguyenlieu: product.nguyenlieu,
          trangthai: product.trangthai,
          calo: product.calo,
          cdam: product.cdam,
          cxo: product.cxo,
          cbeo: product.cbeo,
          categories: product.categories,
        });

        // Lấy danh sách danh mục sản phẩm từ máy chủ
        const categoriesResponse = await axios.get('http://localhost:3000/v1/ProductCategories/');
        const categoryOptions = categoriesResponse.data.map((category) => ({
          value: category._id,
          label: category.tenDM,
        }));
        setCategories(categoryOptions);

        setIsLoading(false);
        setIsPutProductpage(true);
      } catch (error) {
        console.error('Lỗi khi gọi API:', error);
        setIsLoading(false);
      }
    }

    fetchProductData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCategoryChange = (selectedCategories) => {
    setProductData((prevData) => ({
      ...prevData,
      categories: selectedCategories.map((category) => category.value),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.put(`http://localhost:3000/v1/Product/${id}`, productData);
      if (response.status === 200) {
        window.alert('Sản phẩm đã được cập nhật thành công.');
        // Chuyển hướng đến trang chi tiết sản phẩm
        window.location.href = `/Product/${id}`;
      }
    } catch (error) {
      console.error('Lỗi khi cập nhật sản phẩm:', error);
      window.alert('Lỗi khi cập nhật sản phẩm. Vui lòng thử lại.');
    }
  };

  return (
    <div>
      {isLoading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <div>
          <h1>Chỉnh Sửa Sản Phẩm</h1>

          <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="hinhanh">Hình ảnh:</label>
                <input
                type="text"
                id="hinhanh"
                name="hinhanh"
                value={productData.hinhanh}
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="tenSP">Tên Món Ăn:</label>
                <input
                type="text"
                id="tenSP"
                name="tenSP"
                value={productData.tenSP}
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="giaSP">Giá Món Ăn:</label>
                <input
                type="text"
                id="giaSP"
                name="giaSP"
                value={productData.giaSP}
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="motaSP">Mô Tả:</label>
                <textarea
                id="motaSP"
                name="motaSP"
                value={productData.motaSP}
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="nguyenlieu">Nguyên Liệu:</label>
                <input
                type="text"
                id="nguyenlieu"
                name="nguyenlieu"
                value={productData.nguyenlieu}
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="calo">Lượng Calories:</label>
                <input
                type="number"
                id="calo"
                name="calo"
                value={productData.calo}
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="cdam">Lượng Chất Đạm:</label>
                <input
                type="number"
                id="cdam"
                name="cdam"
                value={productData.cdam}
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="cxo">Lượng Chất Xơ:</label>
                <input
                type="number"
                id="cxo"
                name="cxo"
                value={productData.cxo}
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="cbeo">Lượng Chất Béo:</label>
                <input
                type="number"
                id="cbeo"
                name="cbeo"
                value={productData.cbeo}
                onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="trangthai">Trạng Thái:</label>
                <input
                type="checkbox"
                id="trangthai"
                name="trangthai"
                checked={productData.trangthai}
                onChange={() =>
                    setProductData((prevData) => ({
                    ...prevData,
                    trangthai: !prevData.trangthai,
                    }))
                }
                />
            </div>
            <div>
                <label htmlFor="categories">Danh Mục:</label>
                <Select
                id="categories"
                name="categories"
                isMulti
                value={categories.filter((option) =>
                    productData.categories.includes(option.value)
                )}
                onChange={handleCategoryChange}
                options={categories}
                />
            </div>
            <button type="submit">Cập Nhật</button>
          </form>
        </div>
      )}
    </div>
  );
}
