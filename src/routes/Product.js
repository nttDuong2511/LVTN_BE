const  ProductController  = require ("../controller/ProductController");
const router = require("express").Router();


//ADD Product
router.post("/ad", ProductController.addProduct);

//GET ALL Product
router.get("/", ProductController.getAllProduct);

//GET One Product
router.get("/:id", ProductController.getOneProduct);

//UPDATE Product
router.put("/:id",ProductController.updateProduct);

//DELETE Product
router.delete("/:id", ProductController.deleteProduct);

module.exports = router;