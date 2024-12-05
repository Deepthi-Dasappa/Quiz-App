import completeLogo from "../assets/quiz-complete.png";
import QUESTIONS_ANSWERS from "../questions.js";

export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => {
    return answer === null;
  });

  const skippedAnswerShare = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );

  const correctAnswers = userAnswers.filter((answer, index) => {
    return answer === QUESTIONS_ANSWERS[index].answers[0];
  });

  const correctAnswerShare = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );

  const wrongAnswerShare = 100 - skippedAnswerShare - correctAnswerShare;

  return (
    <div
      id="summary"
      className="w-[90%] md:w-[30%] my-8 mx-auto p-6 rounded-xl shadow-2xl shadow-black bg-quizCompletedBackgroundImage from-[#907ead] to-[#7450a6]"
      //   animate-slideInFromBottom
    >
      <h2 className="uppercase text-3xl text-center text-[#2f1739] font-semibold tracking-wider">
        Quiz Completed!!
      </h2>
      <img
        src={completeLogo}
        alt="quiz-completed-logo"
        className="w-20 h-20 object-contain rounded-full bg-[#c18cfa] p-2 border-2 drop-shadow-quizCompletedImageDropShadow border-purple-950 mx-auto mt-6"
      />
      <div
        id="summary-statistic"
        className="flex gap-3 p-6 text-center border-b-2 border-[#594276]"
      >
        <p className="flex flex-col">
          <span className="text-3xl text-[#594276]">{skippedAnswerShare}%</span>
          <span className="uppercase text-sm font-serif tracking-wide my-1 text-[#31253f]">
            Skipped
          </span>
        </p>
        <p className="flex flex-col">
          <span className="text-3xl text-[#594276]">{correctAnswerShare}%</span>
          <span className="uppercase text-sm font-serif tracking-wide my-1 text-[#31253f]">
            Answered Correct
          </span>
        </p>
        <p className="flex flex-col">
          <span className="text-3xl text-[#594276]">{wrongAnswerShare}%</span>
          <span className="uppercase text-sm font-serif tracking-wide my-1 text-[#31253f]">
            Answered Wrong
          </span>
        </p>
      </div>
      <ol className="text-center m-3">
        {userAnswers.map((answer, index) => {
          let cssClass = "";

          if (answer) {
            cssClass += ` ${
              answer === QUESTIONS_ANSWERS[index].answers[0]
                ? " text-green-900"
                : " text-red-900"
            }`;
          } else {
            cssClass += ` text-slate-300`;
          }

          return (
            <li key={index}>
              <h3 className="mt-8 mx-auto bg-[#d8cde8] border-none rounded-2xl px-2 py-1 w-7">
                {index + 1}
              </h3>
              <p className="question text-[#362e3f] mt-1 mb-1 mx-0 font-medium">
                {QUESTIONS_ANSWERS[index].text}
              </p>
              <p
                className={`user-answer mt-0 mb-4 text-black font-medium ${cssClass}`}
              >
                {answer ?? "skipped"}
              </p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
