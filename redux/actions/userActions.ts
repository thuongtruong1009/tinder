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

export const userUpdateHobbies = createAsyncThunk('user/updateHobbies', async (data: string[], thunkAPI) => {
    try {
        const response = await userApi.updateHobbies(data);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
export const userFirstUpdate = createAsyncThunk('user/userFirstUpdate', async (data: IFirstUpdateUser, thunkAPI) => {
    try {
        console.log('data: ', data);
        const response = await userApi.firstUpdate(data);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const userUpdateBio = createAsyncThunk('user/userUpdateBio', async (data: IUpdateBio, thunkAPI) => {
    try {
        console.log('data: ', data);
        const response = await userApi.updateBio(data);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const userUpdateReligion = createAsyncThunk(
    'user/userUpdateReligion',
    async (data: IUpdateReligion, thunkAPI) => {
        try {
            console.log('data: ', data);
            const response = await userApi.updateReligion(data);
            return response.data.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const userUpdateEducation = createAsyncThunk('user/userUpdateEducation', async (data: string, thunkAPI) => {
    try {
        console.log('data: ', data);
        const response = await userApi.updateEducation(data);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const userUpdateGender = createAsyncThunk('user/userUpdateGender', async (data: string, thunkAPI) => {
    try {
        console.log('data: ', data);
        const response = await userApi.updateGender(data);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const userUpdateBeer = createAsyncThunk('user/userUpdateBeer', async (data: string, thunkAPI) => {
    try {
        console.log('data: ', data);
        const response = await userApi.updateBeer(data);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const userUpdateReason = createAsyncThunk('user/userUpdateReason', async (data: string, thunkAPI) => {
    try {
        console.log('data: ', data);
        const response = await userApi.updateReason(data);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const userUploadAlbums = createAsyncThunk('user/userUploadAlbums', async (data: FormData, thunkAPI) => {
    try {
        console.log('data: ', data);
        const response = await userApi.uploadAlbums(data);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const userUpdateFavorite = createAsyncThunk('user/userUpdateFavorite', async (data: string, thunkAPI) => {
    try {
        console.log('data: ', data);
        const response = await userApi.updateFavorite(data);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const userUpdateDefault = createAsyncThunk('user/userUpdateDefault', async (data: string, thunkAPI) => {
    try {
        console.log('data: ', data);
        const response = await userApi.updateDefault(data);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const userDeleteImage = createAsyncThunk('user/userDeleteImage', async (data: string, thunkAPI) => {
    try {
        console.log('data: ', data);
        const response = await userApi.deleteImage(data);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const userUpdateCommonInfo = createAsyncThunk('user/userUpdateCommonInfo', async (data: FormData, thunkAPI) => {
    try {
        console.log('data: ', data);
        const response = await userApi.updateCommonInfo(data);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const userUpdateHeight = createAsyncThunk('user/userUpdateHeight', async (data: number, thunkAPI) => {
    try {
        console.log('data: ', data);
        const response = await userApi.updateHeight(data);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
