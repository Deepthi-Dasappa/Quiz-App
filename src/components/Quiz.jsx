import { useCallback, useState } from "react";
import QUESTIONS_ANSWERS from "../questions.js";

import Summary from "./Summary.jsx";

import Question from "./Question.jsx";

export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);

  const activeQuestion = userAnswers.length;

  const isQuizComplete = activeQuestion === QUESTIONS_ANSWERS.length;

  const handleAnswerClick = useCallback(function handleAnswerClick(answer) {
    // setAnsweredStatus("answered");
    setUserAnswers((previousAnswers) => {
      return [...previousAnswers, answer];
    });
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleAnswerClick(null);
  }, [handleAnswerClick]); //adding handleAnswerClick as dependency because handleAnswerClick depends on the state userAnswers indirectly.

  if (isQuizComplete) {
    return <Summary userAnswers={userAnswers} />;
  }

  return (
    <div
      id="quiz"
      className="w-[90%] md:w-[50%] my-10 mx-auto p-10 bg-gradient-to-tr from-[#3e2a60] to-[#321061] rounded-md shadow-lg shadow-slate-800 text-slate-200 text-center"
    >
      <Question
        key={activeQuestion}
        activeQuestionIndex={activeQuestion}
        onAnswerSelect={handleAnswerClick}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
