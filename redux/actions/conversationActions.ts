import { createAsyncThunk } from '@reduxjs/toolkit';
import conversationApi from '../../apis/conversationApi';
import messageApi from '../../apis/messageApi';

export const conversationGetAll = createAsyncThunk('conversation/conversationGetAll', async (_data, thunkAPI) => {
    try {
        const state: any = thunkAPI.getState();
        const _id = state.user.data._id;
        const response = await conversationApi.getAll();
        return response.data.data.map((conversation) => {
            const users = conversation.conversation.users.filter((user) => user._id !== _id);
            return {
                ...conversation,
                conversation: {
                    ...conversation.conversation,
                    users: users,
                },
            };
        });
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});

export const conversationGet = createAsyncThunk(
    'conversation/conversationGet',
    async (
        {
            id,
            limit,
            page,
        }: {
            id: string;
            limit?: number;
            page?: number;
        },
        thunkAPI,
    ) => {
        try {
            const state: any = thunkAPI.getState();
            const _id = state.user.data._id;
            let response = (await conversationApi.get(id, limit, page)).data.data;
            response.conversation.users = response.conversation.users.filter(
                (user: IConversationUser) => user._id !== _id,
            );
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    },
);

export const messageCreate = createAsyncThunk('conversation/messageCreate', async (data: FormData, thunkAPI) => {
    try {
        const response = await messageApi.create(data);
        return response.data.data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error);
    }
});
