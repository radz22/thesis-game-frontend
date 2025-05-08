import { useState } from "react";
import { getHtmlQuestionAndAnswer } from "../services/question-services";

const QuestionHtmlHook = () => {
  const [questionData, setQuestionData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleGetQuestion = async (category, level) => {
    setLoading(true);
    try {
      const response = await getHtmlQuestionAndAnswer(category, level);
      setQuestionData(response);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { questionData, handleGetQuestion, loading };
};

export default QuestionHtmlHook;
