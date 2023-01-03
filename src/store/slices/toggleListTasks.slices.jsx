import { createSlice } from '@reduxjs/toolkit';

export const ListTasks = createSlice({
    name: "toggleListTasks",
    initialState: false,
    reducers: {
        toggleList: (state, actions) => {
            return !state;
        }
    }
});

export const { toggleList } = ListTasks.actions;

export default ListTasks.reducer;
