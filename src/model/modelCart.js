const mongoose = require("mongoose");



const CartItemsSchema = new mongoose.Schema({
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    },

    quantity: {
        type: Number,
        require: true,
        defaut: 1.
    },
});

const CartSchema = new mongoose.Schema({
    items: [CartItemsSchema],
    total: {
        type: Number,
        default: 0,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const Cart = mongoose.model("Cart", CartSchema);
module.exports = { Cart };
