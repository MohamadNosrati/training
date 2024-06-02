import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteProduct from "./DeleteProduct";

const ProductsIndex = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      let data = await fetch("http://localhost:3000/products");
      let res = await data.json();
      setProducts(res);
      console.log(products);
    } catch (e) {
      console.log(e.message);
    }
  };
  const removeProduct = async (id) => {
    try {
      let data = await fetch(`http://localhost:3000/products/${id}`, {
        method: "DELETE",
      });
      let remainedProducts=products.filter((elem)=>elem.id!==id)
      setProducts(remainedProducts)
      // let res = await data.json();
      console.log(res);
      alert("dele te");
    } catch (e) {
      console.log(e.message);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="bg-dark text-white p-4 rounded my-5">
      <h1 className="text-center mb-5 text-white"></h1>
      <table className="table text-white">
        <thead>
          <tr className="text-center">
            <td>id</td>
            <td>image</td>
            <td>title</td>
            <td>description</td>
            <td>publish</td>
            <td>delete</td>
            <td>update</td>
          </tr>
        </thead>
        <tbody>
          {products?.map((item) => (
            <tr className="text-center" key={item.id}>
              <td>{item.id}</td>
              <td>
                <img
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    borderRadius: "100%",
                  }}
                  src={item.image}
                  alt="test"
                />
              </td>
              <td>{item.title}</td>
              <td>{item.description.substring(0, 100)}</td>
              <td>
                {item.publish ? (
                  <button className="btn btn-success">active</button>
                ) : (
                  <button className="btn btn-danger">DeActive</button>
                )}
              </td>
              <td>
                <button
                  onClick={() => removeProduct(item.id)}
                  className="btn btn-dark"
                >
                  delete
                </button>
              </td>
              <td>
                <Link to={`/admin/products/${item.id}/edit`}>
                  <button className="btn btn-warning text-white">update</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="mt-5">
        <Link to="/admin/products/create">
          <button className="btn btn-success">create product!</button>
        </Link>
      </div>
    </div>
  );
};
export default ProductsIndex;
