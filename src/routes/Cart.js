const cartController = require ('../controller/CartController');
const router = require("express").Router();



//ADD To Cart
router.post("/add", cartController.addItemToCart);

//Update To Cart


module.exports = router;
