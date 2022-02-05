import axios from "axios";

export const postService = (serviceName, params) => {
  try {
    const response = axios.post(
      "https://waco-api.herokuapp.com" + serviceName,
      {
        ...params,
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
