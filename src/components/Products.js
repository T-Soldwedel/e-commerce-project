import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
import "./Products.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faStar } from "@fortawesome/free-solid-svg-icons";

const iconCart = <FontAwesomeIcon icon={faCartPlus} />;
const iconStarBlack = <FontAwesomeIcon icon={faStar} />;

export default function Products() {
  const { products, setCart, cart, user } = useContext(MyContext);
  const addItemIntoCart = (product) => {
    const foundItem = cart.find((item) => item._id === product._id);
    if (foundItem) {
      foundItem.quantity++;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <div className="products">
        {products.map((product) => {
          return (
            <div key={product._id} className="flex-container">
              <div className="single-product">
                <img src={product.img} alt="" />
                <p>{product.title}</p>
                <p>{product.author}</p>
                <p>$ {product.price}</p>
                <div className="stars">
                  <span>{iconStarBlack}</span>
                  <span>{iconStarBlack}</span>
                  <span>{iconStarBlack}</span>
                  <span>{iconStarBlack}</span>
                  <span style={{ color: "white" }}>{iconStarBlack}</span>
                </div>
              </div>
              <div>
                <button className="cartButton" onClick={() => addItemIntoCart(product)}>
                  Add To Cart {""}
                  <span>{iconCart}</span>
                </button>
                {user && user.role === "admin" && <button>delete</button>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
