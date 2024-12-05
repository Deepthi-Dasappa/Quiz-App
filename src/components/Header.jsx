import QuizLogo from "../assets/quiz-logo.png";

export default function Header() {
  return (
    <header className="text-center">
      <img
        src={QuizLogo}
        alt="Quiz logo"
        className="w-10 h-10 object-contain mx-auto my-4 drop-shadow-logo"
      />
      <h1 className="font-headerFontFamily font-extrabold text-4xl tracking-wide uppercase bg-clip-text text-transparent bg-gradient-to-tr from-violet-900 to-violet-200">
        React Quiz
      </h1>
    </header>
  );
}
