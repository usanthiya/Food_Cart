import React from 'react'
import "./Product.css";
export const Product = ({product,cart,setcart}) => {
  const addcart=()=>{
    setcart([... cart, product])
  }
  const removecart=()=>{
  setcart(cart.filter((c)=>c.id!==product.id))
  }
  return (
    <div className='product'>
        <div className="img">
            <img src={product.pic} alt={product.name}/>
        </div>
       <div className="product-details">
       <h3>{product.name}</h3>
       <p>Price is: {product.amt}</p>
       {cart.includes(product)?<button className='rmvbtn' onClick={removecart}>
        Remove from Cart
       </button>:<button onClick={addcart}>Add to Cart</button>}
       </div>
    </div>
  )
}
