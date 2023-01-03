import { configureStore } from '@reduxjs/toolkit'
import selectTaskSlices from './slices/selectTask.slices';
import tasksSlices from './slices/tasks.slices';
import toggleListTasksSlices from './slices/toggleListTasks.slices';
import watchPasswordSlices from './slices/watchPassword.slices';

export default configureStore({
    reducer: {
        toggleListTasks: toggleListTasksSlices,
        watchPassword: watchPasswordSlices,
        Tasks: tasksSlices,
        selectTask: selectTaskSlices
    }
});