import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { infoGetAllBeers, infoGetAllEducations, infoGetAllGenders, infoGetAllHobbies } from '../actions/infoAction';

interface IInfoState {
    hobbies: IHobby[];
    beers: IBeer[];
    educations: IEducation[];
    genders: IGender[];
}

const initialState: IInfoState = {
    hobbies: [],
    beers: [],
    educations: [],
    genders: [],
};

export const infoSlice = createSlice({
    name: 'info',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(infoGetAllHobbies.fulfilled, (state, { payload }) => {
            if (state.hobbies) {
                state.hobbies = payload;
            }
        });

        builder.addCase(infoGetAllGenders.fulfilled, (state, { payload }) => {
            if (state.genders) {
                state.genders = payload;
            }
        });

        builder.addCase(infoGetAllEducations.fulfilled, (state, { payload }) => {
            if (state.educations) {
                state.educations = payload;
            }
        });

        builder.addCase(infoGetAllBeers.fulfilled, (state, { payload }) => {
            if (state.beers) {
                state.beers = payload;
            }
        });
    },
});

// export const {} = userSlice.actions;

export const selectInfo = (state: RootState) => state.info;

export default infoSlice.reducer;
