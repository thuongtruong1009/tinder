import { configureStore } from '@reduxjs/toolkit';
import user from '../redux/reducers/userSlice';
import notification from '../redux/reducers/notificationSlice';
import info from '../redux/reducers/infoSlice';
import conversation from '../redux/reducers/conversationSlice';

export const store = configureStore({
    reducer: {
        user,
        notification,
        info,
        conversation,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
