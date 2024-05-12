import React, { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from '../../assets/cross_icon.png'

const ListProduct = () => {
  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = () => { 
    fetch('http://localhost:4000/allproducts') 
            .then((res) => res.json()) 
            .then((data) => setAllProducts(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])

    const removeProduct = async (id) => {
      await fetch('http://localhost:4000/removeproduct', {
      method: 'POST',
      headers: {
        Accept:'application/json',
        'Content-Type':'application/json',
      },
      body: JSON.stringify({id:id}),
    })

    fetch('http://localhost:4000/allproducts') 
    .then((res) => res.json()) 
    .then((data) => setAllProducts(data))

    }

  return (
    <div className="listproduct">
      <h1>All Products List</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th>Products</th>
            <th>Title</th>
            <th>Old Price</th>
            <th>New Price</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {allproducts.map((product, index) => (
            <tr key={index}>
              <td><img className="listproduct-product-icon" src={product.image} alt="" /></td>
              <td>{product.name}</td>
              <td>₹{product.old_price}</td>
              <td>₹{product.new_price}</td>
              <td>{product.category}</td>
              <td><img className="listproduct-remove-icon" onClick={() => removeProduct(product.id)} src={cross_icon} alt="Remove" /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListProduct;
