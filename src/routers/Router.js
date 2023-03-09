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
        <Route path='/' element={<Home/>}/>
         <Route exact path='home' element={<Home/>}/>
         <Route exact path='shop' element={<Shop/>}/>
         <Route path='signup' element={<SignUp/>}/>
         <Route path='signup/login' element={<Login/>}/>
         <Route path='home/cart' element={<Cart/>}/>
         <Route path='admin/admin_customer_list' element={<AdminCustomerList/>}/>
         <Route exact path='admin' element={<AdminProfile/>}/>
     </Routes>
     )
}

export default Router;