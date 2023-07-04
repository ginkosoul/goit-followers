import axios from "axios";

axios.defaults.baseURL = "https://64a286e4b45881cc0ae549d5.mockapi.io";

export const getUsers = async () => {
  const { data } = await axios.get("/users");
  return data;
};
export const updateUser = async ({ id, isFollow, followers }) => {
  const { data } = await axios.put(`/users/${id}`, { isFollow, followers });
  return data;
};
