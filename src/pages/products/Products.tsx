import axios from "axios";
import React, { useEffect, useState } from "react";
import Wrapper from "../../components/Wrapper";
import { Link } from "react-router-dom";
import { Product } from "../../models/product";

import Paginator from "../../components/Paginator";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [lastPage, setLastPage] = useState(0);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`product?page=${page}`);
      setProducts(data.data);
      setLastPage(data.meta.last_page);
    })();
  }, [page]);

  const del = async (id: number) => {
    if (window.confirm("Are you sure to deleted this data")) {
      await axios.delete(`users/${id}`);
      setProducts(products.filter((p: Product) => p.id !== id));
    }
  };

  return (
    <Wrapper>
      <h2>Product</h2>

      <div className="pt-3 pb-2 mb-3 border-bottom">
        <Link to={"/products/create"} className="btn btn-outline-primary">
          Add Product
        </Link>
      </div>

      <div className="table-responsive">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: Product) => {
              return (
                <tr key={product.id}>
                  <td>{product.id}</td>
                  <td>
                    <img src={product.image} width={50} />
                  </td>
                  <td>{product.title}</td>
                  <td>{product.description}</td>
                  <td>{product.price}</td>
                  <td>
                    <div className="btn-group mr-2">
                      <Link
                        to={`/products/${product.id}/edit`}
                        className="btn btn-outline-primary"
                      >
                        Edit
                      </Link>
                      <a
                        href="#"
                        className="btn btn-outline-danger"
                        onClick={() => del(product.id)}
                      >
                        Delete
                      </a>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <Paginator page={page} lastPage={lastPage} pageChanged={setPage} />
    </Wrapper>
  );
};

export default Products;
