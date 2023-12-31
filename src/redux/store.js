import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from './apiSlice'
import filterReducer from './filterSlice'

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    filter: filterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
})