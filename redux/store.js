import { configureStore } from "@reduxjs/toolkit";
import { toDosReducer } from "./reducerSlices/toDoSlice";
import { dndReducer } from "./reducerSlices/dndSlice";

const store = configureStore({
  reducer: { toDo: toDosReducer, dnd: dndReducer },
});

export default store;
