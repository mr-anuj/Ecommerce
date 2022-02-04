
import axios from "axios"
import { API } from "../config"
import
 {
     ADD_TO_CART,REMOVE_FROM_CART
 } 
from"../constants/cartConstants"

export const addItemToCart=(id,quantity)=>async(dispatch,getState)=>{
    console.log(id,quantity)

    const {data} = await axios.get(`${API}/productdetails/${id}`)
    dispatch({
        type:ADD_TO_CART,
        payload:{
            product : data._id,
            name : data.product_name,
            price:data.product_price,
            image:data.product_image,
            stock:data.countInStock,
            quantity
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems)) // cart is recozige which reducer come from store and cartitem come from cartreducer
}