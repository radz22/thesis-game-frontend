import axios from "axios";
export const getLevelByUser = async (category) => {
  try {
    const response = await axios.get(
      `https://techtales-backend-8u6e.onrender.com/api/level/${category}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
};
export const getLevel = async (category, level) => {
  try {
    const response = await axios.post(
      "https://techtales-backend-8u6e.onrender.com/api/level",
      {
        category: category,
        level: level,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
};
export const validateLevel = async (category, level) => {
  try {
    const response = await axios.post(
      "https://techtales-backend-8u6e.onrender.com/api/level/validate",
      { category, level },
      { withCredentials: true }
    );
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
    throw error;
  }
};
