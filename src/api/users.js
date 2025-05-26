import api from "./api";

async function getAllUsers() {
  return await api.get(`/api/users`);
}

async function getUserById(id) {
  return await api.get(`/api/users/${id}`);
}

async function deleteUser(id) {
  return await api.delete(`/api/users/${id}`);
}

async function updateUser(id, data) {
  return await api.put(`/api/users/${id}`, data);
}

async function uploadProfileImage(file) {
  return await api.put(`/api/users/profile/upload`, file);
}

export { updateUser, uploadProfileImage, getAllUsers, getUserById, deleteUser };
