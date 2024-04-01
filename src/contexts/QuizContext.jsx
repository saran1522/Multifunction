import React, { createContext, useContext, useEffect, useReducer } from "react";

const QuizContext = createContext();

const API_KEY = import.meta.env.VITE_API_KEY;

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  score: 0,
  isDark: false,
  highScore: 0,
  topic: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return {
        ...state,
        questions: action.payload,
        status: "ready",
      };
    case "dataFailed":
      return {
        ...state,
        status: "error",
      };
    case "start":
      return {
        ...state,
        status: "active",
      };
    case "answered": {
      const currQuestion = state.questions.at(state.index);
      const allAnswers = Object.keys(currQuestion.correct_answers).map(
        (key) => currQuestion.correct_answers[key]
      );
      const correctAnswer = allAnswers.findIndex((ans) => ans === "true");

      return {
        ...state,
        answer: action.payload,
        score:
          action.payload === correctAnswer ? state.score + 10 : state.score,
      };
    }

    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };
    case "finish":
      //   console.log("insided finish payload after time over");
      return {
        ...state,
        status: "finished",
        highScore:
          state.score > state.highScore ? state.score : state.highScore,
      };
    case "restart":
      return {
        ...state,
        status: "active",
        index: 0,
        answer: null,
        score: 0,
      };

    case "toggle":
      return {
        ...state,
        isDark: !state.isDark,
      };
    default:
      return new Error("unkown action");
  }
}

function QuizProvider({ children }) {
  const [
    { questions, status, index, answer, score, isDark, highScore },
    dispatch,
  ] = useReducer(reducer, initialState);
  const numQuestions = questions.length;
  const maxScore = questions.reduce(
    (total, curr) =>
      total +
      (curr.difficulty === "Easy"
        ? 10
        : curr.difficulty === "Medium"
        ? 15
        : 20),
    0
  );

  useEffect(() => {
    async function fetchQustions() {
      try {
        const response = await fetch(
          `https://quizapi.io/api/v1/questions?apiKey=${API_KEY}`
        );
        const data = await response.json();
        dispatch({ type: "dataReceived", payload: data });
        console.log(data);
      } catch (err) {
        dispatch({ type: "dataFailed" });
        console.error(err);
      }
    }
    fetchQustions();
  }, []);

  return (
    <QuizContext.Provider
      value={{
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
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
}

export { QuizProvider, useQuiz };
