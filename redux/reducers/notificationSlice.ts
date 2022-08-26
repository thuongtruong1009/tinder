import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { notificationGetNotifications, notificationUpdateSeenNotification } from '../actions/notificationAction';

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
            state.isCalled = true;
            state.data = payload;
        });
        builder.addCase(notificationUpdateSeenNotification.fulfilled, (state, { payload }) => {
            const isExist = state.data.find((item) => item._id === payload._id);
            if (isExist) {
                isExist.hasSeen = true;
            }
        });
    },
});

export const { addNotification } = notificationSlice.actions;

export const selectNotification = (state: RootState) => state.notification;

export default notificationSlice.reducer;
