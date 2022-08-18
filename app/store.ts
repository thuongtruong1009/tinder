import { configureStore } from '@reduxjs/toolkit';
import user from '../redux/reducers/userSlice';
import notification from '../redux/reducers/notificationSlice';

export const store = configureStore({
    reducer: {
        user,
        notification,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
