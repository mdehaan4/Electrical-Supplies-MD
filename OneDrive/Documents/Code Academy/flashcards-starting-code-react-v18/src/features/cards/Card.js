import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectCardById } from "./cardsSlice"; // Import your card selector

export default function Card({ id }) {
  // Use the selector to get the card by its ID
  const card = useSelector((state) => selectCardById(state, id)); // Correctly invoke the selector
  const [flipped, setFlipped] = useState(false);

  // Check if card exists to avoid errors
  if (!card) {
    return <div>Loading...</div>; // Optionally handle loading state
  }

  return (
    <li>
      <button className="card" onClick={() => setFlipped(!flipped)}>
        {flipped ? card.back : card.front}
      </button>
    </li>
  );
}
