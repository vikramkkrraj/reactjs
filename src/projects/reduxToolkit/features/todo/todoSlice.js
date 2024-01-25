import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [{id : 1, text : "Hello World"}]
};

const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        addTodo : (state,action) => {
            const todo = {
                id : nanoid(),
                text : action.payload,
                complete : false
            }
            state.todos.push(todo);
        },
        removeTodo : (state, action) => {
            return state.todos = 
              state.todos.filter(todo => todo.id !==action.payload)
        },
        updateTodo : (state, action) => {},

    }
})

// Actions
export const {addTodo, updateTodo ,removeTodo }  = todoSlice.actions;

// Reducer
export const todoReducer = todoSlice.reducer;
