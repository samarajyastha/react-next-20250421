const { default: api } = require("./api");

async function getAllUsers() {
  return await api.get(`/api/users`);
}

async function updateUser(id, data) {
  return await api.put(`/api/users/${id}`, data);
}

async function uploadProfileImage(file) {
  return await api.put(`/api/users/profile/upload`, file);
}

export { updateUser, uploadProfileImage, getAllUsers };
