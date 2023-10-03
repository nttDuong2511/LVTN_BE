import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation  } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import Footer from './component/layout/footer/footer.jsx';
// import Navbar from './component/layout/navbar/navbar.jsx';
// import Banner from './component/layout/Banner/Banner.jsx';
// import Title from './component/layout/title/title.jsx';
// import SectionAbout from './component/layout/SectionAbout/SectionAbout.jsx';
// import ProductCategories from './component/layout/body/ProductCategories/ProductCategories.jsx';
// import Mymenu from './component/layout/body/Mymenu/Mymenu.jsx';
// import FeaturedProducts from './component/layout/body/FeaturedProducts/FeaturedProducts.jsx';
// import BodyBanner from './component/layout/body/bodyBanner/bodyBanner.jsx';
// import SectionNum from './component/layout/body/sectionNum/sectionNum.jsx';
// import SectionBlog from './component/layout/body/sectionBlog/sectionBlog.jsx';
import Login from './component/layout/navbar/Account/login/login.jsx';
import MainMenu from './component/layout/mainMenu/mainMenu.jsx';
import ProductDetails from './component/layout/ProductDetails/ProductDetails.jsx';
import ShopCart from './component/layout/shopCart/shopCart.jsx';
import Abate from './component/layout/Abate/Abate.jsx';
// import Orders from './component/layout/Abate/Orders/Orders.jsx';
// import MenuConntent from './component/layout/subnav/menu/menuContent/menuContent.jsx';
// import SearchForm from './component/layout/searchbar/searchForm/searchForm.jsx';
// import AcountForm from './component/layout/navbar/Account/AcountForm/AcountForm.jsx';
// import EmptyCart from './component/layout/navbar/cart/CartForm/CartForm.jsx';
import Header from './component/layout/header/header.jsx';
import Body from './component/layout/body/Body.jsx';
import Register from './component/layout/navbar/Account/register/register.jsx';
import User from './component/admin/user/User';
import UserItem from './component/admin/user/UserItem';
import GetProduct from './component/admin/product/getProduct';
import GetProductItem from './component/admin/product/getProductItem';
import AddProduct from './component/admin/product/AdProduct';
import GetCategory from './component/admin/category/getCategory';
import GetCategories from './component/admin/category/getCategories';
import PutProduct from './component/admin/product/PutProduct';
import AdCategory from './component/admin/category/adCategory';
import PutCategory from './component/admin/category/putCategory';
import UpdateUser from './component/admin/user/UpdateUser';
import AdminPage from './component/admin/adminLayout/adminPage';


function App() {

  const location = useLocation();
  const [isUserItemPage, setIsUserItemPage] = useState(false);
  const [isProductItempage, setIsProductItempage] = useState(false);
  const [isPutProductpage, setIsPutProductpage] = useState(false);
  const [isCategorypage, setIsCategorypage] = useState(false);
  const [isPutCategorypage, setIsPutCategorypage] = useState(false);


  // const [isProductItemPage, setIsProductItemPage] = useState(false);
  // const [isProductPage, setIsProductPage] = useState(false);


  const isAbatePage = location.pathname === '/abate';
  const isAdminPage = location.pathname === '/adminPage';
  const isUserPage = location.pathname === '/user';
  const isProductPage = location.pathname === '/Product';
  const isAdProductPage = location.pathname === '/Product/add';
  const isCatePage = location.pathname === '/Category';
  const isAdCatetPage = location.pathname === '/Category/ad';



  // const isUserItemPage = location.pathname === '/user/:id';
  
  

  return (
    <>
      {!isAbatePage && !isUserPage && !isUserItemPage && !isProductPage && !isAdProductPage && !isCatePage && !isAdCatetPage && !isProductItempage && !isPutProductpage && !isCategorypage && !isPutCategorypage && !isAdminPage && <Header />}
          <Routes>
            <Route path ="/" element = {<Body/>}/>
            <Route path="/body" element={<Body/>}/>
            <Route path="/shopCart" element={<ShopCart/>}/>
            <Route path="/user" element={<User/>} />
            <Route path="/user/:id" element={<UserItem setIsUserItemPage={setIsUserItemPage}/>} />
            <Route path="/user/:id" element={<UpdateUser/>} />
            <Route path="/Product" element={<GetProduct/>} />
            <Route path="/Product/:id" element={<GetProductItem setIsProductItempage = {setIsProductItempage} />} />
            <Route path="/Product/add" element={<AddProduct />} />
            <Route path="/Product/Put/:id" element={<PutProduct setIsPutProductpage= {setIsPutProductpage} />} />
            <Route path="/Category" element={<GetCategory />} />
            <Route path="/Category/:id" element={<GetCategories setIsCategorypage ={setIsCategorypage} />} />
            <Route path="/Category/ad" element={<AdCategory />} />
            <Route path="/Category/put/:id" element={<PutCategory setIsPutCategorypage ={setIsPutCategorypage} />} />
            <Route path="/updateuser/:id" element={<UpdateUser/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/mainmenu" element={<MainMenu />}/>
            <Route path="/ProductDetails/:id" element = {<ProductDetails/>}/>
            <Route path ="/abate" element ={<Abate/>}/>
            <Route path = "/cartshop" element ={<ShopCart/>}/>
            <Route path = "/adminPage" element ={<AdminPage/>}/>


          </Routes>
        {!isAbatePage && !isUserPage && !isUserItemPage   && !isProductPage && !isAdProductPage && !isCatePage && !isProductItempage && !isAdCatetPage && !isPutProductpage && !isCategorypage && !isPutCategorypage && !isAdminPage && <Footer />}  

    </>

  );
}



export default App;


