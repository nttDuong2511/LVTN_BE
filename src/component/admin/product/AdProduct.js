import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { Link } from 'react-router-dom';


export default function AddProduct() {
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

  const [categories, setCategories] = useState([]); // Danh sách danh mục
  const [products, setProducts] = useState([]); // Danh sách sản phẩm
  const [newProduct, setNewProduct] = useState(null);
 
  useEffect(() => {
    // Lấy danh sách danh mục sản phẩm từ máy chủ khi component được tạo ra
    async function fetchCategories() {
      try {
        const response = await axios.get('http://localhost:3000/v1/ProductCategories/');
        const categoryOptions = response.data.map((category) => ({
          value: category._id,
          label: category.tenDM,
        }));
        setCategories(categoryOptions);
      } catch (error) {
        console.error('Lỗi khi lấy danh mục sản phẩm:', error);
      }
    }

    fetchCategories();
  }, []);

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
      const response = await axios.post('http://localhost:3000/v1/Product/ad', productData);
      if (response.status === 200) {
        // Nếu thành công, hiển thị thông báo thành công bằng cửa sổ alert
        window.alert('Sản phẩm đã được thêm thành công.');

        // Đặt lại giá trị các trường dữ liệu trong biểu mẫu thành giá trị rỗng
        setProductData({
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
          categories: [],
        });

        // Lưu thông tin sản phẩm mới vào state để chuyển đến trang chi tiết
        setNewProduct(response.data);
      }
    } catch (error) {
      console.error('Lỗi khi thêm sản phẩm:', error);
      // Nếu có lỗi, hiển thị thông báo lỗi bằng cửa sổ alert
      window.alert('Lỗi khi thêm sản phẩm. Vui lòng thử lại.');
    }
  };


  return (
    <div>
      <h1>Thêm Sản Phẩm</h1>


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
        <button type="submit">Thêm</button>
        {newProduct && (
        <Link to={`/Product/${newProduct._id}`}>Xem chi tiết</Link>
      )}

      </form>
    </div>
  );
}
