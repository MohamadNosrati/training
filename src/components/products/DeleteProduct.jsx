import React from "react";

const DeleteProduct = ({ id }) => {
  const removeProduct = async () => {
    try {
      let data = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });
      // let res = await data.json();
      console.log(res);
      alert("dele te")
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <button onClick={removeProduct} className="btn btn-dark">
      delete
    </button>
  );
};

export default DeleteProduct;
