import { createSlice } from '@reduxjs/toolkit';

export const watchPassword = createSlice({
    name: "watchPassword",
    initialState: false,
    reducers: {
        toggleWatchPassword: (state, actions) => {
            return !state;
        }
    }
});

export const { toggleWatchPassword } = watchPassword.actions;

export default watchPassword.reducer;
