import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { userVerifyOTP, userCurrentUser } from '../actions/userActions';

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
    reducers: {},
    extraReducers(builder) {
        builder.addCase(userCurrentUser.fulfilled, (state, { payload }) => {
            const { token, user } = payload;
            state.isLogin = true;
            state.data = user;
            localStorage.setItem('token', token);
        });
        builder.addCase(userCurrentUser.rejected, (state, { payload }) => {
            state.isLogin = false;
            state.data = null;
            localStorage.removeItem('token');
        }),
            builder.addCase(userVerifyOTP.fulfilled, (state, { payload }) => {
                const { token, user } = payload;
                state.isLogin = true;
                state.data = user;
                localStorage.setItem('token', token);
            });
    },
});

// export const {} = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
