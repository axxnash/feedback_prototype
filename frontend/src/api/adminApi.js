import api from "./axios";

export const getAdminUsers = async () => {
  const response = await api.get("/admin/users");
  return response.data;
};

export const updateApprovalStatus = async (id, approvalStatus) => {
  const response = await api.put(`/admin/users/${id}/approval`, { approvalStatus });
  return response.data;
};

export const getAdminListings = async () => {
  const response = await api.get("/admin/listings");
  return response.data;
};

export const getAdminTransactions = async () => {
  const response = await api.get("/admin/transactions");
  return response.data;
};
