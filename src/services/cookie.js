import axios from "axios";

export const getCookie = async () => {
  try {
    const response = await axios.get(
      "https://techtales-backend-8u6e.onrender.com/api/cookie",
      {
        withCredentials: true,
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching cookies:", error);
    throw error;
  }
};
