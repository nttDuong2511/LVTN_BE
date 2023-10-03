import React, { useState } from 'react';
import axios from 'axios';

export default function DelCategory({categoriesId, onCateDelete}) {
    const [isCateconfirming, setIsCateconfirming] = useState(false);
    const [isCateDeleting, setsetIsCateDeleting] =  useState(false);
    const [cateDeleteSuccess, setIsCateDeleteSuccess] = useState(false);

        // Hàm hiển thị thông báo
        const showAlertCate = () => {
            alert('Xóa sản phẩm thành công');
          };
        
          const handleCateConfirm = () => {
            setIsCateconfirming(true);
          };
        
          const handleCateCancel = () => {
            setIsCateconfirming(false);
          };

          const handleCateDelete = async () => {
            try{
                //Thực hiện xóa và chừo cho đến khi hoàn thành
                setsetIsCateDeleting(true);
                const response = await axios.delete(`http://localhost:3000/v1/ProductCategories/${categoriesId}`);
                setsetIsCateDeleting(false);

                //Gọi hàm onCateDelete truyền dữ liệu component cha ddeer cập nhạt lại danh sách danh mục
                onCateDelete(categoriesId);
                if (response.status === 200){
                    showAlertCate();
                    setIsCateDeleteSuccess(true);
                }
            }catch (error) {
                console.error('Lỗi khi xóa sản phẩm:', error);
                setsetIsCateDeleting(false);
              }
          }

  return (
    <div>
      {isCateconfirming ? (
        <div>
          <p>Xác nhận xóa sản phẩm {categoriesId.tenDM}?</p>
          <button onClick={handleCateDelete} disabled={isCateDeleting}>Xóa</button>
          <button onClick={handleCateCancel} disabled={isCateDeleting}>Hủy</button>
        </div>
      ) : (
        <button onClick={handleCateConfirm} disabled={isCateDeleting}>Xóa</button>
      )}

      {/* {deleteSuccess && !isDeleting && showAlert()} */}
    </div>
  )
}
