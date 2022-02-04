import React, { Fragment } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../actions/cartActions";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart); // cart is form store reducer cart

  
  const increaseQty=(id,quantity,stock)=>{
      const newQuantity = quantity+1
      if(newQuantity>stock){
        return
      }
     
    dispatch(addItemToCart(id,newQuantity))
  }


  const decreaseQty=(id, quantity)=>{
      const newOty = quantity-1
      if(newOty < 1)
      return
      dispatch(addItemToCart(id,newOty))
  }
  return (
    <>
      <Navbar />
      {cartItems.length === 0 ? (
        <h2 className="mt-5 text-danger text-center">Your cart is Empty</h2>
      ) : (
        <>
          <div className="container">
            <div className="row d-flex justify-content-between mt-5 mb-3">
              <h2 className="text-center">Your Cart Items</h2>
              <div className="col-md-8 shadow p-2">
                {cartItems.map((item, i) => (
                  <Fragment key={i}>
                    <hr />
                    <div className="row align-items-center">


                  
                    <div className="col-3">
                      <img
                        src={`http://localhost:5000/${item.image}`}
                        alt={item.name}
                        width="50"
                      />
                    </div>
                    <div className="col-3">
                      <b>
                        <span>{item.name}</span>
                      </b>
                    </div>
                    <div className="col-2 text-warning">Rs.{item.price}</div>
                    <div className="col-3">
                        <div className="d-flex">
                            <button onClick={()=>decreaseQty(item.product, item.quantity)}className="btn btn-danger">-</button> &nbsp;
                            <input type="number" value={item.quantity} readOnly
                            className="form-control border-0"/>
                            &nbsp;
                            <button onClick={()=>increaseQty(item.product, item.quantity,item.stock)} className="btn btn-primary">+</button>
                        </div>
                    </div>
                    <div className="col-1">
                      <button className="btn btn-danger">
                      <i className="bi bi-trash"></i>
                      </button>
                    </div>
                    </div>
                    <hr/>
                  </Fragment>
                ))}
              </div>
              <div className="col-md-3">
                <div className="shadow p-2">
                  <h5>Cart Summary</h5>
                  <hr />
                  <span>
                    <b>Units:</b> 1(Units)
                  </span>
                  <br />
                  <span>
                    <b>Total:</b> Rs.30000
                  </span>
                  <hr />
                  <button className="btn btn-warning">Check Out</button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </>
  );
};

export default Cart;
