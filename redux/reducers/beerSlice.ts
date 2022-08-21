import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { beerGetAllBeers } from '../actions/beerAction';
import { educationGetAllEducations } from '../actions/educationAction';

interface IBeerState {
    data: IBeer[];
}

const initialState: IBeerState = {
    data: [],
};

export const beerSlice = createSlice({
    name: 'beer',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(beerGetAllBeers.fulfilled, (state, { payload }) => {
            if (state.data) {
                state.data = payload;
            }
        });
    },
});

// export const {} = userSlice.actions;

export const selectBeer = (state: RootState): IBeerState => state.beer;

export default beerSlice.reducer;
