import React from "react";
import { useSelector } from "react-redux"; // Import the useSelector hook
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";
// Import the selector from your topics slice
import { selectTopics } from "../../features/topics/topicsSlice"; 

export default function Topics() {
  // Use the selector to get topics from the state
  const topics = useSelector(selectTopics);

  return (
    <section className="center">
      <h1>Topics</h1>
      <ul className="topics-list">
        {Object.values(topics).length === 0 ? (
          <p>No topics available.</p>
        ) : (
          Object.values(topics).map((topic) => (
            <li className="topic" key={topic.id}>
              <Link to={ROUTES.topicRoute(topic.id)}>
                <div className="topic-icon">
                  <img src={topic.icon} alt={`${topic.name} icon`} />
                </div>
                <div className="topic-name">{topic.name}</div>
              </Link>
            </li>
          ))
        )}
      </ul>
      <Link to={ROUTES.newTopicRoute()} className="button">
        Create New Topic
      </Link>
    </section>
  );
}


