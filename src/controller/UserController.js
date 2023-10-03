const bcrypt = require('bcrypt');
const jwt = require ('jsonwebtoken');
const User = require ('../model/modelUser');
require('dotenv').config(); 
const validator = require('validator');
const cookieParser = require ("cookie-parser");

    //Đăng ký
    exports.Signin = async (req, res) => {
      try {
        const { username, phone, password, confirmpassword } = req.body;

        //Kiểm tra người dùng nhập đầy đủ thông tin chưa
        if (!username || !phone || !password || !confirmpassword){
          return res.status(400).json("Vui lòng nhập đầy đủ thông tin");
        }
        const sdt = phone;

        //Kiểm tra số điện thoại có phù hợp không
        if (!validator.isMobilePhone(sdt)){
          return res.status(400).json("Số điện thoại không hợp lệ");
        }
        // Kiểm tra xem người dùng đã tồn tại với số điện thoại đã cho chưa
        const existingUser = await User.findOne({ sdt });
        if (existingUser) {
          return res.status(400).json("Số điện thoại đã tồn tại");
        }

        //Kiểm tra mật khâur xác nhận và mật khẩu có khớp với nhau không
        if (password !== confirmpassword){
          return res.status(400).json("Mật khẩu không trùng khớp");
        }
    
        // Mã hóa mật khẩu
        const hashedPassword = await bcrypt.hash(password, 10); // Sử dụng 10 vòng lặp cho việc mã hóa
    
        // Tạo một người dùng mới
        const newUser = new User({
          tenND: username,
          sdt: phone,
          matkhau: hashedPassword,
          xacnhanMK: hashedPassword
        });
    
        // Lưu người dùng mới vào cơ sở dữ liệu
        await newUser.save();
    
        return res.status(201).json("Đăng ký thành công");
      } catch (error) {
        return res.status(500).json(error);
      }
  };
  
    //Đăng nhập
    exports.Login = async (req, res) => {
        try {
          const { phone, password } = req.body;
      
          const sdt = phone;
          // Tìm người dùng bằng số điện thoại
          const user = await User.findOne({ sdt });
          if (!user) {
            return res.status(401).json("Số điện thoại không đúng");
          }
        // So sánh mật khẩu
        const isPasswordCorrect = await bcrypt.compare(password, user.matkhau);

        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Sô điện thoại hoặc mật khẩu không đúng' });
        } ;
        // else{
        //   return res.status(200).json({ message: 'Đăng nhập thành công', user });
        // };

        const accessToken = jwt.sign({
          id: user._id,
          isAdmin: user.role === 'admin',
        }, 
        'accessToken', {expiresIn: '1h'} );
          // res.header("Authorization", accessToken).json({ user, accessToken });

        const RefreshToken = jwt.sign({
          id: user._id, 
          isAdmin: user.role === 'admin',
        }, 'RefreshToken', {expiresIn: '356d'} );
          // res.header("Authorization", RefreshToken).json({ user, accessToken, RefreshToken });
          res.cookie('accessToken', accessToken, { httpOnly: true });
          res.cookie('refreshToken', RefreshToken, { httpOnly: true });
          res.status(200).json({ message: 'Đăng nhập thành công', user });
        } catch (error) {
          res.status(500).json(error);
        }
      };
    
      
      //Cập nhật thông tin người dùng
        exports.updateUser = async (req, res) => {
      try {
        const  userId = req.params.id; //Lấy id của người dùng cần cập nhật thông tin
        const { tenND, matkhau, xacminhMK } = req.body; // Lấy thông tin người dùng từ request body


        const existingUser = await User.findById(userId);
        if(!existingUser){
            return res.status(400).json({ message: 'Người dùng không tồn tại' });
        };
        if (tenND){
          existingUser.tenND = tenND;
        };

        if(matkhau){

          if (!xacminhMK || matkhau !== xacminhMK) {
            return res.status(400).json('Mật khẩu không trùng khớp');
          };
    
        // Mã hóa mật khẩu
          const hashedPassword = await bcrypt.hash(matkhau, 10);

          //Cập nhật tên người dùng mới
          existingUser.matkhau = hashedPassword;
          existingUser.xacminhMK = hashedPassword;
          }


          //lưu thông tin đăng nhập mới
          await existingUser.save();

          return res.status(201).json("Cập nhật thông tin người dùng thành công");
      } catch (error) {
        return res.status(500).json(error);
      }
  };


    //Xem danh sách người dùng
    exports.getUserList = async (req, res) => {
      try {
        const page = parseInt(req.query.page) || 1; // Trang hiện tại
        const pageSize = parseInt(req.query.pageSize) || 10; // Kích thước trang
        const skip = (page - 1) * pageSize; // Bỏ qua số lượng mục

        const userList = await User.find()
        .skip(skip)
        .limit(pageSize);

        if(!userList|| userList.length === 0){
            return res.status(400).json({ message: 'Danh sách người dùng' });
        };
          return res.status(201).json(userList);
      } catch (error) {
        return res.status(500).json(error);
      }
  };


    //Xem chi tiết người dùng
    exports.getUserItem = async (req, res) => {
      try {
        const userId = req.params.id;

        const UserItem = await User.findById(userId);

        if(!UserItem){
            return res.status(400).json({ message: "Người dùng không tồn tại" });
        };
          return res.status(201).json(UserItem);
      } catch (error) {
        return res.status(500).json(error);
      }
  };

    //Xóa tài khoản người dùng
    exports.deleteUser = async (req, res) => {
      try {
        const  userId = req.params.id; //Lấy id của người dùng cần xóa

        const existingUser = await User.findByIdAndDelete(userId);
        if(!existingUser){
            return res.status(400).json({ message: 'Người dùng không tồn tại' });
        };
        
          return res.status(201).json("Xóa người dùng thành công");
      } catch (error) {
        return res.status(500).json(error);
      }
  };

    //Đăng xuất
    exports.Logout = async (req, res) => {
      try {
        res.clearCookie('accessToken');
        res.clearCookie('refreshToken');
        return res.status(200).json({ message: 'Đăng xuất thành công' });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    };



