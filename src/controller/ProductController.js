const  { Product, ProductCategories } = require('../model/model');
// const { ProductRequest } = require('../Request/ProductRequest')

const ProductController = {
    //ADD Product
    addProduct: async(req, res) => {
        try{
            const { hinhanh, tenSP, giaSP, motaSP, nguyenlieu, trangthai, calo, cdam, cxo, cbeo } = req.body;
            const categoriesIds = req.body.categories;

            const categories = await ProductCategories.find({ _id: { $in: categoriesIds } });
            // Tạo sản phẩm và liên kết với danh mục
            const addProduct = new Product({
                ...req.body,
                categories: categories
            });
            // Lưu sản phẩm vào CSDL
            const saveProduct = await addProduct.save();

            // Lặp qua danh mục sản phẩm và thêm sản phẩm vào mỗi danh mục
            categories.forEach(async (category) => {
                category.product.push(saveProduct._id);
                await category.save();
            });           

            res.status(200).json(saveProduct);
        }catch(err){
            res.status(500).json(err);
        }
    },

    //GET ALLProduct

    getAllProduct: async(req, res) => {
        try{
            const page = parseInt(req.query.page) || 1; // Trang hiện tại
            const pageSize = parseInt(req.query.pageSize) || 10; // Kích thước trang
            const skip = (page - 1) * pageSize; // Bỏ qua số lượng mục

            const AllProduct = await Product.find()
            .skip(skip)
            .limit(pageSize);

            res.status(200).json(AllProduct);
        }catch(err){
            res.status(500).json(err);
        }
    },

    // GET OneProduct
    getOneProduct: async(req, res) => {
        try{
           const OneProduct = await Product.findById(req.params.id);
           if (!OneProduct) {
            return res.status(404).json({ error: 'Sản phẩm không tồn tại' });
          }
            res.status(200).json(OneProduct);
        }catch(err){
            res.status(500).json(err);
        }
    },
 
    // PUT /product/:id
    updateProduct: async (req, res) => {
        try {
            const productId = req.params.id; // Lấy ID của sản phẩm cần cập nhật từ URL
            const { hinhanh, tenSP, giaSP, motaSP, nguyenlieu, trangthai, calo, cdam, cxo, cbeo, categories } = req.body; // Lấy thông tin sản phẩm và danh sách ID danh mục mới từ request body
    
            const existingProduct = await Product.findById(productId); // Tìm sản phẩm cần cập nhật dựa trên ID
            if (!existingProduct) {
                return res.status(404).json({ error: 'Không tìm thấy sản phẩm' });
            }
    
            // Cập nhật thông tin của sản phẩm
            existingProduct.hinhanh = hinhanh;
            existingProduct.tenSP = tenSP;
            existingProduct.giaSP = giaSP;
            existingProduct.motaSP = motaSP;
            existingProduct.nguyenlieu = nguyenlieu;
            existingProduct.trangthai = trangthai;
            existingProduct.calo = calo;
            existingProduct.cdam = cdam;
            existingProduct.cxo = cxo;
            existingProduct.cbeo = cbeo;
    
            // Lấy danh sách danh mục cũ của sản phẩm
            const oldCategories = existingProduct.categories;
    
            // Lấy tất cả danh mục mới cần cập nhật
            const newCategories = await ProductCategories.find({ _id: { $in: categories } });
    
            // Cập nhật danh sách danh mục của sản phẩm
            existingProduct.categories = newCategories.map((category) => category._id);
    
            // Lưu sản phẩm đã cập nhật
            const updatedProduct = await existingProduct.save();
    
            // Tìm các _id đã bị loại bỏ khỏi danh sách danh mục mới
            const removedCategoryIds = oldCategories.filter((categoryId) => !updatedProduct.categories.includes(categoryId));
    
            // Xóa quan hệ nhiều-nhiều trong cơ sở dữ liệu
            if (removedCategoryIds.length > 0) {
                for (const removedCategoryId of removedCategoryIds) {
                    const removedCategory = await ProductCategories.findById(removedCategoryId);
                    if (removedCategory) {
                        removedCategory.product.pull(updatedProduct._id);
                        await removedCategory.save();
                    }
                }
            }
    
            // Cập nhật quan hệ nhiều-nhiều với danh mục sản phẩm
            newCategories.forEach(async (newCategory) => {
                if (!newCategory.product.includes(updatedProduct._id)) {
                    newCategory.product.push(updatedProduct._id);
                    await newCategory.save();
                }
            });
    
            res.status(200).json(updatedProduct);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    
    // DELETE /product/:id
    deleteProduct: async (req, res) => {
        try {
            const productId = req.params.id; // Lấy ID của sản phẩm cần xóa từ URL
            
            // Tìm sản phẩm cần xóa
            const existingProduct = await Product.findById(productId);
            if (!existingProduct) {
                return res.status(404).json({ error: 'Không tìm thấy sản phẩm' });
            }
    
            // Lấy danh sách danh mục của sản phẩm
            const categoryIds = existingProduct.categories;
    
            // Xóa sản phẩm khỏi danh mục sản phẩm
            for (const categoryId of categoryIds) {
                const category = await ProductCategories.findById(categoryId);
                if (category) {
                    category.product.pull(productId);
                    await category.save();
                }
            }
    
            // Xóa sản phẩm
            // await existingProduct.remove();
            await Product.findByIdAndDelete(productId);
            
            res.status(200).json("Xóa sản phẩm thành công"); // Trả về 204 No Content khi xóa thành công
        } catch (err) {
            res.status(500).json({ error: 'Xóa sản phẩm thất bại', message: err.message });
        }
    }
    
    
};



module.exports = ProductController;