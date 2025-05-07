import axios from "axios";
export const getLeaderBoard = async () => {
  try {
    const response = await axios.get(
      "https://techtales-backend-8u6e.onrender.com/api/leaderboard"
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
export const createLeaderBoardAndLevelPoints = async (
  category,
  level,
  points
) => {
  try {
    const response = await axios.post(
      "https://techtales-backend-8u6e.onrender.com/api/leaderboard/create-point",
      {
        category: category,
        level: level,
        points: points,
      },
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
