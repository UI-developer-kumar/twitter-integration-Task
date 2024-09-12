import { createSlice } from '@reduxjs/toolkit';

export const tweetsSlice = createSlice({
  name: 'tweets',
  initialState: [],
  reducers: {
    setTweets: (state, action) => {
      return action.payload;
    },
    addTweet: (state, action) => {
      state.push(action.payload);
    }
  }
});

export const { setTweets, addTweet } = tweetsSlice.actions;
export default tweetsSlice.reducer;