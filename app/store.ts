import { configureStore } from '@reduxjs/toolkit';
import user from '../redux/reducers/userSlice';
import notification from '../redux/reducers/notificationSlice';
import hobby from '../redux/reducers/hobbySlice';
import gender from '../redux/reducers/genderSlice';
import conversation from '../redux/reducers/conversationSlice';

export const store = configureStore({
    reducer: {
        user,
        notification,
        hobby,
        gender,
        conversation,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
