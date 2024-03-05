import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './reducer.js';
export default configureStore({
  reducer: {
    todos: todoReducer,
  },
});