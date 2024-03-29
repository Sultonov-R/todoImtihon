import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
  achievedTodo: [],
};

const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    doneTodo: (state, action) => {
      const achievedTodo = state.todos.find(todo => todo.id === action.payload);
      if (achievedTodo) {
        achievedTodo.completed = true;
        state.achievedTodo.push(achievedTodo)
      }
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.id !== action.payload);
    }
  }
});

export const { addTodo, doneTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
