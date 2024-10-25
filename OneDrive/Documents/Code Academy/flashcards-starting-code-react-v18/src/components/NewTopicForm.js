import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import ROUTES from "../app/routes";
import { ALL_ICONS } from "../data/icons";
import { addTopic } from "../features/topics/topicsSlice";

export default function NewTopicForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length === 0) {
      return; // Prevent submission if the name is empty
    }

    dispatch(addTopic({
      id: uuidv4(), // Generate a unique ID for the topic
      name,         // Use the topic name from state
      icon          // Use the selected icon URL from state
    }));

    navigate(ROUTES.quizzesRoute()); // Redirect to quizzes after submission
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <h1 className="center">Create a new topic</h1>
        <div className="form-section">
          <input
            id="topic-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            placeholder="Topic Name"
          />
          <select
            id="topic-icon"
            value={icon}
            onChange={(e) => setIcon(e.currentTarget.value)}
          >
            <option value="">Select an Icon</option>
            {ALL_ICONS.map((iconObj) => (
              <option key={iconObj.url} value={iconObj.url}>
                {iconObj.name}
              </option>
            ))}
          </select>
          <button type="submit">Create Topic</button>
        </div>
      </form>
    </section>
  );
}


