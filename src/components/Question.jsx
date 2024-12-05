import Answers from "./Answers.jsx";
import QuestionTimer from "./QuestionTimer.jsx";
import { useState } from "react";
import QUESTIONS_ANSWERS from "../questions.js";

export default function Question({
  activeQuestionIndex,
  onAnswerSelect,
  onSkipAnswer,
}) {
  const [answer, setAnswer] = useState({ selectedAnswer: "", isCorrect: null });
  let timer = 10000;
  function handleAnswerClick(answer) {
    setAnswer({ selectedAnswer: answer, isCorrect: null });

    if (answer.selectedAnswer) {
      timer = 1000;
    }

    if (answer.isCorrect !== null) {
      timer = 2000;
    }

    setTimeout(() => {
      setAnswer({
        selectedAnswer: answer,
        isCorrect: QUESTIONS_ANSWERS[activeQuestionIndex].answers[0] === answer,
      });
      setTimeout(() => {
        onAnswerSelect(answer);
      }, 2000);
    }, 1000);
  }

  let answeredStatus = "";

  if (answer.selectedAnswer && answer.isCorrect !== null) {
    answeredStatus = answer.isCorrect ? "correct" : "wrong";
  } else if (answer.selectedAnswer) {
    answeredStatus = "answered";
  }

  return (
    <div id="question">
      <QuestionTimer
        // key={timer}
        timeout={timer}
        onTimeout={answer.selectedAnswer === "" ? onSkipAnswer : null}
      />
      {/* Added key property to the QuestionTimer because the QuestionTimer component is not being re-created because it hasn't changed. It is still a part of the DOM. The only thing that's changed is the question text that's being displayed and the ansers that are displayed. The QuestionTimer component was there and is there, and therefore it's not unmounted, not remounted, therefore the timers and intervals in that component are not reset, but per our requirement the question timer should reset for every question. So the powerful trick to achieve this in React is to add a key prop to the QuestionTimer. key prop can actually be added to any element and any component. key is the built in prop React is looking for. 
      Key prop also has another purpose, whenever key prop changes on a component even if that component is not part of a list, whenever it changes React will destroy the old component instance and create a new one. So it will unmount and remount it  */}

      <h2 className="font-headerFontFamily font-medium tracking-wide text-base md:text-lg text-[#c1b2dd] my-2 md:my-5">
        {QUESTIONS_ANSWERS[activeQuestionIndex].text}
      </h2>
      <Answers
        answers={QUESTIONS_ANSWERS[activeQuestionIndex].answers}
        selectedAnswer={answer.selectedAnswer}
        answeredStatus={answeredStatus}
        onAnswerSelect={handleAnswerClick}
      />
    </div>
  );
}
