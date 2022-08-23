import axiosService from './axiosService';

const API = process.env.API_URL;
const ENDPOINT = 'conversation';
const URL = `${API}/${ENDPOINT}`;

const conversationApi = {
    getAll: () => axiosService.get<IGetAllConversationsResponse>(URL),
    get: (id: string, limit?: number, page?: number) =>
        axiosService.get<IGetConversationResponse>(`${URL}/${id}`, {
            params: {
                limit,
                page,
            },
        }),
};
export default conversationApi;
