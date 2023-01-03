import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import getConfig from '../../../getConfig';

export const Tasks = createSlice({
    name: "Tasks",
    initialState: [],
    reducers: {
        setTasks: (state, actions) => {
            return actions.payload;
        }
    }
});

export const get = () => (dispatch) => {
    return axios.get(`https://todoapi-production-2cd1.up.railway.app/api/v1/tasks`, getConfig())
        .then((res) => dispatch(setTasks(res.data)));
};

export const create = (data) => (dispatch) => {
    return axios.post(`https://todoapi-production-2cd1.up.railway.app/api/v1/tasks`, data, getConfig())
        .then(() => {
            dispatch(setTasks())
            dispatch(get())
        })
};

export const delet = (id) => (dispatch) => {
    return axios.delete(`https://todoapi-production-2cd1.up.railway.app/api/v1/tasks/${id}`, getConfig())
        .then(() => {
            dispatch(setTasks())
            dispatch(get())
        })
};

export const update = (id, data) => (dispatch) => {
    return axios.put(`https://todoapi-production-2cd1.up.railway.app/api/v1/tasks/${id}`, data, getConfig())
        .then(() => {
            dispatch(setTasks())
            dispatch(get())
        })
};

export const { setTasks } = Tasks.actions;

export default Tasks.reducer;
