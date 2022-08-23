import { createAsyncThunk } from '@reduxjs/toolkit';
import beerApi from '../../apis/beerApi';
import educationApi from '../../apis/educationApi';
import genderApi from '../../apis/genderApi';
import hobbyApi from '../../apis/hobbyApi';

export const infoGetAllHobbies = createAsyncThunk('info/infoGetAllHobbies', async (_data, thunkAPI) => {
    try {
        const response = await hobbyApi.getAllHobbies();
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const infoGetAllGenders = createAsyncThunk('info/infoGetAllGenders', async (_data, thunkAPI) => {
    try {
        const response = await genderApi.getAllGenders();
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const infoGetAllEducations = createAsyncThunk('info/infoGetAllEducations', async (_data, thunkAPI) => {
    try {
        const response = await educationApi.getAllEducations();
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const infoGetAllBeers = createAsyncThunk('info/infoGetAllBeers', async (_data, thunkAPI) => {
    try {
        const response = await beerApi.getAllBeers();
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
