import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QuizPage from "./Pages/QuizPage";
import HomePage from "./Pages/HomePage";
import { QuizProvider } from "./contexts/QuizContext";
import TodoPage from "./Pages/TodoPage";
import MemePage from "./Pages/MemePage";
import GamesPage from "./Pages/GamesPage";

function App() {
  return (
    <QuizProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="memes" element={<MemePage />} />
          <Route path="games" element={<GamesPage />} />
        </Routes>
      </BrowserRouter>
    </QuizProvider>
  );
}

export default App;
