import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { conversationGet, conversationGetAll, messageCreate } from '../actions/conversationActions';

interface ConversationState {
    isCalled: boolean;
    data: {
        conversation: IConversation;
        limit: number;
        page: number;
        next: boolean;
    }[];
}

const initialState: ConversationState = {
    isCalled: false,
    data: [],
};

export const conversationSlice = createSlice({
    name: 'conversation',
    initialState,
    reducers: {
        addMessage: (state, { payload }) => {
            const isExist = state.data.find((item) => item.conversation._id === payload.conversationId);
            if (isExist) {
                isExist.conversation.messages?.unshift(payload.message);
            }
        },
        setLastLoginById: (state, { payload }) => {
            const isExist = state.data.find((item) => item.conversation._id === payload.conversationId);
            if (isExist) {
                isExist.conversation.users[0].lastLogin = payload.lastLogin;
            }
        },
    },
    extraReducers(builder) {
        builder.addCase(conversationGetAll.fulfilled, (state, { payload }) => {
            const newData = [...state.data, ...payload];
            const uniqueData = newData.filter(
                (item, index) =>
                    newData.findIndex((item2) => item2.conversation._id === item.conversation._id) === index,
            );
            state.data = uniqueData;
            state.isCalled = true;
        });
        builder.addCase(conversationGet.fulfilled, (state, { payload }) => {
            const isExist = state.data.find((item) => item.conversation._id === payload.conversation._id);
            if (isExist) {
                if (isExist.conversation.messages.length !== 0) {
                    //* Remove duplicate message
                    isExist.conversation.messages = [
                        ...new Set([...isExist.conversation.messages, ...payload.conversation.messages]),
                    ];
                    isExist.limit = payload.limit;
                    isExist.page = payload.page;
                    isExist.next = payload.next;
                } else {
                    isExist.conversation = payload.conversation;
                    //* Remove duplicate message
                    isExist.conversation.messages = [
                        ...new Set([...isExist.conversation.messages, ...payload.conversation.messages]),
                    ];
                    isExist.limit = payload.limit;
                    isExist.page = payload.page;
                    isExist.next = payload.next;
                }
                // state.data = state.data.map((item) => {
                //     if (item.conversation._id === payload.conversation._id) {
                //         return {
                //             ...item,
                //             conversation: payload.conversation,
                //         };
                //     }
                //     return item;
                // });
            } else {
                state.data.push(payload);
            }
        });
        builder.addCase(messageCreate.fulfilled, (state, { payload }) => {
            const isExist = state.data.find((item) => item.conversation._id === payload.conversationId);
            if (isExist) {
                isExist.conversation.messages.unshift(payload.message);
            }
        });
    },
});

export const { addMessage, setLastLoginById } = conversationSlice.actions;

export const selectConversation = (state: RootState) => state.conversation;

export default conversationSlice.reducer;
