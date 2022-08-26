import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';

interface matchState {
    isShow: boolean;
    data: IDataGetNotificationResponse[];
}

const initialState: matchState = {
    isShow: false,
    data: [],
};

export const matchSlice = createSlice({
    name: 'match',
    initialState,
    reducers: {
        addMatch: (state, { payload }) => {
            state.data.push(payload);
            state.isShow = true;
        },
        skipMatch: (state) => {
            state.data.shift();
        },
        closeMatch: (state) => {
            state.data.length = 0;
            state.isShow = false;
        },
    },
});

export const { addMatch, closeMatch, skipMatch } = matchSlice.actions;

export const selectMatch = (state: RootState) => state.match;

export default matchSlice.reducer;
