import React, { useState,useEffect } from 'react'
import "./Cart.css";
export const Cart = ({cart,setcart}) => {
  const [total,settotal]=useState(0);
  useEffect(()=>{
    settotal(cart.reduce((acc,curr)=>acc+parseInt(curr.amt),0))
  },[cart]);
  return (
    <>
    <h1 className='cart-heading'>Cart Products</h1>
    <div className='Cart-Container'>
      {cart.map((product)=>(<div className='cart-product' key="product.id">
         <div className="img">
          <img src={product.pic} alt="image"/>
         </div>
         <div className="card-product-details">
          <h3>{product.name}</h3>
          <p>Price is Rs {product.amt}</p>
         </div>
      </div>))}
    </div>
    <h2 className='cart-amt'>Total amount Rs: {total}</h2>
    </>
  )
}
