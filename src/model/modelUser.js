const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
      tenND: {
        type: String,
        required: true,
      },
      sdt: {
        type: String,
        required: true,
        unique: true,
        validate: {
          validator: function (v) {
            return /^[0-9]{1,11}$/.test(v);
          },
          message: "Số điện thoại không hợp lệ",
        },
      },
      matkhau: {
        type: String,
        required: true,
      },

      xacnhanMK: {
          type: String,
          required: true,
      }, 

      profilePic: {
        type: String,
        default: "",
      },

      role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
      }

      //Thêm các trường khác nếu cần
});

const User = mongoose.model('User', UserSchema);

module.exports = User;