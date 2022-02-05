import axios from "axios";

export const deleteService = (serviceName, headersParams) => {
  try {
    const response = axios.delete(
      "https://waco-api.herokuapp.com" + serviceName,
      {
        headersParams,
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
