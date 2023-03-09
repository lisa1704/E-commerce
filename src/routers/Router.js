import React from "react";
import {Routes,Route} from 'react-router-dom';
import Cart from "../pages/Cart";
import Home from '../pages/Home';
import AdminProfile from '../pages/AdminProfile';
import AdminCustomerList from '../pages/AdminCustomerList'
import Shop from "../pages/Shop";
import SignUp from "../pages/SignUp"
import Login from "../pages/Login"
const Router = () =>{
     return (
     <Routes>
         <Route exact path='home' element={<Home/>}/>
         <Route exact path='shop' element={<Shop/>}/>
         <Route path='home/signup' element={<SignUp/>}/>
         <Route path='home/signup/login' element={<Login/>}/>
         <Route path='home/cart' element={<Cart/>}/>
         <Route path='admin/admin_customer_list' element={<AdminCustomerList/>}/>
         <Route exact path='admin' element={<AdminProfile/>}/>
     </Routes>
     )
}

export default Router;