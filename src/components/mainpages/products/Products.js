import React, {useContext} from "react";
import {GlobalState} from "../../../GlobalState";
import ProductItem from "../utils/productItem/ProductItem";
import Loading from "../utils/loading/Loading";

function Products() {
    const state = useContext(GlobalState)
    const [products] = state.productsAPI.products
    const [isAdmin] = state.userApi.isAdmin


    return (
        <>
        <div className="products">
            {
                products.map(products =>{
                    return <ProductItem key={products._id} product={products}
                    isAdmin={isAdmin}
                    />
                })
            }
        </div>
    {products.length === 0 && <Loading />}
    </>
            )
}
export default Products