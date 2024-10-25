import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quizzes: [],
};

const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {
    addQuiz(state, action) {
      state.quizzes.push(action.payload);
    },
    updateTopicQuizIds(state, action) {
      const { topicId, quizId } = action.payload;
      const topic = state.topics.find(topic => topic.id === topicId); // Assuming you have topics in the state
      if (topic) {
        topic.quizIds.push(quizId); // Add quizId to the topic's quizIds array
      }
    },
    // Other reducers can be added here
  },
});

// Selector to get all quizzes
export const selectQuizzes = (state) => state.quizzes.quizzes;

// Export actions
export const { addQuiz, updateTopicQuizIds } = quizzesSlice.actions;

// Export the reducer
export default quizzesSlice.reducer;


