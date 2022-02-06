import axios from "axios";

export const postService = async (serviceName, params) => {
  try {
    const response = await axios.post(
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
