import React, { useEffect, useState } from "react";
import "./OrderList.css";

const ListProduct = () => {
  const [allorders, setAllOrders] = useState([]);

  const fetchInfo = () => { 
    fetch('http://localhost:4000/allorders') 
            .then((res) => res.json()) 
            .then((data) => setAllOrders(data))
    }

    useEffect(() => {
      fetchInfo();
    }, [])

  return (
      <div className="listproduct">
      <h1>All Orders List</h1>
      <table className="order-table">
        <thead>
          <tr>
            <th>Username</th>
            <th>Products</th>
            <th>Amount</th>
            <th>Paid</th>
          </tr>
        </thead>
        <tbody>
          {allorders.map((order) => (
            <tr key={order.id}>
              <td>{order.user}</td>
              <td>
                {order.products.map((product, index) => (
                  <span key={index}>
                    {product.name}: ₹{product.price}
                    {index !== order.products.length - 1 && ", "}
                  </span>
                ))}
              </td>
              <td>₹{order.amount}</td>
              <td>Paid</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      );
};

export default ListProduct;