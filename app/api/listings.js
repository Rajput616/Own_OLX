import apiClient from "./client";

const endPoint = "/listings";

const getListings = () => {
  return apiClient.get(endPoint);
};

const addListings = () => {
  apiClient.post(endPoint, {});
};

export default {
  getListings,
  addListings,
};
