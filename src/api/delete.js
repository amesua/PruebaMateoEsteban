import axios from "axios";

export const deleteService = async (serviceName, headersParams) => {
  try {
    const response = await axios.delete(
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
