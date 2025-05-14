import api from "./api";
import axios from "axios";
import config from "@/config";

async function createProduct(data) {
  return await api.post(`/api/products`, data);
}

async function getProducts() {
  return await axios.get(`${config.apiUrl}/api/products`);
}

async function getProductByUser() {
  return await api.get(`/api/products/users`);
}

async function getProductById(id) {
  return await axios.get(`${config.apiUrl}/api/products/${id}`);
}

async function getCategories() {
  return await axios.get(`${config.apiUrl}/api/products/categories`);
}

async function updateProduct(id, data) {
  return await api.put(`/api/products/${id}`, data);
}

export {
  createProduct,
  getCategories,
  getProductById,
  getProductByUser,
  getProducts,
  updateProduct,
};
