const mongoose = require("mongoose");

async function connect(){
    try{
        await mongoose.connect('mongodb://localhost:27017/My-webmeal',{
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Kết nối thành công");
    } catch (error){
        console.error("Lỗi kết nối:", error);
    }
}

module.exports = { connect };