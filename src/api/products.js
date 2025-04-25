import axios from "axios";

async function fetchProducts(sort) {
  return await axios.get(
    `${import.meta.env.VITE_API_URL}/api/products?sort={"price": ${sort}}`
  );
}

export { fetchProducts };
