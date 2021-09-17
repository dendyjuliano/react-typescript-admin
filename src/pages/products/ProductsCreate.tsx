import React, { useState, useEffect, SyntheticEvent } from "react";
import Wrapper from "../../components/Wrapper";
import axios from "axios";
import { Redirect } from "react-router";
import ImageUpload from "../../components/ImageUpload";

const ProductsCreate = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [redirect, setRedirect] = useState(false);

  //   useEffect(() => {
  //     (async () => {
  //     })();
  //   }, []);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    const data = {
      title,
      description,
      image,
      price,
    };
    // console.log(data);
    await axios.post("product", data);
    setRedirect(true);
  };

  if (redirect) {
    return <Redirect to={"/products"} />;
  }

  return (
    <Wrapper>
      <h2>Add Products</h2>
      <hr />

      <form onSubmit={submit}>
        <div className="mb-3">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Description</label>
          <textarea
            className="form-control"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label>Image</label>
          <div className="input-group">
            <input
              className="form-control"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <ImageUpload uploaded={setImage} />
          </div>
        </div>

        <div className="mb-3">
          <label>Price</label>
          <input
            type="number"
            className="form-control"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-outline-primary">
          Save
        </button>
      </form>
    </Wrapper>
  );
};

export default ProductsCreate;
