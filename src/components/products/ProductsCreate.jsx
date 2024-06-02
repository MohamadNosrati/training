import React, { useRef, useState } from "react";
import { json, useNavigate } from "react-router-dom";

const ProductsCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [publish, setPublish] = useState(1);
  const titleRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  const publishRef = useRef();
  const navigate=useNavigate()
  const createProduct = async () => {
    try {
      let data = await fetch("http://localhost:3000/products", {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          title: title,
          description: description,
          image: image,
          publish: publish,
        }),
      });
      let res = await data.json();
      console.log(res);
      titleRef.current.value=""
      descriptionRef.current.value=""
      publishRef.current.value=1
      imageRef.current.value=""
      navigate("/admin/products")
    } catch (e) {
      console.log(e.message);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    createProduct();
  };
  return (
    <div className="bg-black p-5 col-10 mx-auto text-white">
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="title">title</label>
        <input
          ref={titleRef}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          className="form-control"
        />
        <label htmlFor="description">description</label>
        <textarea
          ref={descriptionRef}
          onChange={(e) => setDescription(e.target.value)}
          className="form-control"
        ></textarea>
        <label htmlFor="publish">publish</label>
        <select
          ref={publishRef}
          onChange={(e) => setPublish(e.target.value)}
          name=""
          id=""
          className="form-select"
        >
          <option value="1">active</option>
          <option value="0">DeActive</option>
        </select>
        <label htmlFor="image">image</label>
        <input
          ref={imageRef}
          onChange={(e) => setImage(e.target.value)}
          type="text"
          className="form-select"
        />
        <input type="submit" className="btn btn-success" />
      </form>
    </div>
  );
};

export default ProductsCreate;
