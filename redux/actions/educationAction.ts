import { createAsyncThunk } from '@reduxjs/toolkit';
import educationApi from '../../apis/educationApi';

export const educationGetAllEducations = createAsyncThunk(
    'education/educationGetAllEducations',
    async (_data, thunkAPI) => {
        try {
            const response = await educationApi.getAllEducations();
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);
