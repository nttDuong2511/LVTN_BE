const Cart = require('../model/modelCart');

const cartController = {
    //Thêm sản phẩm vào giỏ hàng
    addItemToCart: async (req, res) => {
        try{
            const { productId, quantity } = req.body;
            const cart = await Cart.findOne({user: req.user._id});

            //Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng chưa
            const existingItem = cart.items.find(item => item.product.equals(productId));

           if(existingItem){
            //Nếu sản phẩm đã tồn tại thì cập nhật số lượng
            existingItem.quantity += quantity;
           } else{
            //Nếu sản phẩm chưa có thì đẩy vào 
            cart.items.push({product: productId, quantity});
           }

           //Cập nhật số lượn tổng của giỏ hàng
           cart.total = cart.items.reduce((total, item) => total + item.quantity, 0);
           await cart.save();
           res.status(200).json({ message: 'Sản phẩm đã được thêm vào giỏ hàng.' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

module.exports = cartController;

// if(itemToUpdate){
//     itemToUpdate.quantity = quantity;
//     await cart.save();
//     res.status(200).json({ message: 'Số lượng sản phẩm trong giỏ hàng đã được cập nhật.' });
// }else {
//     res.status(404).json({ error: 'Sản phẩm không tồn tại trong giỏ hàng.' });
// }