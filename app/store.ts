import { configureStore } from '@reduxjs/toolkit';
import user from '../redux/reducers/userSlice';
import notification from '../redux/reducers/notificationSlice';
import hobby from '../redux/reducers/hobbySlice';

export const store = configureStore({
    reducer: {
        user,
        notification,
        hobby,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
