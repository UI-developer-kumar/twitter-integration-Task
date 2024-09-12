import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  query: '',
  suggestions: [],
  accounts: [
    { id: 1, name: 'Alice', hashtags: ['#developer', '#react'] },
    { id: 2, name: 'Bob', hashtags: ['#designer', '#ux'] },
    { id: 3, name: 'Charlie', hashtags: ['#developer', '#frontend'] }
  ]
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
      state.suggestions = state.accounts.filter(account =>
        account.name.toLowerCase().includes(state.query.toLowerCase()) ||
        account.hashtags.some(tag => tag.toLowerCase().includes(state.query.toLowerCase()))
      );
    }
  }
});

export const { setQuery } = searchSlice.actions;
export default searchSlice.reducer;