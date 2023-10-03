import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Select from 'react-select';

export default function PutCategory({ setIsPutCategorypage }) {
    const { id } = useParams();

    const [categoryData, setCategoryData] = useState({
        tenDM: '',
        product: [], // Mảng chứa sản phẩm
    });

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function fetchCategoryData() {
            try {
                const response = await axios.get(`http://localhost:3000/v1/ProductCategories/${id}`);
                const category = response.data;
                setCategoryData({
                    tenDM: category.tenDM,
                    product: category.product.map((product) => product._id), // Lấy danh sách sản phẩm dưới dạng ID
                });

                // Lấy danh sách sản phẩm từ máy chủ
                const productResponse = await axios.get(`http://localhost:3000/v1/Product`);
                const productOptions = productResponse.data.map((product) => ({
                    value: product._id,
                    label: product.tenSP,
                }));
                setProducts(productOptions);
                setIsLoading(false);
                setIsPutCategorypage(true);
            } catch (error) {
                console.error('Lỗi khi gọi API:', error);
                setIsLoading(false);
            }
        }
        fetchCategoryData();
    }, [id]);

    const handlePutChange = (e) => {
        const { name, value } = e.target;
        setCategoryData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleProChange = (selectedProducts) => {
        setCategoryData((prevData) => ({
            ...prevData,
            product: selectedProducts.map((product) => product.value),
        }));
    };

    const handlePutCaSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.put(`http://localhost:3000/v1/ProductCategories/${id}`, categoryData);
            if (response.status === 200) {
                window.alert('Danh mục đã được cập nhật thành công.');
                window.location.href = `/Category/${id}`;
            }
        } catch (error) {
            console.error('Lỗi khi cập nhật danh mục:', error);
            window.alert('Lỗi khi cập nhật danh mục. Vui lòng thử lại.');
        }
    };

    return (
        <div>
            <form onSubmit={handlePutCaSubmit}>
                <div>
                    <label htmlFor="tenDM">Tên Danh mục:</label>
                    <input
                        type="text"
                        id="tenDM"
                        name="tenDM"
                        value={categoryData.tenDM}
                        onChange={handlePutChange}
                    />
                </div>
                <div>
                    <label htmlFor="product">Sản phẩm:</label>
                    <Select
                        id="product"
                        name="product"
                        isMulti
                        value={products.filter((option) =>
                            categoryData.product.includes(option.value)
                        )}
                        onChange={handleProChange}
                        options={products}
                    />
                </div>
                <button type="submit">Cập Nhật</button>
            </form>
        </div>
    );
}
