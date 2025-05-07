import axios from "axios";

export const getQuestion = async (category, level) => {
  try {
    const response = await axios.get(
      `https://techtales-backend-8u6e.onrender.com/api/question-answer/${category}/${level}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getHtmlQuestionAndAnswer = async (category, level) => {
  try {
    const response = await axios.get(
      `https://techtales-backend-8u6e.onrender.com/api/html/${category}/${level}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getCssQuestionAndAnswer = async (category, level) => {
  try {
    const response = await axios.get(
      `https://techtales-backend-8u6e.onrender.com/api/css/${category}/${level}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getJsQuestionAndAnswer = async (category, level) => {
  try {
    const response = await axios.get(
      `https://techtales-backend-8u6e.onrender.com/api/js/${category}/${level}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
