import Header from "../Components/QuizComponents/Header";
import Quiz from "../Components/QuizComponents/Quiz";
import Status from "../Components/QuizComponents/Status";
import StartScreen from "../Components/QuizComponents/StartScreen";
import Questions from "../Components/QuizComponents/Questions";
import NextButton from "../Components/QuizComponents/NextButton";
import Progress from "../Components/QuizComponents/Progress";
import FinishScreen from "../Components/QuizComponents/FinishScreen";
import Timer from "../Components/QuizComponents/Timer";
import Footer from "../Components/QuizComponents/Footer";
import QuestionPoints from "../Components/QuizComponents/QuestionPoints";
import { useQuiz } from "../contexts/QuizContext";
import "../styles/QuizPage.css";

function App() {
  const {
    questions,
    status,
    index,
    answer,
    score,
    isDark,
    highScore,
    numQuestions,
    maxScore,
    dispatch,
    // fetchQustions,
  } = useQuiz();

  // useEffect(() => {
  //   fetchQustions();
  // }, []);

  return (
    <div className={`container ${isDark ? "dark" : ""}`}>
      <Header dispatch={dispatch} isDark={isDark} />
      <Quiz>
        {(status === "loading" || status === "error") && (
          <Status status={status} />
        )}
        {status === "ready" && (
          <StartScreen numQuestions={numQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              numQuestions={numQuestions}
              maxScore={maxScore}
              index={index}
              answer={answer}
              score={score}
            />
            {/* <Questions
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            /> */}
            <Footer>
              <Timer dispatch={dispatch} numQuestions={numQuestions} />
              <QuestionPoints question={questions[index]} />
              <NextButton
                dispatch={dispatch}
                answer={answer}
                isDark={isDark}
                index={index}
                numQuestions={numQuestions}
              />
            </Footer>
            <Questions
              question={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
          </>
        )}
        {status === "finished" && (
          <FinishScreen
            score={score}
            maxScore={maxScore}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </Quiz>
    </div>
  );
}

export default App;
