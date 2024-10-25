import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topics: {},
};

const topicsSlice = createSlice({
  name: 'topics',
  initialState,
  reducers: {
    addTopic(state, action) {
      const { id, name, icon } = action.payload;
      state.topics[id] = {
        id,
        name,
        icon,
        quizIds: [], // Initialize with an empty array
      };
    },
    // Add an action to update the topic's quizIds when a quiz is added
    updateTopicQuizIds(state, action) {
      const { topicId, quizId } = action.payload;
      if (state.topics[topicId]) {
        state.topics[topicId].quizIds.push(quizId);
      }
    },
  },
});

// Export actions
export const { addTopic, updateTopicQuizIds } = topicsSlice.actions;

// Selector to get the topics
export const selectTopics = (state) => state.topics.topics;

// Export the reducer
export default topicsSlice.reducer;
