import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectQuizzes } from "./quizzesSlice"; // Import the quizzes selector
import Card from "../cards/Card"; // Import the Card component

export default function Quiz() {
  const { quizId } = useParams();
  const quizzes = useSelector(selectQuizzes); // Get all quizzes from state
  const quiz = quizzes.find((quiz) => quiz.id === quizId); // Find the quiz by ID

  if (!quiz) {
    return <h2>Quiz not found</h2>;
  }

  return (
    <section>
      <h1>{quiz.name}</h1>
      {/* Render quiz details here */}
      <ul>
        {quiz.cardIds.map((cardId) => (
          <li key={cardId}>
            {/* Render the Card component for each card ID */}
            <Card id={cardId} />
          </li>
        ))}
      </ul>
    </section>
  );
}

