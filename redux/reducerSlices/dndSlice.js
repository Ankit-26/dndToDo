const { createSlice } = require("@reduxjs/toolkit");

const dndSlice = createSlice({
  name: "dndSlice",
  initialState: {},
  reducers: {
    addDraggingtoDo: (state, action) => {
      return { ...state, ...action?.payload };
    },
    clearDraggedToDo: (state, action) => {
      return {};
    },
  },
});

export const dndReducer = dndSlice.reducer;
export const dndAction = dndSlice.actions;
