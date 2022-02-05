import axios from "axios";

export const putService = (serviceName, params) => {
  try {
    const response = axios.put("https://waco-api.herokuapp.com" + serviceName, {
      ...params,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
