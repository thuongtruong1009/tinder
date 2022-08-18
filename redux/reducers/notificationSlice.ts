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
    reducers: {},
    extraReducers(builder) {
        builder.addCase(notificationGetNotifications.fulfilled, (state, { payload }) => {
            state.data = payload;
        });
    },
});

// export const {} = userSlice.actions;

export const selectNotification = (state: RootState) => state.notification;

export default notificationSlice.reducer;
