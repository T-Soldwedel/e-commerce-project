import React, { useContext } from "react";
import { MyContext } from "../context/MyContext";
import toast, { Toaster } from "react-hot-toast";
import "./AdminPanel.css";

export default function AdminPanel() {
  const { setProducts, products } = useContext(MyContext);

  const addingNewProduct = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    fetch("/products", {
      method: "POST",
      headers: { token: localStorage.getItem("token") },
      body: data,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
        toast.success("Successfully added product!");
      } else {
        toast.error(result.message);
      }
        setProducts([result.data, ...products]);
      });
  };

  return (
    <div className="admin-panel-container">
      <h4>Admin Panel</h4>
      <Toaster position="top-center" />
      <div className="add-products">
        <h5>Add New Product</h5>
        <form onSubmit={addingNewProduct}>
          <label>
            Title: <input type="text" name="title"></input>
          </label>
          <br />
          <label>
            Price: <input type="number" name="price"></input>
          </label>
          <br />
          <label>
            <input type="file" name="image" />{" "}
          </label>
          <br />
          <br />
          <button className="admin-button">Add New Product</button>
        </form>
      </div>

      <h5>Show All Orders:</h5>

      <h5>Show All Users:</h5>
    </div>
  );
}
