const path = require('path');
const express = require('express'); // Thêm dòng này để require thư viện express
const morgan = require('morgan');
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require ("cookie-parser");
const dotenv = require("dotenv");
const app = express();
const port = 3000;
const ProductCategoriesRoute = require("./routes/ProductCategories");
const ProductRoute = require("./routes/Product");
const UserRoute = require("./routes/User");
const CartRoute = require("./routes/Cart");

const db = require('./config/database');
// const route = require ('./routes/');



//Connect database
db.connect();
app.use(bodyParser.json({limit:"500mb"}));
app.use(cors());
app.use(morgan("common"));
app.use(cookieParser());

//ROUTES
app.use("/v1/ProductCategories", ProductCategoriesRoute);
app.use("/v1/Product", ProductRoute);
app.use('/v1/User', UserRoute);
app.use('/v1/Cart', CartRoute);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
