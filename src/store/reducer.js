

import { createSlice } from '@reduxjs/toolkit'
export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items=action.payload
    },
    setComplete: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload)
      if (todo) {    
        todo.completed = !todo.completed
      }
    },   
  },
})
export const {
    addItem,
    setComplete,
  } = todoSlice.actions
export default todoSlice.reducer;
