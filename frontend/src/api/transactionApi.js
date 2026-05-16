import api from "./axios";

export const getTransactionHistory = async () => {
  const response = await api.get("/transactions/history");
  return response.data;
};

export const updateTransactionStatus = async (transactionId, status) => {
  const response = await api.put(`/transactions/${transactionId}/status`, { status });
  return response.data;
};

export const verifyPickupCode = async (transactionId, pickupCode) => {
  const response = await api.post(`/transactions/${transactionId}/verify-code`, { pickupCode });
  return response.data;
};
