import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectQuizzes } from "./quizzesSlice"; // Import the quizzes selector

export default function Quizzes() {
  const quizzes = useSelector(selectQuizzes); // Use the quizzes selector

  return (
    <section>
      <h1>Quizzes</h1>
      {quizzes.map((quiz) => (
        <div key={quiz.id}>
          <Link to={`/quizzes/${quiz.id}`}>{quiz.name}</Link>
        </div>
      ))}
    </section>
  );
}
