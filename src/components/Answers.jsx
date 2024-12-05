import { useRef } from "react";

export default function Answers({
  answers,
  selectedAnswer,
  answeredStatus,
  onAnswerSelect,
}) {
  const shuffledAnswers = useRef();

  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers" className="flex flex-col gap-4 my-4">
      {shuffledAnswers.current.map((answer) => {
        let cssClass = "";
        const isSelectedAnswer = selectedAnswer === answer;

        if (answeredStatus === "answered" && isSelectedAnswer) {
          cssClass = "selected";
        }

        if (
          (answeredStatus === "correct" || answeredStatus === "wrong") &&
          isSelectedAnswer
        ) {
          cssClass = answeredStatus;
        }
        console.log("answeredStatus", answeredStatus);

        return (
          <li key={answer} id="answer">
            <button
              onClick={() => onAnswerSelect(answer)}
              className={`w-[90%] md:w-[100%] font-answersButton text-sm md:text-base tracking-wide bg-sky-600 rounded-3xl p-1 md:p-1 text-black hover:bg-[#9d5af5] ${cssClass}`}
              disabled={answeredStatus !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
