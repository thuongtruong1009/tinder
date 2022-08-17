import { createAsyncThunk } from '@reduxjs/toolkit';
import authApi from '../../apis/authApi';
import mapApi from '../../apis/mapApi';
import userApi from '../../apis/userApi';

export const userLoginWithPhone = createAsyncThunk('user/loginWithPhone', async (body: ILoginWithPhone, thunkAPI) => {
    try {
        const response = await authApi.loginWithPhone(body);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const userSendOTPRegister = createAsyncThunk(
    'user/sendOTPRegister',
    async (body: ISendOTPRegister, thunkAPI) => {
        try {
            const response = await authApi.sendOTPRegister(body);
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const userCurrentUser = createAsyncThunk('user/currentUser', async (_data, thunkAPI) => {
    try {
        const response = await authApi.currentUser();
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const userVerifyOTP = createAsyncThunk('user/verifyOTP', async (data: IVerifyOTP, thunkAPI) => {
    try {
        const response = await authApi.verifyOTP(data);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const userUpdateLocation = createAsyncThunk('user/updateLocation', async (data: IUpdateLocation, thunkAPI) => {
    try {
        const response = await mapApi.updateLocation(data);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const userFindFriendsAround = createAsyncThunk('user/findFriendsAround', async (_data, thunkAPI) => {
    try {
        const response = await mapApi.findFriendsAround();
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const userBlockUser = createAsyncThunk('user/blockUser', async (id: string, thunkAPI) => {
    try {
        const response = await userApi.blockUser(id);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const userLikeUser = createAsyncThunk('user/likeUser', async (id: string, thunkAPI) => {
    try {
        const response = await userApi.likeUser(id);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
