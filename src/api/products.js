import api from "./api";

async function getProducts() {
  return await api.get(`/api/products`);
}

async function getProductByUser() {
  return await api.get(`/api/products/users`);
}

async function getProductById(id) {
  return await api.get(`/api/products/${id}`);
}

async function getCategories() {
  return await api.get(`/api/products/categories`);
}

export { getProducts, getProductById, getProductByUser, getCategories };
