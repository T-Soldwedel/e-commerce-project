import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
import "./Orders.css"

export default function Orders() {
  const { user } = useContext(MyContext);
  return (
    <div className="orders-container">
      
      <div >
      <h4>Your Orders:</h4>
        {user &&
          user.orders &&
          user.orders.map((order) => {
            return (
              <div className="single-order-container" key={order._id}>
                 <p>{order._id}</p>
                <div className="single-order">
                  {order.products.map((product) => {
                    return (
                      <div  key={product._id}>
                        <img src={product.img} alt="" />
                        <p>{product.title}</p>
                        <p>{product.price}€</p>
                      </div>
                    );
                  })}
                </div>
                <h5>Total Price for this order: {order.totalPrice}€</h5>
              </div>
            );
          })}
      </div>
    </div>
  );
}
