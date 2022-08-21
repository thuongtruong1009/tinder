import { createAsyncThunk } from '@reduxjs/toolkit';
import beerApi from '../../apis/beerApi';

export const beerGetAllBeers = createAsyncThunk('beer/beerGetAllBeers', async (_data, thunkAPI) => {
    try {
        const response = await beerApi.getAllBeers();
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
