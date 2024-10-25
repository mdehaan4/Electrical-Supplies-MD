// src/features/cards/cardsSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Initial state with a cards object to hold each card by ID
const initialState = {
  cards: {},
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action) => {
      const { id, front, back } = action.payload;
      state.cards[id] = { front, back };
    },
  },
});

// Export the action to use it in components
export const { addCard } = cardsSlice.actions;

// Selector to get a card by ID
export const selectCardById = (state, id) => state.cards.cards[id];

// Export the reducer to add to the store
export default cardsSlice.reducer;
