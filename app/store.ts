import { configureStore } from '@reduxjs/toolkit';
import user from '../redux/reducers/userSlice';
import notification from '../redux/reducers/notificationSlice';
import info from '../redux/reducers/infoSlice';
import conversation from '../redux/reducers/conversationSlice';
import match from '../redux/reducers/matchSlice';

export const store = configureStore({
    reducer: {
        user,
        notification,
        info,
        conversation,
        match,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
