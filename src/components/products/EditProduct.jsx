import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../Loading";

const EditProduct = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const findProduct = async () => {
    try {
      setLoading(true);
      let data = await fetch(`http://localhost:3000/products/${id}`);
      let res = await data.json();
      setProduct(res);
      console.log(res);
    } catch (e) {
      console.log(e.message);
    } finally {
      setLoading(false);
    }
  };
  const updateProduct = async () => {
    let data = await fetch(`http://localhost:3000/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(product),
    });
    let res = await data.json();
    navigate("/admin/products");
    console.log(res);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    updateProduct();
  };
  useEffect(() => {
    findProduct();
  }, [id]);

  if (loading) {
    return (
      <div>
        <Loading />;
      </div>
    );
  }
  if(product.id){
    return (
          <div>
      <h1>{id}</h1>
      <div className="bg-black p-5 col-10 mx-auto text-white">
        <form action="" onSubmit={handleSubmit}>
          <label htmlFor="title">title</label>
          <input
            value={product.title}
            onChange={(e) => setProduct({ ...product, title: e.target.value })}
            type="text"
            className="form-control"
          />
          <label htmlFor="description">description</label>
          <textarea
            onChange={(e) =>
              setProduct({ ...product, description: e.target.value })
            }
            value={product.description}
            className="form-control"
          ></textarea>
          <label htmlFor="publish">publish</label>
          <select
            onChange={(e) =>
              setProduct({ ...product, publish: e.target.value })
            }
            value={product.publish}
            name=""
            id=""
            className="form-select"
          >
            <option value="1">active</option>
            <option value="0">DeActive</option>
          </select>
          <label htmlFor="image">image</label>
          <input
            onChange={(e) => setProduct({ ...product, image: e.target.value })}
            value={product.image}
            type="text"
            className="form-select"
          />
          <input type="submit" className="btn btn-success" value={"edit"} />
        </form>
      </div>
    </div>
    )
  }
};
export default EditProduct;
