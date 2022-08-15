import { createAsyncThunk } from '@reduxjs/toolkit';
import authApi from '../../apis/authApi';

export const userCurrentUser = createAsyncThunk('user/currentUser', async (_data, thunkAPI) => {
    try {
        const response = await authApi.currentUser();
        return response.data.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
});

export const userVerifyOTP = createAsyncThunk('user/verifyOTP', async (data: IVerifyOTP, thunkAPI) => {
    try {
        const response = await authApi.verifyOTP(data);
        return response.data.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
});

export const userRegisterWithPhone = createAsyncThunk(
    'user/registerWithPhone',
    async (data: ILoginWithPhone, thunkAPI) => {
        try {
            const response = await authApi.registerWithPhone(data);
            return response.data.data;
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const userLoginWithPhone = createAsyncThunk('user/loginWithPhone', async (data: ILoginWithPhone, thunkAPI) => {
    try {
        const response = await authApi.loginWithPhone(data);
        return response.data.data;
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
});
