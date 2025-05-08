import axios from "axios";
export const verifyAccountService = async (token) => {
  try {
    const response = await axios.get(
      `https://techtales-backend-8u6e.onrender.com/api/verify/account/${token}`
    );

    console.log(token);

    return response.data;
  } catch (error) {
    throw error;
  }
};
