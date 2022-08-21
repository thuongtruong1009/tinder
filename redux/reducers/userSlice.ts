import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import {
    userVerifyOTP,
    userCurrentUser,
    userUpdateLocation,
    userUpdateHobbies,
    userFirstUpdate,
    userUpdateBio,
    userUpdateReligion,
    userUpdateEducation,
    userUpdateGender,
    userUpdateBeer,
    userUpdateReason,
} from '../actions/userActions';

interface UserState {
    isLogin: boolean;
    data: IUser | null;
}

const initialState: UserState = {
    isLogin: false,
    data: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        userLogOut: () => {
            localStorage.removeItem('token');
            return initialState;
        },
    },
    extraReducers(builder) {
        builder.addCase(userCurrentUser.fulfilled, (state, { payload }) => {
            const { token, user } = payload;
            state.isLogin = true;
            state.data = user;
            localStorage.setItem('token', token);
        });
        builder.addCase(userCurrentUser.rejected, (state) => {
            state.isLogin = false;
            state.data = null;
            localStorage.removeItem('token');
        });
        builder.addCase(userVerifyOTP.fulfilled, (state, { payload }) => {
            const { token, user } = payload;
            state.isLogin = true;
            state.data = user;
            localStorage.setItem('token', token);
        });
        builder.addCase(userUpdateLocation.fulfilled, (state, { payload }) => {
            if (state.data) {
                state.data.lastLocation = payload;
            }
        });
        builder.addCase(userUpdateHobbies.fulfilled, (state, { payload }) => {
            if (state.data) {
                state.data.hobbies = payload;
            }
        });
        builder.addCase(userFirstUpdate.fulfilled, (state, { payload }) => {
            if (state.data) {
                state.data.status.isFirstUpdate = false;
                state.data.name = payload.name;
                state.data.email = payload.email;
                state.data.gender = payload.gender;
                state.data.birthday = payload.birthday;
            }
        });
        builder.addCase(userUpdateBio.fulfilled, (state, { payload }) => {
            if (state.data) {
                state.data.profile.bio = payload;
            }
        });
        builder.addCase(userUpdateReligion.fulfilled, (state, { payload }) => {
            if (state.data) {
                state.data.info.religion = payload;
            }
        });
        builder.addCase(userUpdateEducation.fulfilled, (state, { payload }) => {
            if (state.data) {
                state.data.info.education = payload;
            }
        });
        builder.addCase(userUpdateGender.fulfilled, (state, { payload }) => {
            if (state.data) {
                state.data.gender = payload;
            }
        });
        builder.addCase(userUpdateBeer.fulfilled, (state, { payload }) => {
            if (state.data) {
                state.data.info.beer = payload;
            }
        });
        builder.addCase(userUpdateReason.fulfilled, (state, { payload }) => {
            if (state.data) {
                state.data.info.reason = payload;
            }
        });
    },
});

export const { userLogOut } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
