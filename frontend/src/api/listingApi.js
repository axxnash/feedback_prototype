import api from "./axios";

export const getListings = async (params = {}) => {
  const response = await api.get("/listings", { params });
  return response.data;
};

export const getMyListings = async () => {
  const response = await api.get("/listings/vendor/my-listings");
  return response.data;
};

export const createListing = async (formData) => {
  const response = await api.post("/listings", formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  return response.data;
};

export const updateListing = async (id, formData) => {
  const response = await api.put(`/listings/${id}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  });
  return response.data;
};

export const deleteListing = async (id) => {
  const response = await api.delete(`/listings/${id}`);
  return response.data;
};

export const claimListing = async (listingId) => {
  const response = await api.post(`/claims/${listingId}`);
  return response.data;
};

export const checkoutDiscountedListings = async (listingIds) => {
  const response = await api.post("/claims/checkout", { listingIds });
  return response.data;
};

export const getNearbyListings = async (params) => {
  const response = await api.get("/matching/nearby", { params });
  return response.data;
};

export const getAiRecommendation = async (payload) => {
  const response = await api.post("/matching/ai", payload);
  return response.data;
};
