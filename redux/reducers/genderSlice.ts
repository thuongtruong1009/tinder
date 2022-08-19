import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { genderGetAllGenders } from '../actions/genderAction';

interface IGenderState {
    data: IGender[];
}

const initialState: IGenderState = {
    data: [],
};

export const genderSlice = createSlice({
    name: 'gender',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(genderGetAllGenders.fulfilled, (state, { payload }) => {
            console.log('payload: ', payload);
            state.data = payload;
        });
    },
});

// export const {} = userSlice.actions;

export const selectGender = (state: RootState): IGenderState => state.gender;

export default genderSlice.reducer;
