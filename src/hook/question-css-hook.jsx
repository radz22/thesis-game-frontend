import { useState } from "react";
import { getCssQuestionAndAnswer } from "../services/question-services";

const QuestionCssHook = () => {
  const [questionData, setQuestionData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleGetQuestion = async (category, level) => {
    setLoading(true);
    try {
      const response = await getCssQuestionAndAnswer(category, level);
      setQuestionData(response);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { questionData, handleGetQuestion, loading };
};

export default QuestionCssHook;
