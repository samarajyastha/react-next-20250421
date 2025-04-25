import { useEffect } from "react";
import { useState } from "react";
import { fetchProducts } from "../api/products";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState(-1); // -1 => DESC

  useEffect(() => {
    fetchProducts(sort).then((response) => setProducts(response.data));
  }, [sort]);

  return (
    <div>
      <h1>Products page</h1>
      <table
        style={{
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Brand</th>
            <th>Category</th>
            <th onClick={() => setSort(sort == 1 ? -1 : 1)}>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
