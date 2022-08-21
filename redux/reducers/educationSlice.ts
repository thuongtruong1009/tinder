import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { educationGetAllEducations } from '../actions/educationAction';

interface IEducationState {
    data: IEducation[];
}

const initialState: IEducationState = {
    data: [],
};

export const educationSlice = createSlice({
    name: 'education',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(educationGetAllEducations.fulfilled, (state, { payload }) => {
            if (state.data) {
                state.data = payload;
            }
        });
    },
});

// export const {} = userSlice.actions;

export const selectEducation = (state: RootState): IEducationState => state.education;

export default educationSlice.reducer;
