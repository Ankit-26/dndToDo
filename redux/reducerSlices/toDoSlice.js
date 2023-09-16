const { createSlice } = require("@reduxjs/toolkit");

const toDoSlice = createSlice({
  name: "toDoSlice",
  initialState: {
    toDos: [
      {
        id: 1,
        desc: "My first toDo",
        type: { label: "Work", color: "#daf2d6" },
        completed: false,
        isDeleted: false,
      },
      {
        id: 2,
        desc: "My second toDo",
        type: { label: "Study", color: "#a1c5e8" },
        completed: true,
        isDeleted: false,
      },
    ],
  },
  reducers: {
    addToDo: (state, action) => {
      return { ...state, toDos: [action.payload, ...state.toDos] };
    },
    updateToDo: (state, action) => {
      return { ...state, toDos: action.payload };
    },
  },
});

export const toDosReducer = toDoSlice.reducer;
export const toDosAction = toDoSlice.actions;
