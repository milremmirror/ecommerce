import React, {useContext} from "react";
import {GlobalState} from "../../GlobalState";
import {Routes, Route} from "react-router-dom";
import Products from "./products/Products";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Cart from "./cart/Cart";
import NotFound from "./utils/notFound/NotFound";
import DetailProduct from "./detailProduct/DetailProduct";
import OrderHistory from "./history/OrderHistory";
import OrderDetails from "./history/OrderDetails";
import Categories from "./categories/Categories";



function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userApi.isLogged
    const [isAdmin] = state.userApi.isAdmin

    return (
        <Routes>

            <Route  path={"/"} element={<Products />} />
            <Route  path={"/detail/:id"} element={<DetailProduct />} />


            <Route  path={"/login"} element={isLogged? NotFound : <Login /> }/>
            <Route  path={"/register"} element={isLogged? NotFound : <Register />}/>

            <Route  path={"/category"} element={isAdmin?  <Categories /> : <NotFound />}/>

            <Route  path={"/history"} element={isLogged?  <OrderHistory /> : <NotFound />}/>
            <Route  path={"/history/:id"} element={isLogged?  <OrderDetails /> : <NotFound />}/>


            <Route  path={"/cart"} element={<Cart />}/>


            <Route path={"/*"} element={<NotFound/>} />

        </Routes>
    )
}
export default Pages