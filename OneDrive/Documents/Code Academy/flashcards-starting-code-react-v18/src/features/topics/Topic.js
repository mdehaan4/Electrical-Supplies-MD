import React from "react";
import { useSelector } from "react-redux";
import { selectQuizzes } from "../quizzes/quizzesSlice"; // Import the quizzes selector
import { selectTopics } from "./topicsSlice"; // Import the topics selector

export default function Topic() {
  const topics = useSelector(selectTopics); // Get all topics
  const quizzes = useSelector(selectQuizzes); // Get all quizzes

  return (
    <section>
      <h1>Topics</h1>
      {Object.values(topics).map((topic) => (
        <div key={topic.id}>
          <h2>{topic.name}</h2>
          {/* Check if topic.icon exists and render it properly */}
          {topic.icon && (
            <img src={topic.icon.url} alt={topic.icon.name} /> // Use url and name properties of the icon
          )}
          <h3>Quizzes:</h3>
          <ul>
            {quizzes
              .filter((quiz) => quiz.topicId === topic.id)
              .map((quiz) => (
                <li key={quiz.id}>{quiz.name}</li>
              ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
