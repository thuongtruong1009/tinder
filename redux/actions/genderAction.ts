import { createAsyncThunk } from '@reduxjs/toolkit';
import genderApi from '../../apis/genderApi';

export const genderGetAllGenders = createAsyncThunk('gender/genderGetAllGenders', async (_data, thunkAPI) => {
    try {
        const response = await genderApi.getAllGenders();
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
