const UserController = require('../controller/UserController');
const router = require("express").Router();


//Đăng ký
router.post('/signin', UserController.Signin);


//Đăng nhập
router.post('/login', UserController.Login);


//Cập nhật thông tin người dùng
router.put('/updateuser/:id', UserController.updateUser);


//Xem danh sách người dùng
router.get('/getuserlist', UserController.getUserList);


//Xem chi tiết người dùng
router.get('/getuserItem/:id', UserController.getUserItem);


//Xóa người dùng
router.delete('/deleteuser/:id', UserController.deleteUser);


//Đăng xuất
router.post('/logout', UserController.Logout);



module.exports = router;