import axios from "axios";

export const getService = async (serviceName, headersParams) => {
  try {
    const response = await axios.get(
      "https://waco-api.herokuapp.com" + serviceName,
      {
        "Content-Type": "application/json",
        headersParams,
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
};
