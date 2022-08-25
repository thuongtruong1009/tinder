import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { notificationGetNotifications } from '../actions/notificationAction';

interface NotificationState {
    isCalled: boolean;
    data: IDataGetNotificationResponse[];
}

const initialState: NotificationState = {
    isCalled: false,
    data: [],
};

export const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        addNotification: (state, { payload }) => {
            state.data.unshift(payload);
        },
    },
    extraReducers(builder) {
        builder.addCase(notificationGetNotifications.fulfilled, (state, { payload }) => {
            state.data = payload;
        });
    },
});

export const { addNotification } = notificationSlice.actions;

export const selectNotification = (state: RootState) => state.notification;

export default notificationSlice.reducer;
