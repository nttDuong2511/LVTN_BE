import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import DeleteUser from './DelUser';

export default function User() {
  const [Users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hàm này sẽ được gọi khi component được tạo ra và mỗi khi `data` thay đổi
    async function fetchUserData() {
      try {
        // Thực hiện cuộc gọi API bằng axios
        const response = await axios.get('http://localhost:3000/v1/User/getuserlist');
        setUsers(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error('Lỗi khi gọi API:', error);
      }
    }

    fetchUserData();
  }, []);

  const handleDelete = (userId) => {
    // Sau khi xóa thành công, cập nhật danh sách người dùng bằng cách lọc ra những người dùng không có userId đã xóa
    setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));
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
                <th>Tên người dùng</th>
                <th>Số điện thoại</th>
              </tr>
            </thead>
            <tbody>
              {Users.map((user, index) => (
                <tr key={user._id}>
                  <td>{index + 1}</td>
                  <td>{user.tenND}</td>
                  <td>{user.sdt}</td>
                  <td>
                    <Link to={`/user/${user._id}`}>Xem chi tiết</Link>
                  </td>
                  <td>
                    <DeleteUser userId={user._id} onDelete={handleDelete} />
                  </td>
                  <td>
                    <Link to={`/updateuser/${user._id}`}>Chỉnh sửa</Link>
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
