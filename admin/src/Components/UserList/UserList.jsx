import React, { useEffect, useState } from "react";
import "./UserList.css";
import cross_icon from '../../assets/cross_icon.png'

const UserList = () => {
  const [allusers, setAllUsers] = useState([]);
  const [allproducts, setAllProducts] = useState([]);
  

  const fetchInfo = () => { 
    fetch('http://localhost:4000/allusers') 
            .then((res) => res.json()) 
            .then((data) => setAllUsers(data))

    fetch('http://localhost:4000/allproducts') 
            .then((res) => res.json()) 
            .then((data) => setAllProducts(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])

    const removeUser = async (email) => {
      await fetch('http://localhost:4000/removeuser', {
      method: 'POST',
      headers: {
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({email:email}),
    })

    fetch('http://localhost:4000/allusers') 
    .then((res) => res.json()) 
    .then((data) => setAllUsers(data))

    }

  return (
    <div className="listproduct">
      <h1>All Users List</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th>User</th>
            <th>E-mail</th>
            <th>Cart</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {allusers.map((user) => (
            <tr key={user.email}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {allproducts.map((product, index) => (
                  user.cartData[product.id]>0?
                  <span key={index}>
                    {product.name}: ₹{product.new_price}
                    {index !== user.cartData.length - 1 && ", "}
                  </span>:
                  <span>No Products</span>
                ))}
              </td>
              <td><img className="listproduct-remove-icon" onClick={() => removeUser(user.email)} src={cross_icon} alt="Remove" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
