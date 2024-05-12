import React, { useContext, useState, useEffect } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'



const CartItems = () => {
  const {getTotalCartAmount ,all_product,cartItems,placeOrder,removeFromCart} = useContext(ShopContext);

const handlep = (e)=>{
  e.preventDefault();

  const updatedProducts = [];
  all_product.forEach(e => {
    if(cartItems[e.id]>0){
      console.log('Product:', e);
      if (e) {
        updatedProducts.push({ name: e.name, price: e.new_price });
      }
    }
  });

  const totalAmount = getTotalCartAmount();
  console.log('Submit button clicked');
  if( totalAmount=== ""){
  alert("please enter amount");
  }else{
    var options = {
      key: "rzp_test_5YeSUHMsYu7Xg4",
      key_secret:"r9VORt3meFUEGjixNHJAUs59",
      amount:  totalAmount*100,
      currency:"INR",
      name:"SANKAR AGENCIES",
      description:"",
      handler: async function(response){
        
        placeOrder(totalAmount, updatedProducts);
        alert("Success");
      },
      prefill: {
        name:"AKILESH",
        email:"akileshsankar12@gmail.com",
        contact:"9629036122"
      },
      notes:{
        address:"Razorpay Corporate office"
      },
      theme: {
        color:"#3399cc"
      }
    };
    var pay = new window.Razorpay(options);
    pay.open();
  }
}

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      
      {all_product.map((e,i)=>{
        if(cartItems[e.id]>0)
        {
          return <div key={i}>
          <div className="cartitems-format cartitems-format-main">
            <img src={e.image} alt="" className='carticon-product-icon' />
            <p>{e.name}</p>
            <p>Rs {e.new_price}</p>
            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
            <p>Rs {e.new_price*cartItems[e.id]}</p>
            <img className='cartitems-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}}alt="" />
          </div>
          <hr />
        </div>
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>
            Cart Totals
          </h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>Rs {getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <p>Shipping Fee</p>
              <p>With in the City Free</p>
            </div>
            <hr />
            <div className="cartitems-total-items">
              <h3>Total</h3>
              <h3>Rs {getTotalCartAmount()}</h3>
            </div>
          </div>
          <button onClick={handlep}>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
          <p>If you have a promo code, Enter it here</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>

      
    </div>
  )
}

export default CartItems
