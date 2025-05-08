import axios from "axios";
export const signinServices = async (data) => {
  try {
    const response = await axios.post(
      `https://techtales-backend-8u6e.onrender.com/api/signin`,
      data,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const signupServices = async (data) => {
  try {
    const response = await axios.post(
      `https://techtales-backend-8u6e.onrender.com/api/signup`,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const forgotPasswordService = async (email) => {
  try {
    const response = await axios.post(
      `https://techtales-backend-8u6e.onrender.com/api/forgot-password`,
      email
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const resetPasswordService = async (data) => {
  try {
    const response = await axios.post(
      `https://techtales-backend-8u6e.onrender.com/api/reset-password`,
      {
        newpassword: data.newpassword,
        token: data.token,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const logoutServices = async () => {
  try {
    const response = await axios.post(
      `https://techtales-backend-8u6e.onrender.com/api/logout`,
      {},
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const profileService = async () => {
  try {
    const response = await axios.get(
      `https://techtales-backend-8u6e.onrender.com/api/profile`,

      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const updateProfile = async (id, username) => {
  try {
    const response = await axios.put(
      `https://techtales-backend-8u6e.onrender.com/update/profile/${id}`,
      {
        username: username,
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
