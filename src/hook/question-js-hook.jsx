import { useState } from "react";
import { getJsQuestionAndAnswer } from "../services/question-services";

const useQuestionJsHook = () => {
  const [questionData, setQuestionData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleGetQuestion = async (category, level) => {
    setLoading(true);
    try {
      const response = await getJsQuestionAndAnswer(category, level);
      setQuestionData(response);
    } catch (error) {
      console.error("Error fetching question:", error);
    } finally {
      setLoading(false);
    }
  };

  return { questionData, handleGetQuestion, loading };
};

export default useQuestionJsHook;
