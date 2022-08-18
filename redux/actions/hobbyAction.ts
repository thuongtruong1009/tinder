import { createAsyncThunk } from '@reduxjs/toolkit';
import hobbyApi from '../../apis/hobbyApi';

export const hobbyGetAllHobbies = createAsyncThunk('hobby/hobbyGetAllHobbies', async (_data, thunkAPI) => {
    try {
        const response = await hobbyApi.getAllHobbies();
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
