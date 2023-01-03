import { createSlice } from '@reduxjs/toolkit';

export const selectTask = createSlice({
    name: "selectTask",
    initialState: null,
    reducers: {
        setSelectTask: (state, actions) => {
            return actions.payload;
        }
    }
});

export const { setSelectTask } = selectTask.actions;

export default selectTask.reducer;