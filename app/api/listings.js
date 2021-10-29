import apiClient from "./client";

const endPoint = "/listings";

const getListings = () => {
  return apiClient.get(endPoint);
};

const addListings = (listing, onUploadProgress) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category);
  data.append("description", listing.description);
  listing.images.forEach((image, index) => {
    data.append("images", {
      name: "image" + " " + index,
      type: "image/jpeg",
      uri: image,
    });
  });

  return apiClient.post(endPoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

export default {
  getListings,
  addListings,
};