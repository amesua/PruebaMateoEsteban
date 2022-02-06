import axios from "axios";

export const putService = async (serviceName, params) => {
  try {
    const response = await axios.put(
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
