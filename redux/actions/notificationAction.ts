import { createAsyncThunk } from '@reduxjs/toolkit';
import notificationApi from '../../apis/notificationApi';

export const notificationGetNotifications = createAsyncThunk(
    'notification/GetNotifications',
    async (_data, thunkAPI) => {
        try {
            const response = await notificationApi.getNotifications();
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);
export const notificationUpdateSeenNotification = createAsyncThunk(
    'notification/UpdateSeenNotification',
    async (id: string, thunkAPI) => {
        try {
            const response = await notificationApi.updateSeenNotification(id);
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);
