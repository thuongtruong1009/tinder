import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { hobbyGetAllHobbies } from '../actions/hobbyAction';

interface IHobbyState {
    data: IHobby[];
}

const initialState: IHobbyState = {
    data: [],
};

export const hobbySlice = createSlice({
    name: 'hobby',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(hobbyGetAllHobbies.fulfilled, (state, { payload }) => {
            state.data = payload;
        });
    },
});

// export const {} = userSlice.actions;

export const selectHobby = (state: RootState) => state.hobby;

export default hobbySlice.reducer;
