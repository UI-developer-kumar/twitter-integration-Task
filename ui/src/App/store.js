import { configureStore } from '@reduxjs/toolkit'
import { authApi } from '../services/auth.service'
import { setupListeners } from '@reduxjs/toolkit/query'
import loginReducer from '../features/user/loginSlice'
import tweetsReducer from '../features/user/tweetSlice'
import searchReducer from '../features/user/searchSlice'

export const store = configureStore({
  reducer: {
    auth:loginReducer,
    tweets: tweetsReducer,
    search:searchReducer,
    [authApi.reducerPath]:authApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})
setupListeners(store.dispatch)