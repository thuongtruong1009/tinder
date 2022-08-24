import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../../app/store';
import { getUniqueListBy } from '../../utils/array';
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
                isExist.conversation.updatedAt = payload.message.updatedAt;
                //* remove duplicate message by _id
                isExist.conversation.messages = getUniqueListBy([...isExist.conversation.messages], '_id');
            }
            //* sort by createdAt
            state.data.sort((a, b) => {
                return new Date(b.conversation.updatedAt).getTime() - new Date(a.conversation.updatedAt).getTime();
            });
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
            state.data.sort((a, b) => {
                return new Date(b.conversation.updatedAt).getTime() - new Date(a.conversation.updatedAt).getTime();
            });
        });
        builder.addCase(conversationGet.fulfilled, (state, { payload }) => {
            const isExist = state.data.find((item) => item.conversation._id === payload.conversation._id);
            if (isExist) {
                if (isExist.conversation.messages.length !== 0) {
                    //* Remove duplicate message
                    isExist.conversation.messages = getUniqueListBy(
                        [...isExist.conversation.messages, ...payload.conversation.messages],
                        '_id',
                    );

                    isExist.limit = payload.limit;
                    isExist.page = payload.page;
                    isExist.next = payload.next;
                } else {
                    isExist.conversation = payload.conversation;
                    //* Remove duplicate mesasge
                    isExist.conversation.messages = [
                        ...new Set([...isExist.conversation.messages, ...payload.conversation.messages]),
                    ];
                    isExist.limit = payload.limit;
                    isExist.page = payload.page;
                    isExist.next = payload.next;
                }
            } else {
                state.data.push(payload);
            }
            //* sort by createdAt
            state.data.sort((a, b) => {
                return new Date(b.conversation.updatedAt).getTime() - new Date(a.conversation.updatedAt).getTime();
            });
        });
        builder.addCase(messageCreate.fulfilled, (state, { payload }) => {
            const isExist = state.data.find((item) => item.conversation._id === payload.conversationId);
            if (isExist) {
                isExist.conversation.messages.unshift(payload.message);
            }
            //* sort by createdAt
            state.data.sort((a, b) => {
                return new Date(b.conversation.updatedAt).getTime() - new Date(a.conversation.updatedAt).getTime();
            });
        });
    },
});

export const { addMessage, setLastLoginById } = conversationSlice.actions;

export const selectConversation = (state: RootState) => state.conversation;

export default conversationSlice.reducer;
