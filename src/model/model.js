const mongoose = require("mongoose");

const ProductCategoriesSchema = new mongoose.Schema({
    tenDM: {
        type: String,
        require: true,
    },
    product: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product',
        }
    ],

});


const ProductSchema = new mongoose.Schema({
    hinhanh: {
        type: String,
        require: true,
    },
    tenSP: {
        type: String,
        require: true,
    },
   
    giaSP: {
        type: String,
        require: true,
    },
    motaSP: {
        type: String,
        require: true,
    },
    nguyenlieu:{
        type: String,
        require: true,
    },
    trangthai: {
        type: Boolean,
        default: true,
        require: true,
    },
    calo: {
        type: Number,
        require: true,
    },
    cdam: {
        type: Number,
        require: true,
    },
    cxo: {
        type: Number,
        require: true,
    },
    cbeo: {
        type: Number,
        require: true,
    },

    categories: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ProductCategories'
        }
    ],
});

// const ProductRelationSchema = new mongoose.Schema({
//     idSP: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'Product',
//         }
//     ],
//     idDM: [
//         {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: 'ProductCategories'
//         }
//     ],
// })

const ProductCategories = mongoose.model("ProductCategories", ProductCategoriesSchema);
const Product = mongoose.model("Product", ProductSchema);
// const ProductRelation = mongoose.model("ProductRelation", ProductRelationSchema);

// module.exports = { ProductCategories, Product, ProductRelation };
module.exports = { ProductCategories, Product };
